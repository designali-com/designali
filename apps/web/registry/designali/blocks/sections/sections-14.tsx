const principles = [
  {
    title: "Defaults are a product decision",
    body: "Most users never open settings. We ship the configuration we would choose ourselves and make the alternative one click away.",
  },
  {
    title: "Fast is a feature",
    body: "Every screen has a performance budget of 100ms to first interaction on a five-year-old laptop. Regressions block releases.",
  },
  {
    title: "Show the work",
    body: "When the system makes a decision, it explains why, links to the source and lets you override it.",
  },
  {
    title: "Your data leaves with you",
    body: "Full exports in open formats, at any time, on every plan. No support ticket, no retention call.",
  },
  {
    title: "Nothing ships without a reader",
    body: "Every feature has a short public changelog entry written before the code, so we know what we are building.",
  },
]

export default function Sections14() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:h-fit">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Product principles</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            The rules we design by.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
            Five principles that settle arguments before they start. Each one
            has cost us a feature we wanted to build.
          </p>
          <div className="mt-10 hidden aspect-[4/3] max-w-sm overflow-hidden border border-border bg-muted lg:block" aria-hidden>
            <div className="grid h-full grid-cols-5 grid-rows-4 gap-px bg-border">
              {Array.from({ length: 20 }, (_, index) => (
                <span
                  key={index}
                  className={
                    [2, 6, 7, 11, 12, 13, 17].includes(index) ? "bg-foreground" : "bg-background"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <ol className="space-y-4">
          {principles.map((principle, index) => (
            <li key={principle.title} className="border border-border bg-card p-6 md:p-8">
              <div className="flex items-start gap-6">
                <span className="font-mono text-4xl font-light tracking-tighter text-muted-foreground/50 md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-tight">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
