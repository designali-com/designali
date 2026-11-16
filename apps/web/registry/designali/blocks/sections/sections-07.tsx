import {
  Compass,
  Feather,
  Handshake,
  Hourglass,
  Scale,
} from "@designali/icons"

import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

export default function Sections07() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Five values behind every Designali project.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Design se code tak. They are the first thing every new client and
            collaborator reads.
          </p>
        </div>

        <BentoGrid
          className="mt-14"
          cols={{ base: 1, md: 2, lg: 4 }}
          gap={3}
          rowHeight="auto"
        >
          <BentoGridItem
            colSpan={{ base: 1, md: 2, lg: 2 }}
            rowSpan={{ base: 1, lg: 2 }}
            className="flex flex-col justify-between gap-16 border-0 bg-foreground p-8 text-background md:p-10"
          >
            <Compass className="size-6" />
            <div>
              <p className="text-xs opacity-60">01</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Design meets code
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 opacity-70">
                Every design is made by someone who knows how it will be
                built, so what you approve is exactly what ships.
              </p>
            </div>
          </BentoGridItem>

          <BentoGridItem
            colSpan={{ base: 1, md: 2, lg: 2 }}
            className="border-border p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">02</p>
              <Feather className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Thoughtful details</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Type, spacing and motion get the same care as the big idea.
            </p>
          </BentoGridItem>

          <BentoGridItem className="border-border p-6">
            <p className="text-xs text-muted-foreground">03</p>
            <Scale className="mt-6 size-5" />
            <h3 className="mt-3 text-base font-semibold">Honest scope</h3>
          </BentoGridItem>

          <BentoGridItem className="border-border p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">04</p>
              <Hourglass className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Production-ready</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              We ship real Next.js code, not just mockups.
            </p>
          </BentoGridItem>

          <BentoGridItem
            colSpan={{ base: 1, md: 2, lg: 4 }}
            className="flex flex-col justify-between gap-6 border-border bg-primary/10 p-6 md:flex-row md:items-center"
          >
            <div className="flex items-center gap-4">
              <Handshake className="size-6 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">05</p>
                <h3 className="text-xl font-semibold tracking-tight">Share what we make</h3>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground md:text-right">
              Blocks, icons, logos and templates we build often end up on
              designali.com for every designer and developer to use.
            </p>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  )
}
