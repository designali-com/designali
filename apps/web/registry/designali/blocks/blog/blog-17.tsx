import { Badge } from "@workspace/ui/components/badge"

const entries = [
  {
    date: "Nov 14, 2026",
    type: "Launch",
    title: "Offline mode is here for every plan",
    body: "Edit documents on a plane, in a tunnel, or on hotel wifi. Changes sync and merge the moment you reconnect, with conflicts surfaced inline.",
    bullets: ["Works on desktop and mobile", "Up to 2GB of cached workspaces", "Conflict review in the history panel"],
  },
  {
    date: "Nov 3, 2026",
    type: "Behind the scenes",
    title: "How we built a CRDT that fits in 14kb",
    body: "A deep dive into the sync engine behind offline mode, and why we wrote our own instead of adopting an existing library.",
  },
  {
    date: "Oct 21, 2026",
    type: "Improvement",
    title: "Search is now four times faster",
    body: "We moved indexing to the client for workspaces under 10,000 pages. Results now appear as you type, even for long documents.",
    bullets: ["Typo tolerance", "Filter by author and date"],
  },
  {
    date: "Oct 2, 2026",
    type: "Company",
    title: "Quillstack raises a seed round to stay small",
    body: "Why we raised just enough to hire four more engineers, and what we promised our customers we would not do with it.",
  },
]

export default function Blog17() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Product journal</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Launches, deep dives, and company news from the Quillstack team, in the order they happened.
          </p>
        </div>

        <ol className="relative">
          {entries.map((e, i) => (
            <li key={e.title} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="md:pt-1 md:text-right">
                <time className="font-mono text-xs text-muted-foreground">{e.date}</time>
              </div>
              <div className={i === entries.length - 1 ? "relative border-l pl-8 md:pl-10" : "relative border-l pb-14 pl-8 md:pl-10"}>
                <span
                  className={
                    i === 0
                      ? "absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15"
                      : "absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-background bg-muted-foreground/50"
                  }
                />
                <Badge variant="outline">{e.type}</Badge>
                <h3 className="mt-3 text-xl font-medium tracking-tight md:text-2xl">
                  <a href="#" className="hover:underline hover:underline-offset-4">
                    {e.title}
                  </a>
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">{e.body}</p>
                {e.bullets && (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="size-1 bg-foreground" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {i === 0 && (
                  <div className="mt-6 aspect-[16/7] border bg-[linear-gradient(135deg,var(--muted)_25%,transparent_25%,transparent_50%,var(--muted)_50%,var(--muted)_75%,transparent_75%)] bg-[length:24px_24px]" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
