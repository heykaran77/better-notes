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
import { insertNotebookSchema } from "@/db/schema";
import { authClient } from "@/lib/auth-client";
import { createNotebook } from "@/server/notebook";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const notebookFormSchema = insertNotebookSchema.pick({ name: true }).extend({
  name: z
    .string()
    .trim()
    .min(3, "Name is too short")
    .max(20, "Name is too long"),
});

export default function CreateNotebookButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof notebookFormSchema>>({
    resolver: zodResolver(notebookFormSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleSubmit(data: z.infer<typeof notebookFormSchema>) {
    try {
      startTransition(async () => {
        const userId = (await authClient.getSession()).data?.user.id;
        if (!userId) {
          toast.error("You must be logged in to create notebook");
          return;
        }

        const response = await createNotebook({
          ...data,
          userId,
        });

        if (response.success) {
          toast.success("Notebook created successfully");
          form.reset();
          router.refresh();
          setIsOpen(false);
        } else {
          toast.error(response.message);
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer w-max text-sm">
          <Plus size={4} /> Create Notebook
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Notebook</DialogTitle>
          <DialogDescription>Give your notebook a name</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input {...field} placeholder="Name" type="text" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]}></FieldError>
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
                "Create Notebook"
              )}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
