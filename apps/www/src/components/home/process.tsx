import { Section } from "./section-shell"

const steps = [
  { n: "01", time: "Day 1–3", title: "Understand", desc: "A deep dive into your product, audience and goals, plus quick research on competitors." },
  { n: "02", time: "Day 4–8", title: "Design", desc: "Wireframes to high fidelity with fast iterations and an update every 48 hours." },
  { n: "03", time: "Day 9–14", title: "Build", desc: "Developed in Framer, Webflow or Next.js, or handed off as clean Figma files." },
  { n: "04", time: "Day 15+", title: "Refine & ship", desc: "QA, polish and launch support, so nothing is left half-finished." },
]

export function Process() {
  return (
    <Section id="process" title="From day one to launch" eyebrow="Clear rhythm, no dead silence" className="border-t-0">
      <div className="grid border border-dotted sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex flex-col gap-3 border-b border-dotted p-6 sm:[&:nth-child(2n)]:border-l lg:border-b-0 lg:[&:nth-child(n+2)]:border-l"
          >
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>{s.n}</span>
              <span>{s.time}</span>
            </div>
            <h3 className="font-serif text-2xl">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="p-4 text-xs text-muted-foreground">
        Every project moves at its own pace. A landing page can be live in two weeks; a full product takes longer.
      </p>
    </Section>
  )
}
