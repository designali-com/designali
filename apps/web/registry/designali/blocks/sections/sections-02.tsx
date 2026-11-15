const steps = [
  {
    phase: "Week 1–2",
    title: "Discovery",
    description:
      "Stakeholder interviews, competitive audit and a workshop to agree on what success looks like.",
    deliverables: ["Research report", "Brand audit", "Project brief"],
  },
  {
    phase: "Week 3–5",
    title: "Direction",
    description:
      "Three distinct creative routes, each with type, colour and tone of voice explored in context.",
    deliverables: ["Moodboards", "Route presentations", "Naming shortlist"],
  },
  {
    phase: "Week 6–9",
    title: "Design",
    description:
      "We refine the chosen route into a complete system and test it across real touchpoints.",
    deliverables: ["Identity system", "UI kit", "Motion principles"],
  },
  {
    phase: "Week 10+",
    title: "Delivery",
    description:
      "Guidelines, production files and a handover session so your team can run with it.",
    deliverables: ["Brand guidelines", "Asset library", "Team training"],
  },
]

export default function Sections02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
            How a project runs, start to finish.
          </h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            A typical brand engagement takes ten to twelve weeks with weekly
            check-ins.
          </p>
        </div>

        <ol className="relative mt-16 border-l border-border md:ml-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute top-0 -left-[5px] size-2.5 bg-foreground" />
              <div className="grid gap-6 md:grid-cols-[180px_1fr_220px]">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.phase}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <ul className="space-y-1.5 border-t border-border pt-4 text-xs md:border-t-0 md:border-l md:pt-0 md:pl-6">
                  {step.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
