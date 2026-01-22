import PageWrapper from "@/components/dashboard/page-wrapper";
import Tiptap from "@/components/dashboard/tiptap";
import { type JSONContent } from "@tiptap/react";
import { getNotesById } from "@/server/notes";

interface NotePageProps {
  noteId: string;
}

export default async function NotePage({
  params,
}: {
  params: Promise<NotePageProps>;
}) {
  const { noteId } = await params;
  const { note, success, message } = await getNotesById(noteId);

  if (!success) {
    return <div>Error: {message}</div>;
  }

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <PageWrapper
      breadCrumbs={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          label: note.notesbook.name,
          href: `/dashboard/notebook/${note.notesbook.id}`,
        },
        {
          label: note.title,
          href: `/dashboard/note/${note.id}`,
        },
      ]}>
      {note.title}
      <Tiptap content={note?.content as JSONContent[]} noteId={noteId} />
    </PageWrapper>
  );
}
