import {
  Award,
} from "@designali/icons"

const awards = [
  { year: "2026", award: "Product of the Year", body: "Interface Awards", project: "Atlas Maps 4.0", level: "Gold" },
  { year: "2026", award: "Best Use of Typography", body: "European Type Review", project: "Atlas brand refresh", level: "Winner" },
  { year: "2025", award: "Design for Good", body: "Civic Design Prize", project: "Floodline alerts", level: "Shortlist" },
  { year: "2025", award: "Mobile App of the Year", body: "Pocket Craft Awards", project: "Atlas Offline", level: "Silver" },
  { year: "2024", award: "Accessibility Excellence", body: "Inclusive Web Forum", project: "Atlas Maps 3.2", level: "Winner" },
  { year: "2023", award: "Emerging Studio", body: "North Design Week", project: "Studio", level: "Winner" },
]

const press = [
  { quote: "The rare mapping app that feels calm.", source: "The Weekly Interface" },
  { quote: "Atlas has quietly set the bar for offline-first design.", source: "Signal & Noise" },
]

export default function Sections17() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Award className="size-6" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Recognition</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Awards are nice. Users who stay for years are nicer. Here are both.
            </p>
            <div className="mt-10 space-y-6">
              {press.map((item) => (
                <figure key={item.source} className="border-l-2 border-foreground pl-4">
                  <blockquote className="text-base leading-6 font-medium">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-2 text-xs text-muted-foreground">{item.source}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs text-muted-foreground">
                <tr>
                  <th scope="col" className="w-16 p-3 font-medium sm:p-4">Year</th>
                  <th scope="col" className="p-3 font-medium sm:p-4">Award</th>
                  <th scope="col" className="hidden p-3 font-medium sm:p-4 md:table-cell">Project</th>
                  <th scope="col" className="p-3 text-right font-medium sm:p-4">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {awards.map((item) => (
                  <tr key={`${item.year}-${item.award}`} className="transition-colors hover:bg-muted/40">
                    <td className="p-3 align-top font-mono text-xs text-muted-foreground sm:p-4">{item.year}</td>
                    <td className="p-3 sm:p-4">
                      <span className="block font-medium">{item.award}</span>
                      <span className="text-xs text-muted-foreground">{item.body}</span>
                    </td>
                    <td className="hidden p-3 text-muted-foreground sm:p-4 md:table-cell">{item.project}</td>
                    <td className="p-3 text-right sm:p-4">
                      <span
                        className={
                          item.level === "Shortlist"
                            ? "border border-border px-2 py-0.5 text-xs text-muted-foreground"
                            : "bg-foreground px-2 py-0.5 text-xs text-background"
                        }
                      >
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
