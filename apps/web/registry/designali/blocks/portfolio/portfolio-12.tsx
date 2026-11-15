import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const work = [
  "Saltmarsh Wines",
  "Quillfeather",
  "Brightwater Trust",
  "Hollow Oak Games",
  "Copperline Rail",
  "Ember Bakery",
  "Fernhill Observatory",
]

const stats = [
  { value: "12", label: "Years in practice" },
  { value: "186", label: "Projects shipped" },
  { value: "31", label: "Industry awards" },
  { value: "94%", label: "Clients who return" },
]

export default function Portfolio12() {
  return (
    <section className="w-full overflow-hidden bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <p className="max-w-md text-sm text-background/70">
            Ostra is an independent design practice. We work with founders and
            cultural institutions on identity, digital products and print.
          </p>
          <Button variant="secondary" nativeButton={false} render={<a href="#" />}>
            View full portfolio
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-(--gap) overflow-hidden [--duration:40s] [--gap:3rem]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 animate-marquee items-center gap-(--gap)"
            >
              {work.map((name, i) => (
                <a
                  key={name}
                  href="#"
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="flex items-center gap-(--gap) text-4xl font-medium tracking-tight whitespace-nowrap text-background/40 transition-colors hover:text-background md:text-7xl"
                >
                  {name}
                  <span
                    className="inline-block size-3 rounded-full md:size-4"
                    style={{ background: `var(--chart-${(i % 5) + 1})` }}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-px border-y border-background/20 bg-background/20 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-foreground p-6">
              <dt className="text-xs text-background/60">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
