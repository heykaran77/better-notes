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
import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface NoteBookCardProps {
  notebook: Notesbooks;
}

export default function NoteBookCard({ notebook }: NoteBookCardProps) {
  const router = useRouter();
  const [deletePending, startDeleteTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = () => {
    startDeleteTransition(async () => {
      try {
        const response = await deleteNotebook(notebook.id);

        if (response.success) {
          toast.success("Note deleted successfully");
          router.refresh();
          setIsOpen(false);
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
        <Button
          className=""
          variant={"default"}
          disabled={deletePending}
          asChild>
          <Link href={`/dashboard/notebook/${notebook.id}`}>View</Link>
        </Button>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <Button
              variant={"destructive"}
              className="cursor-pointer"
              disabled={deletePending}>
              {deletePending ? (
                <>
                  <Loader2 size={4} className="animate-spin" /> Deleteing...
                </>
              ) : (
                <>
                  <Trash2 size={4} /> Delete
                </>
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                notebook from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="cursor-pointer"
                onClick={handleDelete}
                disabled={deletePending}>
                {deletePending ? (
                  <>
                    <Loader2 size={4} className="animate-spin" /> Confirm
                  </>
                ) : (
                  <>
                    <Trash2 size={4} /> Confirm
                  </>
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
