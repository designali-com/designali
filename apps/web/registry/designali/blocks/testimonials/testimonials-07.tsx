const quotes = [
  {
    before: "We used to juggle a brand agency, a UI designer and a dev shop. Now ",
    highlight: "Designali handles it all, design se code tak",
    after: ", and nothing gets lost in handoff.",
    name: "Priya",
    role: "Head of Marketing, Designali client",
  },
  {
    before: "Our new site launched on Vercel in weeks. ",
    highlight: "What we approved in Figma is exactly what shipped",
    after: ", down to the spacing and motion.",
    name: "Tomas",
    role: "Founder, Designali client",
  },
  {
    before: "I have tried every block library out there. Designali is ",
    highlight: "the first one my whole team actually uses",
    after: " without me nagging them about it.",
    name: "Jordan",
    role: "Design Director, designali.com customer",
  },
]

export default function Testimonials07() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          In their words · designali
        </p>
        <ol className="mt-10 border-t border-border">
          {quotes.map((q, i) => (
            <li
              key={q.name}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[80px_1fr_220px] md:gap-10"
            >
              <span className="text-sm text-muted-foreground">
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
