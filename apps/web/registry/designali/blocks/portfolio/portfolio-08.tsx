import { ArrowUpRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const projects = [
  {
    title: "Portfolio Simple",
    kind: "Portfolio template for designers",
    year: "Template",
    background: "url(/images/templates/portfolio-simple.jpg) center / cover",
  },
  {
    title: "Design Agency",
    kind: "Studio website template",
    year: "Template",
    background: "url(/images/templates/design-agency.jpg) center / cover",
  },
  {
    title: "Dalim Fonts",
    kind: "Type foundry website",
    year: "Case study",
    background: "url(/images/templates/dalim-fonts-old.jpg) center / cover",
  },
  {
    title: "Dalim Visuals",
    kind: "CGI and motion showcase",
    year: "Case study",
    background: "url(/images/templates/dalim-visuals-old.jpg) center / cover",
  },
]

export default function Portfolio08() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <div className="lg:sticky lg:top-24">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Designali
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              Work that earns a second look.
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
              A design and development studio by Ali Imam, designing brands,
              websites and digital products. Remote, worldwide.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Blocks</dt>
                <dd className="mt-1">
                  <CounterNumber
                    value={460}
                    suffix="+"
                    className="text-lg font-medium tracking-normal"
                  />
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Pages</dt>
                <dd className="mt-1">
                  <CounterNumber
                    value={240}
                    suffix="+"
                    className="text-lg font-medium tracking-normal"
                  />
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Icons</dt>
                <dd className="mt-1">
                  <CounterNumber
                    value={4000}
                    suffix="+"
                    className="text-lg font-medium tracking-normal"
                  />
                </dd>
              </div>
            </dl>
            <Button
              className="mt-8"
              nativeButton={false}
              render={<a href="/contact" />}
            >
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
                <span className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
                  {project.year}
                  <ArrowUpRight className="size-4 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
