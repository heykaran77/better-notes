import PageWrapper from "@/components/dashboard/page-wrapper";
import { getNotebookById } from "@/server/notebook";

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
      {notebook.name}

      <h1 className="text-muted-foreground">
        {notebook.notes.map((note) => (
          <div key={note.id}>{note.title}</div>
        ))}
      </h1>
    </PageWrapper>
  );
}
