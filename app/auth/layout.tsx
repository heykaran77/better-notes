import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            betterNotes
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block pointer-events-none">
        <h1 className="absolute text-3xl z-10 font-bold tracking-tight mix-blend-soft-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          betterNotes<sup className="font-bold">&trade;</sup>
        </h1>
        <Image
          src="/placeholder-2.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
          sizes="2"
          fill
        />
      </div>
    </div>
  );
}
