const steps = [
  {
    number: "01",
    title: "Connect your repository",
    body: "Authorise GitHub or GitLab and pick the projects you want to track. Nothing is copied until you say so.",
  },
  {
    number: "02",
    title: "Define your checks",
    body: "Choose from 40 built-in rules for accessibility, performance and consistency, or write your own in TypeScript.",
  },
  {
    number: "03",
    title: "Review in context",
    body: "Results appear as inline comments on the pull request with a suggested fix you can apply in one click.",
  },
  {
    number: "04",
    title: "Track progress over time",
    body: "A weekly report shows which teams are improving and where the debt is quietly growing.",
  },
]

export default function Features09() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            Quality checks that run themselves.
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Most teams are fully set up in an afternoon. Here is what the first
            week looks like.
          </p>
        </div>
        <ol className="border-l border-border">
          {steps.map((step) => (
            <li key={step.number} className="relative pb-12 pl-10 last:pb-0">
              <span className="absolute top-0 -left-px h-8 w-px bg-foreground" />
              <span className="font-mono text-sm text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
