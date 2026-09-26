"use client"

import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Github, Apple, Nike } from "@designali/logos"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-full w-full text-foreground">
       
      <div className="absolute border-b h-4 w-full inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="outline-primary/40 absolute h-4 w-full origin-top-left -rotate-45 outline-[0.5px] outline-offset-[-0.25px]"
              style={{
                top: `${i * 16 - 120}px`,
                left: "-10%",
                width: "400%",
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 sm:px-8">

        <div className="flex z-10 flex-1 flex-col items-center justify-center py-20 text-center">
          {/* Eyebrow */}
          <Link
            href="/"
            className="mb-8 border px-3 p-1 rounded-full inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Sparkles className="size-4" />
            Designali Studio
            <ArrowDown className="size-3 -rotate-90" />
          </Link>

          {/* Heading */}
          <h1 className="max-w-xl text-3xl font-medium md:text-7xl">
            The studio for{" "}
            <span className="text-muted-foreground">
              what&apos;s next
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl leading-7 text-muted-foreground sm:text-md">
            Designali is a production creative studio for CGI, 3D, motion,
            web development, and AI-powered creative workflows.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gap-2">
              Explore work
              <ArrowDown className="size-4 -rotate-90" />
            </Button>

            <Button variant="outline" size="lg" className="gap-2">
              Start a project
              <ArrowDown className="size-4 -rotate-90" />
            </Button>
          </div>

          {/* Availability */}
          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full animate-pulse bg-emerald-500" />
            Available for selected projects
          </div>

          <div className="relative overflow-hidden mt-20 border bg-background/80 backdrop-blur">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {/* Feature 1 */}
              <div className="group p-6 text-left transition-colors hover:bg-muted/50">
                <div className="mb-4 flex items-center gap-2">
                  <Apple className="size-6 text-muted-foreground" />

                  <span className="text-sm font-medium">
                    Creative
                  </span>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  Art direction, CGI, 3D and motion designed for
                  high-impact visual experiences.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-6 text-left transition-colors hover:bg-muted/50">
                <div className="mb-4 flex items-center gap-2">
                  <Github className="size-6 text-muted-foreground" />

                  <span className="text-sm font-medium">
                    Development
                  </span>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  Production-ready digital experiences built with
                  modern web technologies.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-6 text-left transition-colors hover:bg-muted/50">
                <div className="mb-4 flex items-center gap-2">
                  <Nike className="size-6 text-muted-foreground" />

                  <span className="text-sm font-medium">
                    Intelligence
                  </span>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  Integrated AI workflows that accelerate research,
                  experimentation, and production.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}