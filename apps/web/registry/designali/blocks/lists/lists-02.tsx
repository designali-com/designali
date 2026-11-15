const releases = [
  {
    version: "v4.2.0",
    date: "Nov 04, 2026",
    tag: "Feature",
    title: "Multiplayer comments on prototypes",
    items: [
      "Pin comments to any frame while in presentation mode",
      "Resolve threads directly from the inbox",
      "New keyboard shortcut: C to start a comment",
    ],
  },
  {
    version: "v4.1.3",
    date: "Oct 21, 2026",
    tag: "Fix",
    title: "Export and performance fixes",
    items: [
      "SVG exports now preserve stroke alignment",
      "Large files open up to 40% faster",
    ],
  },
  {
    version: "v4.1.0",
    date: "Oct 02, 2026",
    tag: "Improvement",
    title: "Variables, revisited",
    items: [
      "Group variables into collections with modes",
      "Bulk-rename variables with find and replace",
      "Variables now sync to the code export",
    ],
  },
]

export default function Lists02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight">Changelog</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          New updates and improvements, shipped every other week.
        </p>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {releases.map((release) => (
            <article
              key={release.version}
              className="grid gap-6 py-10 md:grid-cols-[200px_1fr]"
            >
              <div className="space-y-2">
                <p className="font-mono text-sm">{release.version}</p>
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
