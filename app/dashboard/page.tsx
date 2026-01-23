import CreateNotebookButton from "@/components/notebooks/create-notebook";
import PageWrapper from "@/components/dashboard/page-wrapper";
import { getNotebooks } from "@/server/notebook";
import NoteBookCard from "@/components/notebooks/notebook-card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <PageWrapper breadCrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <Suspense fallback={<NotebookSkeleton />}>
        <NotebookList />
      </Suspense>
    </PageWrapper>
  );
}

async function NotebookList() {
  const notebooks = await getNotebooks();
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Notebooks
        </h1>
        <CreateNotebookButton />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {notebooks.success &&
          notebooks.notebooks?.map((notebook) => (
            <NoteBookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>

      {notebooks.success && notebooks.notebooks?.length === 0 && (
        <div className="mt-4">
          <p className="text-muted-foreground">
            No notebooks found. Create your first one!
          </p>
        </div>
      )}
    </>
  );
}

const NoteBookCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-1/4" />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </CardFooter>
    </Card>
  );
};

export const NotebookSkeleton = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <NoteBookCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};
