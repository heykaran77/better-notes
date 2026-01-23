import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function NoteCardSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col gap-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <div className="flex-1" />
      <CardFooter className="flex flex-wrap items-center gap-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </CardFooter>
    </Card>
  );
}

export function NoteCardsSkeleton() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <NoteCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
