import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    category: "Design systems",
    title: "Why your tokens should describe intent, not color",
    excerpt:
      "A naming model that survives rebrands, dark mode, and the third product team joining your library.",
    author: "Maya Okafor",
    date: "Nov 12, 2026",
    read: "8 min read",
    gradient: "from-chart-1/60 to-chart-3/30",
  },
  {
    category: "Engineering",
    title: "Shipping a component library to four frameworks",
    excerpt:
      "What we learned compiling one source of truth to React, Vue, Svelte, and plain web components.",
    author: "Daniel Reyes",
    date: "Nov 5, 2026",
    read: "11 min read",
    gradient: "from-chart-2/60 to-chart-4/30",
  },
  {
    category: "Process",
    title: "The two-week design sprint we actually kept",
    excerpt:
      "Trimming rituals until only the ones that changed decisions were left on the calendar.",
    author: "Lena Fischer",
    date: "Oct 29, 2026",
    read: "6 min read",
    gradient: "from-chart-5/60 to-chart-1/30",
  },
]

export default function Blog01() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Journal
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Latest from the studio
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            All articles
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group flex flex-col bg-background">
              <div className={`aspect-[4/3] bg-gradient-to-br ${post.gradient}`} />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <h3 className="mt-3 text-lg leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>
                    {post.date} · {post.read}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
