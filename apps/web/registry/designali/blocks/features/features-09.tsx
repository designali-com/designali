const steps = [
  {
    number: "01",
    title: "Share your brief",
    body: "Tell Designali about your brand, goals and timeline at hello@designali.com. Ali Imam reviews every brief personally.",
  },
  {
    number: "02",
    title: "Shape the brand",
    body: "We define positioning, brand identity and creative direction so your product has a clear and confident voice.",
  },
  {
    number: "03",
    title: "Design in Figma",
    body: "UI/UX screens and a reusable design system are designed in Figma and reviewed with you at every step.",
  },
  {
    number: "04",
    title: "Build and launch",
    body: "Designs become production-ready Next.js code with Tailwind CSS, deployed on Vercel. Design se code tak.",
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
            From first brief to launched product.
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            How a Designali project moves from idea to production-ready
            website.
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
