import {
  ArrowUpRight,
} from "@designali/icons"

const picks = [
  {
    title: "The case for thoughtful design",
    why: "The essay that shaped how Designali approaches every project.",
    author: "Ali Imam",
    read: 14,
  },
  {
    title: "Pricing pages are product pages",
    why: "Rewrote how we think about designali.com/pricing.",
    author: "Ali Imam",
    read: 9,
  },
  {
    title: "A beginner's map of the Designali color system",
    why: "How #00A8FF became the brand accent across every block.",
    author: "Designali Studio",
    read: 21,
  },
  {
    title: "Interviewing clients before the first sketch",
    why: "Practical scripts, plus what to do with the feedback afterwards.",
    author: "Ali Imam",
    read: 11,
  },
  {
    title: "What we learned shipping 2,300+ UI examples",
    why: "Every naming mistake we made, so you can skip them.",
    author: "Designali Studio",
    read: 16,
  },
]

export default function Blog12() {
  return (
    <section className="w-full bg-foreground py-16 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-60">Editor&apos;s picks, 2026</p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
              Five posts worth your whole afternoon
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 opacity-70">
              Chosen by Ali Imam from the posts published on the Designali blog
              this year. No algorithm, just arguments in a shared doc.
            </p>
          </div>

          <ol className="border-t border-background/20">
            {picks.map((p, i) => (
              <li key={p.title} className="border-b border-background/20">
                <a href="#" className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-7 md:grid-cols-[5rem_1fr_auto]">
                  <span className="font-sans text-3xl font-light opacity-40 transition-opacity group-hover:opacity-100 md:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xl leading-snug font-medium md:text-2xl">{p.title}</span>
                    <span className="mt-2 block text-sm opacity-70">{p.why}</span>
                    <span className="mt-3 block text-xs opacity-50">
                      {p.author} · {p.read} min read
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 size-5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
