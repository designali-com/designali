const steps = [
  {
    phase: "Week 1–2",
    title: "Discovery",
    description:
      "A call with Ali Imam, a review of your brand and product, and a shared brief for what we design and build.",
    deliverables: ["Project brief", "Brand audit", "Sitemap"],
  },
  {
    phase: "Week 3–5",
    title: "Direction",
    description:
      "Brand identity and UI/UX directions explored in Figma, with type, color and layout shown in context.",
    deliverables: ["Moodboards", "Figma directions", "Logo concepts"],
  },
  {
    phase: "Week 6–9",
    title: "Design",
    description:
      "The chosen direction becomes a design system and production-ready Next.js, React and Tailwind CSS code.",
    deliverables: ["Design system", "UI kit", "Next.js build"],
  },
  {
    phase: "Week 10+",
    title: "Delivery",
    description:
      "Launch on Vercel, brand guidelines and a handover so your team can keep shipping.",
    deliverables: ["Vercel deploy", "Brand guidelines", "Handover session"],
  },
]

export default function Sections02() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
            How a Designali project runs, design se code tak.
          </h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            From brand identity to a live Next.js website, with weekly check-ins
            along the way.
          </p>
        </div>

        <ol className="relative mt-16 border-l border-border md:ml-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute top-0 -left-[5px] size-2.5 bg-foreground" />
              <div className="grid gap-6 md:grid-cols-[180px_1fr_220px]">
                <div>
                  <p className="font-sans text-xs text-muted-foreground">
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
