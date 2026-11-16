const quotes = [
  {
    before: "We used to spend Mondays reconciling spreadsheets. Now ",
    highlight: "the report is waiting in Slack before standup",
    after: ", and nobody has opened Excel in months.",
    name: "Priya Raman",
    role: "Head of Ops, Kestrel Freight",
  },
  {
    before: "Switching took one afternoon. ",
    highlight: "Our on-call pages dropped by 70%",
    after: " in the first month because alerts finally had context.",
    name: "Tomas Lindqvist",
    role: "Staff SRE, Halcyon Labs",
  },
  {
    before: "I have tried every tool in this category. This is ",
    highlight: "the first one my whole team actually uses",
    after: " without me nagging them about it.",
    name: "Jordan Ellis",
    role: "Design Director, Paperplane",
  },
]

export default function Testimonials07() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          In their words
        </p>
        <ol className="mt-10 border-t border-border">
          {quotes.map((q, i) => (
            <li
              key={q.name}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[80px_1fr_220px] md:gap-10"
            >
              <span className="font-sans text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <blockquote className="text-xl leading-relaxed tracking-tight md:text-2xl">
                &ldquo;{q.before}
                <mark className="bg-primary/70 px-1 text-foreground dark:bg-primary/30">
                  {q.highlight}
                </mark>
                {q.after}&rdquo;
              </blockquote>
              <div className="text-sm md:text-right">
                <div className="font-medium">{q.name}</div>
                <div className="mt-1 text-muted-foreground">{q.role}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
