import type { CSSProperties } from "react"

import { Button } from "@workspace/ui/components/button"

const columns = [
  ["Northwind", "Halcyon", "Orbital", "Kestrel", "Fieldnote"],
  ["Quanta", "Driftwave", "Tessel", "Monolith", "Sable"],
  ["Arcwell", "Lumen", "Corvid", "Brightline", "Ferro"],
]

function Column({ names, duration }: { names: string[]; duration: string }) {
  return (
    <div
      className="flex flex-col gap-(--gap) overflow-hidden [--gap:1rem]"
      style={{ "--duration": duration } as CSSProperties}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee-vertical flex-col gap-(--gap)"
        >
          {names.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center border border-border bg-background px-3 text-sm font-semibold tracking-tight text-muted-foreground sm:text-base"
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Clients15() {
  return (
    <section className="w-full border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-0">
        <div className="lg:py-24">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Customers
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Chosen by teams who sweat the details.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            More than 900 companies run their marketing sites, dashboards and
            internal tools on our blocks. Most of them switched from a custom
            in-house kit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#" />}>
              Start building
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              Talk to sales
            </Button>
          </div>
        </div>
        <div className="grid h-[420px] grid-cols-3 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] lg:h-[560px]">
          <Column names={columns[0]!} duration="22s" />
          <Column names={columns[1]!} duration="30s" />
          <Column names={columns[2]!} duration="26s" />
        </div>
      </div>
    </section>
  )
}
