import {
  ArrowRight,
} from "@designali/icons"

import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const small = [
  "Dalim",
  "Dalim UI",
  "Dalim Fonts",
  "Dalim Icons",
  "Dalim Works",
  "Dalim Visuals",
]

export default function Clients16() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          From Dalim to Designali, one studio and many brands.
        </h2>
        <BentoGrid cols={{ base: 2, md: 4 }} gap={4} rowHeight="8rem" className="mt-12">
          <BentoGridItem
            colSpan={2}
            rowSpan={2}
            className="group relative overflow-hidden border-border bg-foreground p-0 text-background"
          >
          <a
            href="#"
            className="flex size-full flex-col justify-between p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 size-64 rounded-full bg-gradient-to-br from-primary/50 to-primary/0 blur-2xl"
            />
            <div className="relative flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="size-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2 22 20H2Z" />
              </svg>
              <span className="text-xl font-semibold tracking-tight">
                Designali
              </span>
            </div>
            <div className="relative">
              <CounterNumber
                value={460}
                suffix="+"
                color="default"
                className="block text-5xl font-semibold tracking-tight text-background md:text-6xl"
              />
              <p className="mt-2 max-w-xs text-sm text-background/70">
                production-ready blocks, designed in Figma and shipped in
                Next.js on designali.com.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                Read case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
          </BentoGridItem>
          <BentoGridItem colSpan={2} className="flex flex-col justify-center border-border bg-muted/50 p-6">
            <p className="text-sm leading-6">
              &ldquo;Where thoughtful design meets production-ready code.&rdquo;
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Ali Imam, Founder of Designali
            </p>
          </BentoGridItem>
          {small.map((name) => (
            <BentoGridItem
              key={name}
              className="flex items-center justify-center border-border text-lg font-semibold tracking-tight text-muted-foreground"
            >
              {name}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
