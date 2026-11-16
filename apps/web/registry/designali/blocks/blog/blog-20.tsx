import {
  ArrowUpRight,
  BookOpen,
  CodeXml as Code2,
  Megaphone,
  Palette,
  Rocket,
  Users,
} from "@designali/icons"

const topics = [
  {
    name: "Design",
    icon: Palette,
    count: 84,
    blurb: "Interfaces, type, and color from the Designali studio.",
    latest: ["Spacing scales for 460+ blocks", "Designing designali.com for the second visit"],
    span: "md:col-span-2",
    tone: "bg-chart-1/15",
  },
  {
    name: "Engineering",
    icon: Code2,
    count: 112,
    blurb: "How designali.com is built with Next.js and Vercel.",
    latest: ["Shipping the block registry on Vercel"],
    span: "",
    tone: "bg-chart-2/15",
  },
  {
    name: "Growth",
    icon: Rocket,
    count: 47,
    blurb: "Acquisition experiments, wins and losses.",
    latest: ["The 21st.dev launch that worked"],
    span: "",
    tone: "bg-chart-3/15",
  },
  {
    name: "Guides",
    icon: BookOpen,
    count: 63,
    blurb: "Step-by-step tutorials for Designali templates and blocks.",
    latest: ["Install @designali/icons in ten minutes", "Customizing a Designali template"],
    span: "md:col-span-2",
    tone: "bg-chart-4/15",
  },
  {
    name: "Team",
    icon: Users,
    count: 29,
    blurb: "How Ali Imam and the studio work with clients.",
    latest: ["The Designali process, now public"],
    span: "",
    tone: "bg-chart-5/15",
  },
  {
    name: "Announcements",
    icon: Megaphone,
    count: 38,
    blurb: "Launches and company news.",
    latest: ["Dalim is now Designali"],
    span: "",
    tone: "bg-muted",
  },
]

export default function Blog20() {
  const total = topics.reduce((s, t) => s + t.count, 0)

  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Browse by topic</h2>
            <p className="mt-3 text-muted-foreground">{total} posts across six sections of the Designali blog.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {topics.map((t) => {
            const Icon = t.icon
            return (
              <a
                key={t.name}
                href="#"
                className={`group flex flex-col justify-between gap-8 border bg-background p-6 transition-colors hover:border-foreground/40 ${t.span}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`flex size-11 items-center justify-center ${t.tone}`}>
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-medium">{t.name}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{t.count}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
                  <ul className="mt-5 space-y-1.5 border-t pt-4 text-sm">
                    {t.latest.map((l) => (
                      <li key={l} className="truncate">
                        <span className="mr-2 text-muted-foreground">&rarr;</span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
