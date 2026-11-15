import { Check } from "lucide-react"

const rows = [
  {
    eyebrow: "01 / Capture",
    title: "Collect feedback where it happens",
    body: "Pin comments directly on live pages, screenshots or Figma frames. Context travels with every note, so nobody asks which button again.",
    points: ["Browser extension", "Figma plugin", "Slack shortcut"],
  },
  {
    eyebrow: "02 / Organise",
    title: "Turn noise into a prioritised backlog",
    body: "Duplicate requests are grouped automatically and scored by reach and effort, giving you a ranked list every Monday morning.",
    points: ["Smart grouping", "Impact scoring", "Custom fields"],
  },
  {
    eyebrow: "03 / Close the loop",
    title: "Tell people when it ships",
    body: "When an issue is resolved, everyone who asked for it gets a short update. Customers notice, and they keep sending feedback.",
    points: ["Release notes", "Email digests", "Public roadmap"],
  },
]

function Visual({ index }: { index: number }) {
  return (
    <div className="relative aspect-[4/3] w-full border border-border bg-muted/40 p-6">
      <div className="h-full w-full border border-border bg-background p-4">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="mt-6 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-3 bg-muted"
              style={{ width: `${90 - ((i + index) % 4) * 18}%` }}
            />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={i === index ? "h-16 bg-primary" : "h-16 bg-muted"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features06() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
        {rows.map((row, index) => (
          <div
            key={row.title}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className={index % 2 === 1 ? "md:order-2" : undefined}>
              <p className="font-mono text-xs text-muted-foreground">
                {row.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-4xl">
                {row.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {row.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {row.points.map((point) => (
                  <li
                    key={point}
                    className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 text-xs"
                  >
                    <Check className="size-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Visual index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}
