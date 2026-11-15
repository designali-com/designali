import { Check, Lock, Play } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const parts = [
  { n: 1, title: "Why your first design system should be tiny", read: 7, status: "read" },
  { n: 2, title: "Tokens: naming, layering, and one source of truth", read: 11, status: "read" },
  { n: 3, title: "Building the first ten components", read: 14, status: "current" },
  { n: 4, title: "Documentation people open on purpose", read: 9, status: "upcoming" },
  { n: 5, title: "Versioning, deprecation, and saying no", read: 12, status: "upcoming" },
  { n: 6, title: "Measuring adoption without surveillance", read: 8, status: "locked" },
] as const

export default function Blog14() {
  const done = parts.filter((p) => p.status === "read").length
  const pct = Math.round((done / parts.length) * 100)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px border bg-border lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col justify-between gap-10 bg-muted/40 p-6 md:p-10">
            <div>
              <span className="bg-background px-2 py-1 text-xs">A series in 6 parts</span>
              <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
                Design systems from zero
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                A practical series from the Gridline team on starting, shipping, and
                maintaining a design system when you are the only person doing it.
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between text-sm">
                <span>Your progress</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {done} of {parts.length} read
                </span>
              </div>
              <div className="mt-3 h-1.5 bg-background">
                <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
              </div>
              <Button className="mt-6 w-full sm:w-auto" nativeButton={false} render={<a href="#" />}>
                <Play data-icon="inline-start" />
                Continue with part 3
              </Button>
            </div>
          </div>

          <ol className="bg-background">
            {parts.map((p, i) => (
              <li key={p.n} className="relative">
                {i < parts.length - 1 && (
                  <span
                    className={cn(
                      "pointer-events-none absolute top-14 left-[2.625rem] z-10 h-[calc(100%-2.25rem)] w-px md:left-[3.625rem]",
                      p.status === "read" ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
                <a
                  href="#"
                  aria-disabled={p.status === "locked"}
                  className={cn(
                    "relative flex items-start gap-5 px-6 py-5 transition-colors md:px-10",
                    p.status === "current" && "bg-muted/60",
                    p.status === "locked" ? "pointer-events-none opacity-50" : "hover:bg-muted/40"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold",
                      p.status === "read" && "border-primary bg-primary text-primary-foreground",
                      p.status === "current" && "border-primary bg-background",
                      (p.status === "upcoming" || p.status === "locked") && "bg-background text-muted-foreground"
                    )}
                  >
                    {p.status === "read" ? (
                      <Check className="size-4" />
                    ) : p.status === "locked" ? (
                      <Lock className="size-3.5" />
                    ) : (
                      p.n
                    )}
                  </span>
                  <span className="min-w-0 pt-1.5">
                    <span className="block text-xs text-muted-foreground">
                      Part {p.n} · {p.read} min
                      {p.status === "current" ? " · Up next" : ""}
                      {p.status === "locked" ? " · Publishes Dec 2" : ""}
                    </span>
                    <span className="mt-1 block font-medium">{p.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
