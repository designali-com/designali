const shots = [
  { title: "Designali Agency", tag: "Brand & web", image: "/images/templates/design-agency.jpg", tone: "from-chart-5 via-chart-3 to-primary", className: "col-span-2 row-span-2" },
  { title: "Dalim UI", tag: "UI kit", image: "/images/templates/dalim-ui-old.jpg", tone: "from-muted-foreground to-border", className: "" },
  { title: "Glass spheres", tag: "CGI", image: "/img/ask/ask3.jpg", tone: "from-primary via-primary to-chart-2", className: "row-span-2" },
  { title: "Dalim Icons", tag: "Icons", image: "/images/templates/dalim-icons-old.jpg", tone: "from-chart-4 to-primary", className: "" },
  { title: "Portfolio Simple", tag: "Template", image: "/images/templates/portfolio-simple.jpg", tone: "from-chart-5 via-chart-4 to-primary", className: "col-span-2" },
  { title: "Liquid form", tag: "3D", image: "/img/ask/ask7.jpg", tone: "from-primary/10 via-muted to-primary/20", className: "" },
  { title: "Dalim Fonts", tag: "Typography", image: "/images/templates/dalim-fonts-old.jpg", tone: "from-foreground to-muted-foreground", className: "" },
  { title: "Resort", tag: "Template", image: "/images/templates/resort.jpg", tone: "from-border via-primary/10 to-white", className: "col-span-2" },
]

export default function Grid19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-sans text-xs text-muted-foreground">Portfolio · 2019-2026</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter md:text-7xl">Ali Imam</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Design engineer and founder of Designali. Available for brand identity,
            UI/UX and Next.js projects.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[180px] md:grid-cols-4 md:gap-3 lg:auto-rows-[220px]">
          {shots.map((shot, index) => (
            <a
              key={shot.title}
              href="#"
              className={`group relative overflow-hidden bg-gradient-to-br ${shot.tone} ${shot.className}`}
              style={{ background: `url("${shot.image}") center / cover` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 text-white opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <span className="font-sans text-[10px]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[10px] tracking-widest uppercase opacity-80">{shot.tag}</p>
                  <p className="text-lg font-medium tracking-tight">{shot.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>Showing 8 Designali projects</span>
          <a href="/work" className="border-b border-foreground pb-0.5 text-foreground">
            View all work
          </a>
        </div>
      </div>
    </section>
  )
}
