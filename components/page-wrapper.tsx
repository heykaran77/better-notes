import Logout from "@/components/common/logout";
import { ModeToggle } from "@/components/common/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface PageWrapperProps {
  children: React.ReactNode;
  breadCrumbs: {
    label: string;
    href: string;
  }[];
}

export default function PageWrapper({
  children,
  breadCrumbs,
}: PageWrapperProps) {
  return (
    <div className="flex flex-col gap-4 border">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="cursor-pointer" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadCrumbs.map((breadcrumb, index) => (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Logout />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
    </div>
  );
}
