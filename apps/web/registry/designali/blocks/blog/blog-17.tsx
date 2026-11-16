import { Badge } from "@workspace/ui/components/badge"

import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"

const entries = [
  {
    date: "Nov 14, 2026",
    type: "Launch",
    title: "Designali Icons is here for every plan",
    body: "4,000+ lucide-compatible icons in one package. Install @designali/icons, import by name, and ship them in any React or Next.js project.",
    bullets: ["Works with React and Next.js", "Search and copy on designali.com/icons", "Tree-shakeable imports"],
  },
  {
    date: "Nov 3, 2026",
    type: "Behind the scenes",
    title: "How we built a block registry that fits in one repo",
    body: "A deep dive into the registry behind 460+ blocks, and why we wrote our own instead of adopting an existing tool.",
  },
  {
    date: "Oct 21, 2026",
    type: "Improvement",
    title: "UI search is now four times faster",
    body: "We moved indexing to the client for 2,300+ UI examples. Results now appear as you type on designali.com/ui.",
    bullets: ["Typo tolerance", "Filter by category and date"],
  },
  {
    date: "Oct 2, 2026",
    type: "Company",
    title: "Dalim is now Designali",
    body: "Why Ali Imam brought Dalim UI, Dalim Icons and Dalim Works together under one studio: design se code tak.",
  },
]

export default function Blog17() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Product journal</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Launches, deep dives, and company news from the Designali studio, in the order they happened.
          </p>
        </div>

        <ol className="relative">
          {entries.map((e, i) => (
            <li key={e.title} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="md:pt-1 md:text-right">
                <time className="font-sans text-xs text-muted-foreground">{e.date}</time>
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
                  <div className="relative mt-6 flex aspect-[16/7] items-start justify-center overflow-hidden border bg-muted/40 px-4 pt-6">
                    <GridPattern className="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
                    <Macbook
                      variant="macbook-pro"
                      color="silver"
                      className="relative max-w-full"
                    >
                      <img
                        src="/images/templates/dalim-icons-old.jpg"
                        alt="Designali Icons on designali.com/icons"
                        className="size-full object-cover object-top"
                      />
                    </Macbook>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
