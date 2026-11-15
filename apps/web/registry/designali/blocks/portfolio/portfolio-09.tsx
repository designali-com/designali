const years = [
  {
    year: "2026",
    projects: [
      { client: "Riverbend Library", work: "Catalogue search and reading lists", role: "Lead designer" },
      { client: "Kestrel Audio", work: "Companion app for wireless headphones", role: "Product design" },
    ],
  },
  {
    year: "2025",
    projects: [
      { client: "Granite & Moss", work: "Landscape architecture portfolio site", role: "Design + build" },
      { client: "Pocket Tutor", work: "Homework helper for ages 9 to 14", role: "UX research" },
      { client: "Hatch Ventures", work: "Investor portal and data room", role: "Product design" },
    ],
  },
  {
    year: "2024",
    projects: [
      { client: "Ember Bakery", work: "Identity, packaging and pre-order site", role: "Brand designer" },
    ],
  },
  {
    year: "2023",
    projects: [
      { client: "Openfield Co-op", work: "Member dashboard for 3,000 farmers", role: "Lead designer" },
      { client: "Lantern Films", work: "Festival submission platform", role: "UX + UI" },
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
            Four years, eight clients
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Every project I have shipped as an independent designer, newest first.
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
                        background: `linear-gradient(${135 + i * 45}deg, var(--chart-${(i % 5) + 1}), transparent)`,
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
