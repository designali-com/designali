const archive = [
  {
    month: "November 2026",
    posts: [
      { day: "14", title: "Changelogs for 460+ blocks" },
      { day: "06", title: "Choosing Next.js, React and Tailwind CSS" },
      { day: "02", title: "The spreadsheet that runs our client projects" },
    ],
  },
  {
    month: "October 2026",
    posts: [
      { day: "28", title: "How we price Designali templates" },
      { day: "19", title: "One year of designali.com, by the numbers" },
      { day: "11", title: "Accessibility audits we now run on every block" },
      { day: "03", title: "What CGI and 3D taught me about UI" },
    ],
  },
  {
    month: "September 2026",
    posts: [
      { day: "24", title: "Notes from rewriting the Designali docs" },
      { day: "09", title: "A short history of the Designali logo, in twelve drafts" },
    ],
  },
]

export default function Blog08() {
  const total = archive.reduce((s, m) => s + m.posts.length, 0)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-14">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Archive</h2>
          <p className="mt-3 text-muted-foreground">
            {total} posts from the Designali studio notebook. Mostly about design,
            occasionally about code.
          </p>
        </header>

        <div className="space-y-14">
          {archive.map((group) => (
            <div key={group.month} className="grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <h3 className="text-sm font-medium text-muted-foreground sm:sticky sm:top-24 sm:self-start">
                {group.month}
              </h3>
              <ul className="divide-y border-t">
                {group.posts.map((post) => (
                  <li key={post.title}>
                    <a href="#" className="group flex items-baseline gap-5 py-4">
                      <span className="w-6 shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                        {post.day}
                      </span>
                      <span className="flex-1 leading-snug transition-colors group-hover:text-muted-foreground">
                        {post.title}
                      </span>
                      <span className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                        &rarr;
                      </span>
                    </a>
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
