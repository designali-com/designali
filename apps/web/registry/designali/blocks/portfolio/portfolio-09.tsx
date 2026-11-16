const years = [
  {
    year: "Now",
    projects: [
      { client: "Designali", work: "460+ blocks, templates and icons", role: "Design + build", image: "/images/templates/design-agency.jpg" },
      { client: "Ali Imam portfolio", work: "Personal site built with Next.js", role: "Design + build", image: "/images/templates/aliimam-comp.jpg" },
    ],
  },
  {
    year: "UI",
    projects: [
      { client: "Dalim UI", work: "Component library for designers who code", role: "UI/UX + code", image: "/images/templates/dalim-ui-old.jpg" },
      { client: "Dalim Icons", work: "Icon set that became @designali/icons", role: "Icon design", image: "/images/templates/dalim-icons-old.jpg" },
      { client: "Dalim Tools", work: "Small tools for designers", role: "Design + build", image: "/images/templates/dalim-tools-old.jpg" },
    ],
  },
  {
    year: "Brand",
    projects: [
      { client: "Dalim Agency", work: "Identity and agency website", role: "Brand designer", image: "/images/templates/dalim-agency-old.jpg" },
    ],
  },
  {
    year: "Dalim",
    projects: [
      { client: "Dalim", work: "The first Ali Imam brand", role: "Design + build", image: "/images/templates/dalim-old.jpg" },
      { client: "Dalim Fonts", work: "Type foundry website", role: "UX + UI", image: "/images/templates/dalim-fonts-old.jpg" },
    ],
  },
]

export default function Portfolio09() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Timeline
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-5xl">
            From Dalim to Designali
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Every project Ali Imam has shipped under the Dalim and Designali names, newest first.
          </p>
        </div>

        <ol className="relative mt-14 border-l border-border md:ml-24">
          {years.map((group) => (
            <li key={group.year} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-foreground ring-4 ring-background" />
              <p className="font-mono text-sm text-muted-foreground md:absolute md:top-0 md:-left-24 md:w-16 md:text-right">
                {group.year}
              </p>
              <div className="mt-3 space-y-3 md:mt-0">
                {group.projects.map((project, i) => (
                  <a
                    key={project.client}
                    href="#"
                    className="group flex items-center gap-4 border border-border bg-card p-4 transition-colors hover:bg-muted"
                  >
                    <span
                      className="size-12 shrink-0 border border-border"
                      style={{
                        background: `url(${project.image}) center / cover, linear-gradient(${135 + i * 45}deg, var(--chart-${(i % 5) + 1}), transparent)`,
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{project.client}</p>
                      <p className="truncate text-sm text-muted-foreground">{project.work}</p>
                    </div>
                    <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                      {project.role}
                    </span>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
