import * as React from "react";

import { SearchForm } from "@/components/dashboard/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getNotebooks } from "@/server/notebook";
import Image from "next/image";
import SidebarData from "@/components/dashboard/sidebar-data";
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
  );
}
