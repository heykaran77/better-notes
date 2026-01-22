"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { insertNotebookSchema, insertNoteSchema } from "@/db/schema";
import { authClient } from "@/lib/auth-client";
import { createNotebook } from "@/server/notebook";
import { createNote } from "@/server/notes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const noteFormSchema = insertNoteSchema.pick({ title: true }).extend({
  title: z.string().min(1, "Title is required"),
});

interface CreateNoteProps {
  notesbookId: string;
}

export default function CreateNote({ notesbookId }: CreateNoteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof noteFormSchema>>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      title: "",
    },
  });
  const handleSubmit = (data: z.infer<typeof noteFormSchema>) => {
    startTransition(async () => {
      const userId = (await authClient.getSession()).data?.user.id;
      if (!userId) {
        toast.error("Must be logged-in to create note.");
        return;
      }

      const response = await createNote({ ...data, notesbookId });
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
      setIsOpen(false);
      form.reset();
      router.refresh();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer w-max text-sm">
          <Plus size={4} /> Create Note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
          <DialogDescription>Give your note a name</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <Input
                    {...field}
                    placeholder="My todo notes..."
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer">
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Note"
              )}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
