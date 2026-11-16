const releases = [
  {
    version: "v4.2.0",
    date: "Nov 04, 2026",
    tag: "Feature",
    title: "460+ blocks on designali.com",
    items: [
      "New hero, pricing and testimonial blocks",
      "Copy any block as React and Tailwind code",
      "Every block now uses @designali/icons",
    ],
  },
  {
    version: "v4.1.3",
    date: "Oct 21, 2026",
    tag: "Fix",
    title: "Icon and logo fixes",
    items: [
      "@designali/icons SVGs now preserve stroke alignment",
      "@designali/logos wordmarks render sharper at small sizes",
    ],
  },
  {
    version: "v4.1.0",
    date: "Oct 02, 2026",
    tag: "Improvement",
    title: "Templates, revisited",
    items: [
      "Portfolio and design agency templates refreshed",
      "240+ landing pages with dark mode",
      "Semantic design tokens across every template",
    ],
  },
]

export default function Lists02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight">Changelog</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          New Designali templates, blocks and icons, shipped every other week.
        </p>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {releases.map((release) => (
            <article
              key={release.version}
              className="grid gap-6 py-10 md:grid-cols-[200px_1fr]"
            >
              <div className="space-y-2">
                <p className="font-sans text-sm">{release.version}</p>
                <p className="text-xs text-muted-foreground">{release.date}</p>
                <span className="inline-block border border-border px-2 py-0.5 text-[10px] tracking-wider text-muted-foreground uppercase">
                  {release.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight">{release.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {release.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2.5 size-1 shrink-0 bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
