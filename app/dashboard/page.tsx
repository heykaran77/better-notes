import { Notebooks } from "@/components/notebooks/Notebooks";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notes";

export default async function Dashboard() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadCrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      {/* <Notebooks /> */}
      {notebooks.success && notebooks.notebooks?.map((notebook) => {
        
      })}
    </PageWrapper>
  );
}
