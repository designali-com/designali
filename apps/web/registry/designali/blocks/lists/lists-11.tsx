const specs = [
  {
    group: "Library",
    rows: [
      ["Blocks", "460+ production-ready blocks"],
      ["Pages", "240+ landing pages"],
      ["UI designs", "2300+ UI examples"],
      ["Icons", "4000+ in @designali/icons"],
    ],
  },
  {
    group: "Stack",
    rows: [
      ["Framework", "Next.js and React"],
      ["Language", "TypeScript, strict mode"],
      ["Styling", "Tailwind CSS, semantic tokens"],
      ["Components", "shadcn-style UI"],
    ],
  },
  {
    group: "License",
    rows: [
      ["Use", "Personal and commercial projects"],
      ["Updates", "New blocks every other week"],
      ["Support", "support@designali.com"],
    ],
  },
  {
    group: "Design",
    rows: [
      ["Source", "Figma files included"],
      ["Themes", "Light and dark mode"],
      ["Logos", "@designali/logos"],
      ["Illustrations", "@designali/vectors"],
    ],
  },
]

export default function Lists11() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Designali Pro · What's included</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Built to be copied.
            </h2>
            <div className="mt-8 aspect-[16/10] border border-border bg-gradient-to-b from-muted to-background p-6">
              <div className="mx-auto h-full w-[86%] border-[6px] border-neutral-800 bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-300 dark:border-neutral-600" />
            </div>
            <div className="mx-auto -mt-px h-2 w-full bg-neutral-300 dark:bg-neutral-700" />
          </div>

          <div className="divide-y divide-border border-y border-border">
            {specs.map((section) => (
              <div key={section.group} className="grid gap-4 py-6 sm:grid-cols-[160px_1fr]">
                <h3 className="text-sm font-medium">{section.group}</h3>
                <dl className="space-y-3">
                  {section.rows.map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <dt className="text-xs text-muted-foreground sm:w-32 sm:shrink-0">{label}</dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
