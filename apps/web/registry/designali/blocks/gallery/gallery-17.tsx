const years = [
  {
    year: "2025",
    title: "Designali",
    summary: "460+ blocks, 240+ landing pages and new templates. Design se code tak.",
    tiles: [
      'url("/images/templates/design-agency.jpg") center / cover',
      'url("/images/templates/portfolio-simple.jpg") center / cover',
      'url("/images/templates/resort.jpg") center / cover',
      'url("/images/templates/ai.jpg") center / cover',
    ],
  },
  {
    year: "2024",
    title: "Dalim UI and Dalim Icons",
    summary: "Component kits and icon sets that grew into the Designali library.",
    tiles: [
      'url("/images/templates/dalim-ui-old.jpg") center / cover',
      'url("/images/templates/dalim-icons-old.jpg") center / cover',
      'url("/images/templates/dalim-tools-old.jpg") center / cover',
    ],
  },
  {
    year: "2023",
    title: "Dalim Agency",
    summary: "Brand identity, graphic design and CGI work for the first Dalim studio.",
    tiles: [
      'url("/images/templates/dalim-agency-old.jpg") center / cover',
      'url("/images/templates/dalim-graphic-old.jpg") center / cover',
      'url("/images/templates/dalim-visuals-old.jpg") center / cover',
      'url("/images/templates/dalim-fonts-old.jpg") center / cover',
      'url("/images/templates/dalim-works-old.jpg") center / cover',
    ],
  },
]

export default function Gallery17() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Years of Designali and Dalim projects
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          A chronological archive of work by Ali Imam, from Dalim to
          Designali.
        </p>
        <ol className="mt-14 border-l border-border">
          {years.map((entry) => (
            <li key={entry.year} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute top-1.5 -left-[5px] size-2.5 bg-foreground" />
              <div className="grid gap-6 md:grid-cols-[14rem_1fr]">
                <div>
                  <p className="font-sans text-sm text-muted-foreground">{entry.year}</p>
                  <h3 className="mt-1 text-xl font-medium">{entry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
                  <a href="#" className="mt-3 inline-block text-sm font-medium underline-offset-4 hover:underline">
                    Open project
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
