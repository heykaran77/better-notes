import PageWrapper from "@/components/dashboard/page-wrapper";
import CreateNote from "@/components/notebooks/create-note";
import NoteCard from "@/components/notebooks/note-card";
import { Button } from "@/components/ui/button";
import { getNotebookById } from "@/server/notebook";
import { Plus } from "lucide-react";

interface NotebookPageProps {
  notebookId: string;
}

export default async function NotebookPage({
  params,
}: {
  params: Promise<NotebookPageProps>;
}) {
  const { notebookId } = await params;
  const { notebook, success, message } = await getNotebookById(notebookId);

  if (!success) {
    return <div>Error: {message}</div>;
  }

  if (!notebook) {
    return <div>Notebook not found</div>;
  }

  return (
    <PageWrapper
      breadCrumbs={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          label: notebook.name,
          href: `/dashboard/notebook/${notebook.id}`,
        },
      ]}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
          {notebook.name}
        </h1>
        <CreateNote notesbookId={notebook.id} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notebook.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
}
