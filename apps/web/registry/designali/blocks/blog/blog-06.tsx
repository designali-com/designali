import { ArrowUpRight } from "lucide-react"

const cover = {
  kicker: "Cover story",
  title: "The last mile is a design problem",
  dek: "Couriers, lockers, and a stubborn front-door buzzer: what six months of riding along with delivery crews taught our product team about the hardest screen we ship.",
  author: "Inés Moreau",
  date: "November 2026 issue",
  read: "18 min read",
}

const secondary = [
  {
    section: "Field report",
    title: "Mapping a city by its loading zones",
    author: "Kwame Asante",
    gradient: "from-chart-3/70 via-chart-3/20 to-transparent",
  },
  {
    section: "Interview",
    title: "A dispatcher on why the map is always wrong",
    author: "Ruth Calloway",
    gradient: "from-chart-1/70 via-chart-1/20 to-transparent",
  },
  {
    section: "Essay",
    title: "Against the estimated arrival time",
    author: "Jonah Feld",
    gradient: "from-chart-5/70 via-chart-5/20 to-transparent",
  },
]

export default function Blog06() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between border-b-2 border-foreground pb-3">
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            Waypoint Quarterly
          </span>
          <span className="text-xs text-muted-foreground">Issue 14</span>
        </div>

        <a href="#" className="group relative block overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,var(--chart-2),transparent_55%),radial-gradient(ellipse_at_90%_90%,var(--chart-4),transparent_50%)] opacity-60 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklch,var(--foreground)_90%,transparent),transparent_70%)]" />
          <div className="relative flex min-h-[460px] flex-col justify-end p-6 md:min-h-[560px] md:p-12">
            <span className="w-fit bg-background px-2 py-1 text-xs text-foreground">{cover.kicker}</span>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
              {cover.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 opacity-80 md:text-lg">{cover.dek}</p>
            <p className="mt-6 text-sm opacity-70">
              By {cover.author} · {cover.date} · {cover.read}
            </p>
          </div>
        </a>

        <div className="mt-px grid gap-px bg-border md:grid-cols-3">
          {secondary.map((post) => (
            <a key={post.title} href="#" className="group flex gap-4 bg-background py-6 md:p-6">
              <div className={`size-20 shrink-0 bg-gradient-to-br ${post.gradient} border`} />
              <div className="min-w-0">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{post.section}</p>
                <p className="mt-1 leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  {post.author}
                  <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
