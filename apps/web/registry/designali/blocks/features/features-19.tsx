import {
  BadgeCheck,
  Check,
  Shield,
} from "@designali/icons"

const badges = ["Accessible", "Responsive", "Dark mode", "TypeScript", "SEO-ready"]

const groups = [
  {
    title: "Design",
    items: ["Brand identity and UI/UX", "Design systems in Figma", "Semantic design tokens"],
  },
  {
    title: "Code",
    items: ["Next.js, React and TypeScript", "Tailwind CSS components", "Clean, documented code"],
  },
  {
    title: "Launch",
    items: ["Deployed on Vercel", "Optimised Core Web Vitals", "Support from Ali Imam"],
  },
]

export default function Features19() {
  return (
    <section className="w-full bg-foreground px-6 py-20 text-background md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Shield className="size-8 text-primary" />
            <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-5xl">
              Production-ready from the first block.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Every Designali template and block meets the same quality bar,
            on every plan.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-3 py-2 text-xs"
            >
              <BadgeCheck className="size-4 text-primary" />
              {b}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-px border border-foreground bg-foreground md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="bg-foreground p-8">
              <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{g.title}</h3>
              <ul className="mt-6 space-y-4">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
