import {
  Award,
} from "@designali/icons"

const awards = [
  { year: "Now", award: "Designali", body: "Design and development studio", project: "designali.com", level: "Live" },
  { year: "Lib", award: "@designali/icons", body: "4000+ icons for React", project: "Icons", level: "Live" },
  { year: "Lib", award: "Designali Blocks", body: "460+ production-ready blocks", project: "Blocks", level: "Live" },
  { year: "Old", award: "Dalim Agency", body: "Brand and web projects for clients", project: "Client work", level: "Archive" },
  { year: "Old", award: "Dalim UI", body: "React and Tailwind CSS components", project: "Components", level: "Archive" },
  { year: "Old", award: "Dalim Fonts", body: "Type designed by Ali Imam", project: "Typography", level: "Archive" },
]

const press = [
  { quote: "Where thoughtful design meets production-ready code.", source: "Ali Imam, founder of Designali" },
  { quote: "I design and build digital experiences that look great, feel intuitive and work beautifully.", source: "Ali Imam" },
]

export default function Sections17() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Award className="size-6" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Selected work</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              From Dalim to designali: the brands, libraries and products Ali Imam has designed and built.
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
                  <th scope="col" className="w-16 p-3 font-medium sm:p-4">Type</th>
                  <th scope="col" className="p-3 font-medium sm:p-4">Focus</th>
                  <th scope="col" className="hidden p-3 font-medium sm:p-4 md:table-cell">Project</th>
                  <th scope="col" className="p-3 text-right font-medium sm:p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {awards.map((item) => (
                  <tr key={`${item.year}-${item.award}`} className="transition-colors hover:bg-muted/40">
                    <td className="p-3 align-top text-xs text-muted-foreground sm:p-4">{item.year}</td>
                    <td className="p-3 sm:p-4">
                      <span className="block font-medium">{item.award}</span>
                      <span className="text-xs text-muted-foreground">{item.body}</span>
                    </td>
                    <td className="hidden p-3 text-muted-foreground sm:p-4 md:table-cell">{item.project}</td>
                    <td className="p-3 text-right sm:p-4">
                      <span
                        className={
                          item.level === "Archive"
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
