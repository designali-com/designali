import {
  Check,
} from "@designali/icons"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

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

const screens = [
  "/images/templates/design-agency.jpg",
  "/img/dashboard-1-light.jpg",
  "/images/templates/portfolio-simple.jpg",
]

function Visual({ index }: { index: number }) {
  return (
    <div className="flex w-full items-center justify-center border border-border bg-muted/40 p-6">
      <Macbook size="md" className="max-w-full">
        <img
          src={screens[index % screens.length]}
          alt="Designali project preview"
          className="size-full object-cover object-top"
        />
      </Macbook>
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
              <p className="font-sans text-xs text-muted-foreground">
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
