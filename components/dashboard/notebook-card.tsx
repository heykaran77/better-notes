"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Notesbooks } from "@/db/schema";
import { deleteNotebook } from "@/server/notebook";
import { Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface NoteBookCardProps {
  notebook: Notesbooks;
}

export default function NoteBookCard({ notebook }: NoteBookCardProps) {
  const router = useRouter();
  const [deletePending, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      try {
        const response = await deleteNotebook(notebook.id);

        if (response.success) {
          toast.success("Note deleted successfully");
          router.refresh();
        }
      } catch (error) {
        toast.error("Failed to delete notebook");
      }
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{notebook.name}</CardTitle>
      </CardHeader>
      <CardContent>{notebook.notes.length ?? 0} notes</CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2">
        <Button className="" variant={"default"} asChild>
          <Link href={`/dashboard/notebook/${notebook.id}`}>View</Link>
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
