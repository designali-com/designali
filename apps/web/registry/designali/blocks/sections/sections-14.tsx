const principles = [
  {
    title: "Design and code are one craft",
    body: "Every screen is designed by someone who will also build it. What you approve in Figma is what ships in Next.js.",
  },
  {
    title: "Production-ready, not pixel-perfect mockups",
    body: "We design with real components, real content and real breakpoints, so nothing falls apart at handoff.",
  },
  {
    title: "Systems over one-offs",
    body: "Brand identity, UI kit and code share the same tokens. A change in one place updates everywhere.",
  },
  {
    title: "Thoughtful by default",
    body: "Interfaces that look great, feel intuitive and work beautifully: accessible, fast and calm.",
  },
  {
    title: "Share what we make",
    body: "Blocks, icons, logos and templates we build for clients often end up on designali.com for everyone to use.",
  },
]

export default function Sections14() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:h-fit">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali principles</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            The rules we design by.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
            Five principles behind every Designali project, from brand
            identity to the final Next.js deploy.
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
                <span className="text-4xl font-light tracking-tighter text-muted-foreground/50 md:text-5xl">
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
