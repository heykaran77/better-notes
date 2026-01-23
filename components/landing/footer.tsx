import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  XLogo,
} from "@/components/svg/social";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="border-b pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link
            href="/"
            aria-label="go home"
            className="block size-fit mx-auto md:mx-0">
            <Image
              src="/logo_512x512.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-lg dark:bg-white"
            />
          </Link>
          <h1 className="mt-4 text-center text-muted-foreground max-w-lg">
            betterNotes is a note-taking app that allows you to create and
            manage your notes in one place.
          </h1>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} betterNotes, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link
              href="https://x.com/heykaran77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block">
              <XLogo />
            </Link>

            <Link
              href="https://instagram.com/heykaran77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block">
              <InstagramLogo />
            </Link>
            <Link
              href="https://linkedin.com/in/heykaran77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block">
              <LinkedInLogo />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
