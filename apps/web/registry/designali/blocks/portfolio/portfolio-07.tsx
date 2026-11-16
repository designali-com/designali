import { ArrowRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { CounterNumber } from "@/registry/designali/ui/counter-number"
import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const projects = [
  {
    index: "01",
    client: "Dalim Icons",
    title: "An icon set that grew into @designali/icons",
    summary:
      "Dalim Icons started as a personal icon set. We redrew it on one grid and one stroke, then shipped it as a typed React package.",
    metric: 4000,
    suffix: "+",
    metricLabel: "Icons in @designali/icons",
    services: ["Icon design", "Design system", "React"],
    image: "/images/templates/dalim-icons-old.jpg",
  },
  {
    index: "02",
    client: "Dalim UI",
    title: "Components for designers who code",
    summary:
      "Dalim UI became the Designali block library: copy-paste sections built with Next.js, TypeScript and Tailwind CSS.",
    metric: 460,
    suffix: "+",
    metricLabel: "Blocks in the Designali library",
    services: ["UI/UX", "Next.js", "Tailwind CSS"],
    image: "/images/templates/dalim-ui-old.jpg",
  },
  {
    index: "03",
    client: "Dalim Agency",
    title: "One studio voice across every Dalim brand",
    summary:
      "Dalim, Dalim Fonts, Dalim Graphic and Dalim Visuals grew one by one. A shared identity system brought them together under Designali.",
    metric: 9,
    suffix: "",
    metricLabel: "Dalim brands, one system",
    services: ["Identity", "Brand system", "Web"],
    image: "/images/templates/dalim-agency-old.jpg",
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
                <DotPattern className="text-muted-foreground" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Macbook
                    variant="macbook-air"
                    color="midnight"
                    className="max-w-full"
                  >
                    <img
                      src={project.image}
                      alt={`${project.client} case study by Designali`}
                      className="size-full object-cover object-top"
                    />
                  </Macbook>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-sans">{project.index}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>{project.client}</span>
                </div>
                <h3 className="mt-4 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-baseline gap-3 border-y border-border py-4">
                  <CounterNumber
                    value={project.metric}
                    suffix={project.suffix}
                    size="lg"
                    className="font-semibold tracking-tight"
                  />
                  <span className="text-sm text-muted-foreground">
                    {project.metricLabel}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="bg-muted px-2 py-1 text-xs">
                      {service}
                    </span>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="mt-4 px-0"
                  nativeButton={false}
                  render={<a href="/work" />}
                >
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
