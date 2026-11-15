import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const tiles = [
  { label: "Friday demos", className: "col-span-2 row-span-2 from-amber-300 to-rose-400 dark:from-amber-500/50 dark:to-rose-600/50" },
  { label: "Offsite, Azores", className: "from-sky-300 to-indigo-400 dark:from-sky-500/50 dark:to-indigo-600/50" },
  { label: "Book club", className: "from-lime-200 to-emerald-400 dark:from-lime-500/40 dark:to-emerald-600/50" },
  { label: "Studio lunch", className: "col-span-2 from-fuchsia-300 to-violet-400 dark:from-fuchsia-500/50 dark:to-violet-600/50" },
]

const rituals = [
  { title: "No-meeting Wednesdays", body: "One full day a week for deep work, protected on every calendar." },
  { title: "Two offsites a year", body: "The whole company, somewhere none of us live, with nothing to present." },
  { title: "Demo or it did not happen", body: "Every Friday, anyone can show what they built that week, finished or not." },
]

export default function Sections16() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="grid auto-rows-[120px] grid-cols-3 gap-3 sm:auto-rows-[150px]">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`relative overflow-hidden bg-gradient-to-br ${tile.className}`}
            >
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "10px 10px",
                }}
                aria-hidden
              />
              <span className="absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-[11px] font-medium backdrop-blur">
                {tile.label}
              </span>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-foreground p-4 text-background">
            <p className="text-3xl font-semibold tracking-tight">4.8</p>
            <p className="text-[11px] leading-4 opacity-70">Glassdoor-style internal score, 2026 survey</p>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Life at Kiln</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Serious about the work. Not about ourselves.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
            We are 72 people building tools for ceramic studios and small
            makers. We keep the company small on purpose, so everyone knows
            everyone and nobody needs a meeting to find out what is going on.
          </p>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {rituals.map((ritual) => (
              <div key={ritual.title} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-sm font-medium">{ritual.title}</dt>
                <dd className="text-sm text-muted-foreground">{ritual.body}</dd>
              </div>
            ))}
          </dl>
          <Button className="mt-10" size="lg" nativeButton={false} render={<a href="#" />}>
            Meet the team
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
