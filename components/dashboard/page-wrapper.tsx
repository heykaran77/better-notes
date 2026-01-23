import Logout from "@/components/common/logout";
import { ModeToggle } from "@/components/common/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Fragment } from "react";

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
    <div className="flex flex-col gap-4">
      <header className="flex items-center p-4  border-b">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarTrigger className="cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>B</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
            <Breadcrumb className="hidden md:block">
              <BreadcrumbList className="flex items-center gap-2">
                {breadCrumbs.map((breadcrumb, index) => (
                  <Fragment key={index}>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index !== breadCrumbs.length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </Fragment>
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
