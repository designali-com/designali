import {
  ArrowUpRight,
} from "@designali/icons"

const panels = [
  {
    title: "Templates",
    count: "8 templates",
    body: "Next.js templates for portfolios, agencies, resorts and AI products.",
    gradient: 'url("/images/templates/portfolio-simple.jpg") center / cover',
  },
  {
    title: "Blocks",
    count: "460+ blocks",
    body: "Copy-and-paste sections for heroes, features, pricing and footers.",
    gradient: 'url("/img/hero-1.jpg") center / cover',
  },
  {
    title: "UI Designs",
    count: "2300+ examples",
    body: "Every component shown in real-world states, light and dark.",
    gradient: 'url("/img/dashboard-1-dark.jpg") center / cover',
  },
  {
    title: "Visuals",
    count: "CGI and 3D",
    body: "CGI, 3D and motion studies by Ali Imam for Designali brand work.",
    gradient: 'url("/img/ask/ask5.jpg") center / cover',
  },
  {
    title: "Illustration",
    count: "Vectors",
    body: "Abstract shapes and vectors from @designali/vectors.",
    gradient: 'url("/stock/wallpaper-1.jpg") center / cover',
  },
]

export default function Gallery14() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Browse Designali
          </h2>
          <a href="/blocks" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
            View all blocks <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="mt-10 flex h-[640px] flex-col gap-2 md:h-[480px] md:flex-row">
          {panels.map((panel) => (
            <a
              key={panel.title}
              href="#"
              className="group relative flex min-h-0 flex-1 overflow-hidden border border-border transition-[flex-grow] duration-500 ease-out hover:flex-[3] focus-visible:flex-[3] focus-visible:outline-none"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: panel.gradient }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative mt-auto w-full p-4 text-white md:p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-medium md:[writing-mode:vertical-rl] md:group-hover:[writing-mode:horizontal-tb] md:group-focus-visible:[writing-mode:horizontal-tb]">
                    {panel.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 max-w-xs text-sm text-white/80">{panel.body}</p>
                    <p className="mt-2 font-mono text-xs text-white/60">{panel.count}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
