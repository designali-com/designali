const featured = {
  category: "Essay",
  title: "The quiet interface: designing software that gets out of the way",
  excerpt:
    "The best tools we use every day share one trait. They remember what we meant, forgive what we did, and never ask us to admire them. Here is how we try to build that.",
  author: "Priya Raman",
  role: "Head of Product Design",
  date: "November 14, 2026",
}

const sidebar = [
  { title: "Notes on typographic rhythm for dashboards", date: "Nov 10", tag: "Typography" },
  { title: "How we audit accessibility before every release", date: "Nov 3", tag: "Accessibility" },
  { title: "A field guide to empty states", date: "Oct 27", tag: "UX patterns" },
  { title: "Motion budgets: animating less, on purpose", date: "Oct 20", tag: "Motion" },
]

export default function Blog02() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.6fr_1fr]">
        <article className="border-b border-border pb-10 lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
          <div className="relative aspect-[16/9] overflow-hidden border border-border bg-muted">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--chart-2),transparent_55%),radial-gradient(circle_at_75%_70%,var(--chart-1),transparent_50%)] opacity-50" />
            <span className="absolute top-4 left-4 bg-background px-2 py-1 text-xs">
              {featured.category}
            </span>
          </div>
          <h2 className="mt-8 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            <a href="#" className="hover:underline hover:underline-offset-8">
              {featured.title}
            </a>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            {featured.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
              PR
            </span>
            <div className="text-sm">
              <p className="font-medium">{featured.author}</p>
              <p className="text-xs text-muted-foreground">
                {featured.role} · {featured.date}
              </p>
            </div>
          </div>
        </article>

        <aside>
          <h3 className="border-b border-border pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            Also this month
          </h3>
          <ol className="divide-y divide-border">
            {sidebar.map((post, i) => (
              <li key={post.title}>
                <a href="#" className="group flex gap-5 py-6">
                  <span className="font-mono text-2xl text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {post.tag} · {post.date}
                    </p>
                    <p className="mt-1 leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                      {post.title}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
