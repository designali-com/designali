import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const projects = [
  {
    index: "01",
    client: "Dalim Icons",
    title: "An icon set that grew into @designali/icons",
    summary:
      "Dalim Icons started as a personal icon set. We redrew it on one grid and one stroke, then shipped it as a typed React package.",
    metric: "4000+",
    metricLabel: "Icons in @designali/icons",
    services: ["Icon design", "Design system", "React"],
    tone: "from-emerald-700 via-emerald-500 to-lime-300",
  },
  {
    index: "02",
    client: "Dalim UI",
    title: "Components for designers who code",
    summary:
      "Dalim UI became the Designali block library: copy-paste sections built with Next.js, TypeScript and Tailwind CSS.",
    metric: "460+",
    metricLabel: "Blocks in the Designali library",
    services: ["UI/UX", "Next.js", "Tailwind CSS"],
    tone: "from-indigo-700 via-violet-500 to-fuchsia-300",
  },
  {
    index: "03",
    client: "Dalim Agency",
    title: "One studio voice across every Dalim brand",
    summary:
      "Dalim, Dalim Fonts, Dalim Graphic and Dalim Visuals grew one by one. A shared identity system brought them together under Designali.",
    metric: "9",
    metricLabel: "Dalim brands, one system",
    services: ["Identity", "Brand system", "Web"],
    tone: "from-orange-700 via-amber-500 to-yellow-200",
  },
]

export default function Portfolio07() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Designali case studies
          </h2>
          <p className="mt-3 text-muted-foreground">
            Dalim projects that became Designali — design se code tak.
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <article
              key={project.client}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div
                className={cn(
                  "relative aspect-[5/4] overflow-hidden border border-border bg-muted",
                  i % 2 === 1 && "md:order-2"
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", project.tone)} />
                <div className="absolute inset-[12%] border border-white/40 bg-background/85 p-4 shadow-xl backdrop-blur">
                  <div className="h-2 w-1/4 bg-foreground/80" />
                  <div className="mt-3 h-2 w-2/3 bg-muted-foreground/30" />
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-muted" />
                    <div className="aspect-square bg-muted" />
                    <div className="aspect-square bg-muted" />
                  </div>
                  <div className="mt-3 h-2 w-1/2 bg-muted-foreground/30" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{project.index}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>{project.client}</span>
                </div>
                <h3 className="mt-4 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">{project.summary}</p>
                <div className="mt-6 flex items-baseline gap-3 border-y border-border py-4">
                  <span className="text-3xl font-semibold tracking-tight">{project.metric}</span>
                  <span className="text-sm text-muted-foreground">{project.metricLabel}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="bg-muted px-2 py-1 text-xs">
                      {service}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="mt-4 px-0" nativeButton={false} render={<a href="/work" />}>
                  Read case study
                  <ArrowRight />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
