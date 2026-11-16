const featured = {
  category: "Essay",
  title: "Where thoughtful design meets production-ready code",
  excerpt:
    "I design and build digital experiences that look great, feel intuitive, and work beautifully. Here is how Designali takes a project from the first Figma frame to a shipped Next.js site.",
  author: "Ali Imam",
  role: "Founder, Designali",
  date: "November 14, 2026",
}

const sidebar = [
  { title: "Notes on typography for Designali UI kits", date: "Nov 10", tag: "Typography" },
  { title: "How we audit accessibility before every block release", date: "Nov 3", tag: "Accessibility" },
  { title: "Drawing 4,000+ icons for @designali/icons", date: "Oct 27", tag: "Icons" },
  { title: "Motion and CGI for the Designali brand", date: "Oct 20", tag: "Motion" },
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
              AI
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
