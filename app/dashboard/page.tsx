import Logout from "@/components/common/logout";
import PageWrapper from "@/components/page-wrapper";

export default function Dashboard() {
  return (
    <PageWrapper breadCrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      Dashboard
      <Logout />
    </PageWrapper>
  );
}
