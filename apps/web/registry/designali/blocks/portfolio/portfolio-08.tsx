import { ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const projects = [
  {
    title: "Fernhill Observatory",
    kind: "Museum website and ticketing",
    year: "2026",
    background: "radial-gradient(circle at 30% 20%, oklch(0.7 0.12 250), oklch(0.25 0.06 270))",
  },
  {
    title: "Pebble Pay",
    kind: "Point-of-sale app for market traders",
    year: "2026",
    background: "radial-gradient(circle at 70% 30%, oklch(0.85 0.12 150), oklch(0.45 0.1 170))",
  },
  {
    title: "Northlight Books",
    kind: "Cover series for a poetry imprint",
    year: "2025",
    background: "radial-gradient(circle at 50% 80%, oklch(0.8 0.13 75), oklch(0.5 0.14 35))",
  },
  {
    title: "Canopy Clinics",
    kind: "Booking flow and patient portal",
    year: "2025",
    background: "radial-gradient(circle at 20% 70%, oklch(0.82 0.1 190), oklch(0.4 0.08 220))",
  },
]

export default function Portfolio08() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <div className="lg:sticky lg:top-24">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Studio Halden
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              Work that earns a second look.
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
              We are a four-person studio in Rotterdam designing websites,
              products and printed matter for cultural and civic clients.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Founded</dt>
                <dd className="mt-1 text-lg font-medium">2016</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Projects</dt>
                <dd className="mt-1 text-lg font-medium">140+</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Awards</dt>
                <dd className="mt-1 text-lg font-medium">23</dd>
              </div>
            </dl>
            <Button className="mt-8" nativeButton={false} render={<a href="#" />}>
              Start a project
            </Button>
          </div>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <a key={project.title} href="#" className="group block">
              <div className="relative aspect-[16/11] overflow-hidden border border-border">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ background: project.background }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                  {project.title}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{project.kind}</span>
                <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  {project.year}
                  <ArrowUpRight className="size-4 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
