const years = [
  {
    year: "2025",
    title: "The road north",
    summary: "Six months documenting the coastal railway before it closes.",
    tiles: [
      "linear-gradient(135deg, var(--chart-1), var(--chart-2))",
      "linear-gradient(200deg, var(--chart-3), var(--chart-1))",
      "linear-gradient(60deg, var(--chart-2), var(--chart-4))",
      "linear-gradient(300deg, var(--chart-5), var(--chart-2))",
    ],
  },
  {
    year: "2024",
    title: "Kitchens of the valley",
    summary: "Portraits of twelve family restaurants and the people who run them.",
    tiles: [
      "linear-gradient(160deg, var(--chart-4), var(--chart-5))",
      "linear-gradient(20deg, var(--chart-1), var(--chart-4))",
      "linear-gradient(240deg, var(--chart-3), var(--chart-5))",
    ],
  },
  {
    year: "2023",
    title: "Night shift",
    summary: "Hospitals, bakeries and toll booths between midnight and five.",
    tiles: [
      "linear-gradient(110deg, var(--chart-2), var(--chart-5))",
      "linear-gradient(190deg, var(--chart-4), var(--chart-3))",
      "linear-gradient(80deg, var(--chart-5), var(--chart-1))",
      "linear-gradient(330deg, var(--chart-3), var(--chart-2))",
      "linear-gradient(40deg, var(--chart-1), var(--chart-3))",
    ],
  },
]

export default function Gallery17() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Ten years of long-form projects
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          A chronological archive. Each year, one subject, followed until the
          story was finished.
        </p>
        <ol className="mt-14 border-l border-border">
          {years.map((entry) => (
            <li key={entry.year} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute top-1.5 -left-[5px] size-2.5 bg-foreground" />
              <div className="grid gap-6 md:grid-cols-[14rem_1fr]">
                <div>
                  <p className="font-mono text-sm text-muted-foreground">{entry.year}</p>
                  <h3 className="mt-1 text-xl font-medium">{entry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
                  <a href="#" className="mt-3 inline-block text-sm font-medium underline-offset-4 hover:underline">
                    Open series
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {entry.tiles.map((bg, i) => (
                    <div
                      key={i}
                      className={`aspect-[3/4] border border-border transition-opacity hover:opacity-80 ${i === 0 ? "col-span-2 aspect-auto sm:col-span-2" : ""}`}
                      style={{ background: bg }}
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
