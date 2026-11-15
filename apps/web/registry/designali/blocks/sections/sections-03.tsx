import { ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const highlights = [
  "Real-time collaboration on every canvas",
  "Version history that never expires",
  "Export to code, PDF or Figma",
]

export default function Sections03() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-[18%] left-[12%] h-[46%] w-[44%] border border-border bg-background p-4 shadow-sm">
            <div className="h-2 w-1/2 bg-muted" />
            <div className="mt-3 h-2 w-3/4 bg-muted" />
            <div className="mt-6 h-16 bg-[var(--chart-1)] opacity-80" />
          </div>
          <div className="absolute right-[10%] bottom-[14%] h-[40%] w-[38%] border border-border bg-background p-4 shadow-sm">
            <div className="flex h-full items-end gap-1.5">
              {[40, 70, 55, 90, 65].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-[var(--chart-2)]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <span className="absolute top-4 right-4 border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">
            canvas.v3
          </span>
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Workspace
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            One canvas for the whole product team.
          </h2>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Sketch flows, review copy and hand off specs without leaving the
            file. Everyone works from the same source of truth, from the first
            wireframe to the final release.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {highlights.map((item, index) => (
              <li key={item} className="flex items-center gap-4 py-3 text-sm">
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-8" size="lg" variant="outline">
            Explore the workspace
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
