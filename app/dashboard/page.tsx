import CreateNotebookButton from "@/components/notebooks/CreateNotebook";
import { Notebooks } from "@/components/notebooks/Notebooks";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebook";

export default async function Dashboard() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadCrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <CreateNotebookButton />
      {notebooks.success &&
        notebooks.notebooks?.map((notebook) => (
          <div key={notebook.id}>
            <h1>{notebook.name}</h1>
            <p className="text-muted-foreground">
              {new Date(notebook.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}

      {notebooks.success && notebooks.notebooks?.length === 0 && (
        <div>
          <p>No notebooks found</p>
        </div>
      )}
    </PageWrapper>
  );
}
