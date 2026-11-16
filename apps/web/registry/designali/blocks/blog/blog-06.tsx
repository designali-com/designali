import {
  ArrowUpRight,
} from "@designali/icons"

const cover = {
  kicker: "Cover story",
  title: "Design se code tak",
  dek: "From Dalim to Designali: how Ali Imam turned a decade of brand identity, UI/UX and CGI work into a studio that designs and ships production-ready websites.",
  author: "Ali Imam",
  date: "November 2026 issue",
  read: "18 min read",
}

const secondary = [
  {
    section: "Case study",
    title: "Rebuilding Dalim Works as a Next.js site",
    author: "Ali Imam",
    gradient: "from-chart-3/70 via-chart-3/20 to-transparent",
  },
  {
    section: "Interview",
    title: "Why every Designali block starts in Figma",
    author: "Designali Studio",
    gradient: "from-chart-1/70 via-chart-1/20 to-transparent",
  },
  {
    section: "Essay",
    title: "AI workflows in a design studio",
    author: "Ali Imam",
    gradient: "from-chart-5/70 via-chart-5/20 to-transparent",
  },
]

export default function Blog06() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between border-b-2 border-foreground pb-3">
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            Designali Quarterly
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
