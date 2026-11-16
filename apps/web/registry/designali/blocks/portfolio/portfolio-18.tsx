import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const meta = [
  { label: "Client", value: "Designali (template)" },
  { label: "Sector", value: "Hospitality" },
  { label: "Scope", value: "Web, mobile, booking" },
  { label: "Status", value: "Live on designali.com" },
]

export default function Portfolio18() {
  return (
    <section className="w-full overflow-hidden bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 border border-border px-3 py-1 text-xs">
            <span className="size-1.5 rounded-full bg-sky-500" />
            Featured project
          </span>
          <h2 className="mt-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
            A booking flow that works on every screen
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            The Designali Resort template ships one booking flow for desktop,
            tablet and mobile — designed in Figma, built with Next.js.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/templates" />}>
              View the template
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="/work" />}>
              Next project
            </Button>
          </div>
        </div>

        <div className="relative mt-14 border border-border bg-gradient-to-b from-sky-100 to-sky-300/60 px-4 pt-10 sm:px-10 md:pt-16 dark:from-sky-950 dark:to-sky-800/60">
          {/* Desktop frame */}
          <div className="mx-auto max-w-3xl border border-b-0 border-border bg-background shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="size-2 rounded-full bg-muted-foreground/30" />
              <span className="mx-auto h-4 w-1/3 bg-muted" />
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1.4fr] sm:p-6">
              <div className="space-y-3">
                <div className="h-3 w-2/3 bg-foreground" />
                <div className="h-2 w-full bg-muted" />
                <div className="h-2 w-4/5 bg-muted" />
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="h-10 border border-border" />
                  <div className="h-10 border border-border" />
                </div>
                <div className="h-9 bg-sky-600" />
              </div>
              <div className="relative hidden h-44 overflow-hidden bg-sky-50 sm:block dark:bg-sky-950">
                <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <path d="M0 110 C 60 90, 90 130, 150 105 S 250 80, 300 100 L300 160 L0 160Z" className="fill-sky-200 dark:fill-sky-900" />
                  <path d="M40 60 Q 150 20 260 70" className="fill-none stroke-sky-600" strokeWidth="2" strokeDasharray="6 5" />
                  <circle cx="40" cy="60" r="5" className="fill-sky-600" />
                  <circle cx="260" cy="70" r="5" className="fill-sky-600" />
                </svg>
              </div>
            </div>
          </div>

          {/* Phone frame */}
          <div className="absolute right-4 bottom-0 hidden w-36 border-[6px] border-b-0 border-foreground bg-background p-3 shadow-2xl sm:right-8 md:block lg:right-16 lg:w-44">
            <div className="h-2 w-1/2 bg-foreground" />
            <div className="mt-3 border border-dashed border-border p-2">
              <div className="h-2 w-3/4 bg-muted" />
              <div className="mt-1.5 h-2 w-1/2 bg-muted" />
              <div className="mt-3 grid grid-cols-5 gap-0.5">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className="aspect-square bg-foreground" style={{ opacity: (i * 7) % 3 === 0 ? 1 : 0.15 }} />
                ))}
              </div>
            </div>
            <div className="mt-3 h-6 bg-sky-600" />
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-x border-b border-border bg-border md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-background p-5">
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
