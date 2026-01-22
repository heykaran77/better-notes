"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Notes } from "@/db/schema";
import { deleteNote } from "@/server/notes";
import { Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface NoteCardProps {
  note: Notes;
}
export default function NoteCard({ note }: NoteCardProps) {
  const [deletePending, startDeleteTransition] = useTransition();
  const router = useRouter();

  

  const handleDelete = () => {
    try {
      startDeleteTransition(async () => {
        const response = await deleteNote(note.id);

        if (response.success) {
          toast.success(response.message);
          router.refresh();
        } else {
          toast.error("Some error occured");
        }
      });
    } catch (error) {
      const e = error as Error;
      console.log("Error occured: ", e.message);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Updated At: {new Date(note.updatedAt).toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2">
        <Button className="cursor-pointer" variant={"default"} asChild>
          <Link href={`/dashboard/note/${note.id}`}>View</Link>
        </Button>
        <Button
          variant={"destructive"}
          className="cursor-pointer"
          onClick={handleDelete}
          disabled={deletePending}>
          {deletePending ? (
            <>
              <Loader2 size={4} className="animate-spin" /> deleting
            </>
          ) : (
            <>
              <Trash2 size={4} /> delete
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
