import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-bold lg:text-5xl tracking-tight">
            Loved by students, creators, and developers
          </h2>
          <p>
            BetterNotes helps people think clearly, organize faster, and never
            lose ideas—across classes, projects, and workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-background">
            <CardHeader>
              <Image
                src="/logo_512x512.png"
                alt="logo"
                width={50}
                height={50}
                className="rounded-lg dark:bg-white"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  “BetterNotes completely replaced my messy Google Docs and
                  scattered Notion pages.”
                  <br />
                  <br />
                  Everything is fast, distraction-free, and structured perfectly
                  for daily notes and long-term projects. I spend less time
                  organizing and more time actually thinking. It’s the first
                  notes app that truly feels built for productivity.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Aarav Mehta"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Aarav Mehta</cite>
                    <span className="text-muted-foreground block text-sm">
                      Computer Science Student
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-background">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  “Simple, fast, and exactly what I needed.” No unnecessary
                  features, no clutter. Just a clean experience that helps me
                  capture ideas instantly and find them later.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/riya.webp"
                      alt="Riya Sharma"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Riya Sharma</cite>
                    <span className="text-muted-foreground block text-sm">
                      Product Designer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  “BetterNotes fits perfectly into my daily workflow.” From
                  meeting notes to personal ideas, everything stays organized
                  and searchable. It just works.
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Ankit Verma"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Ankit Verma</cite>
                    <span className="text-muted-foreground block text-sm">
                      Startup Founder
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-background card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  “The UI is minimal, but the experience is powerful.” You can
                  tell it’s built by someone who actually uses notes daily.
                  Smooth, intuitive, and reliable.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Neha Patel"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>NP</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Neha Patel</cite>
                    <span className="text-muted-foreground block text-sm">
                      Frontend Developer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
