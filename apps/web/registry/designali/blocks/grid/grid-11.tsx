const steps = [
  { title: "Discovery call", duration: "Week 1", text: "A 90-minute session to map goals, constraints and the people who will sign off." },
  { title: "Audit & research", duration: "Weeks 1-2", text: "We review your brand, analytics and audience, and benchmark three competitors." },
  { title: "Direction", duration: "Week 3", text: "Two distinct brand and UI routes presented as working Figma prototypes." },
  { title: "Design sprint", duration: "Weeks 4-6", text: "Daily builds in a shared preview link. Feedback lands in hours, not weeks." },
  { title: "Build & QA", duration: "Weeks 7-8", text: "Production-ready Next.js and Tailwind CSS, with accessibility and performance checks on every page." },
  { title: "Launch & handover", duration: "Week 9", text: "We ship, train your team and stay on call for 30 days after go-live." },
]

export default function Grid11() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">How Designali works</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Nine weeks from kickoff to launch, design se code tak.
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-foreground font-sans text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid grid-cols-9 gap-1" aria-hidden>
          {Array.from({ length: 9 }).map((_, week) => (
            <div key={week} className="space-y-1.5">
              <div className={`h-1.5 ${week < 3 ? "bg-foreground/40" : week < 6 ? "bg-foreground/70" : "bg-foreground"}`} />
              <p className="font-sans text-[10px] text-muted-foreground">W{week + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
