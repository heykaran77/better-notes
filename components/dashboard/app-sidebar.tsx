import * as React from "react";
import { SearchForm } from "@/components/dashboard/search-form";
import { getNotebooks } from "@/server/notebook";
import Image from "next/image";
import SidebarData from "@/components/dashboard/sidebar-data";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Suspense } from "react";
import Link from "next/link";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const noteBooks = await getNotebooks();
  const data = {
    navMain: [
      ...(noteBooks?.notebooks?.map((notebook) => ({
        title: notebook.name,
        url: `/dashboard/notebook/${notebook.id}`,
        items: notebook.notes.map((note) => ({
          title: note.title,
          url: `/dashboard/note/${note.id}`,
        })),
      })) ?? []),
    ],
  };
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <Sidebar {...props}>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/logo_512x512.png"}
              alt="betterNotes"
              width={32}
              height={32}
              className="rounded-lg dark:bg-white"
            />
            <h3 className="text-lg text-neutral-800 font-bold tracking-tighter dark:text-neutral-200">
              betterNotes
            </h3>
          </Link>
          <SearchForm />
        </SidebarHeader>
        <SidebarContent className="gap-0">
          {/* We create a collapsible SidebarGroup for each parent. */}
          <SidebarData data={data} />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </Suspense>
  );
}

const SidebarSkeleton = () => {
  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="h-8 w-8 rounded-lg bg-muted animate-pulse" />
          <div className="h-4 w-24 rounded bg-muted animate-pulse" />
        </div>

        {/* Search bar skeleton */}
        <div className="mt-3 h-9 rounded-md bg-muted animate-pulse" />
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="gap-0">
        {[...Array(3)].map((_, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel>
              <div className="h-4 w-28 rounded bg-muted animate-pulse" />
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {[...Array(4)].map((_, j) => (
                  <SidebarMenuItem key={j}>
                    <SidebarMenuSkeleton />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
};
