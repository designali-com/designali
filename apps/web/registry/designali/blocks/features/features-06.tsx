import {
  Check,
} from "@designali/icons"

const rows = [
  {
    eyebrow: "01 / Discover",
    title: "Start with strategy and brand",
    body: "Every Designali project begins with your goals, audience and positioning, so the brand identity and UI direction are grounded from day one.",
    points: ["Brand identity", "Positioning", "Moodboards"],
  },
  {
    eyebrow: "02 / Design",
    title: "Design interfaces in Figma",
    body: "Ali Imam designs the UI/UX in Figma with a reusable design system, so every screen feels intuitive and consistent.",
    points: ["UI/UX design", "Design systems", "Prototypes"],
  },
  {
    eyebrow: "03 / Build",
    title: "Ship production-ready code",
    body: "Designs are turned into fast, responsive Next.js sites with Tailwind CSS and deployed on Vercel. Design se code tak.",
    points: ["Next.js", "Tailwind CSS", "Vercel"],
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
