import CreateNotebookButton from "@/components/notebooks/CreateNotebook";
import PageWrapper from "@/components/dashboard/page-wrapper";
import { getNotebooks } from "@/server/notebook";
import NoteBookCard from "@/components/dashboard/notebook-card";

export default async function Dashboard() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadCrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Notebooks
        </h1>
        <CreateNotebookButton />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebooks.success &&
          notebooks.notebooks?.map((notebook) => (
            <NoteBookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>

      {notebooks.success && notebooks.notebooks?.length === 0 && (
        <div>
          <p>No notebooks found</p>
        </div>
      )}
    </PageWrapper>
  );
}
