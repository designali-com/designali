const pillars = [
  { label: "For whom", text: "Founders and teams who want a brand and a product that feel like one." },
  { label: "What we build", text: "Brand identity, UI/UX design and production-ready Next.js websites." },
  { label: "How we measure it", text: "Shipped work: live sites, reusable blocks and design systems your team keeps using." },
]

export default function Sections06() {
  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center font-sans text-xs tracking-widest text-muted-foreground uppercase">
          Our mission
        </p>
        <h2 className="mt-8 text-center text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl md:leading-[1.15]">
          Where thoughtful design meets{" "}
          <span className="text-primary">production-ready code</span>. I design
          and build digital experiences that look great, feel intuitive and
          work beautifully, without the{" "}
          <span className="text-muted-foreground line-through decoration-1">handoff</span>.
        </h2>

        <div className="mx-auto mt-12 flex w-fit items-center gap-4">
          <img
            src="/ali.jpg"
            alt="Ali Imam"
            className="size-11 rounded-full object-cover"
          />
          <div className="text-left text-sm">
            <p className="font-medium">Ali Imam</p>
            <p className="text-muted-foreground">Founder, Designali</p>
          </div>
        </div>

        <dl className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="bg-background p-6 md:p-8">
              <dt className="text-xs text-muted-foreground">{pillar.label}</dt>
              <dd className="mt-3 text-base leading-7">{pillar.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
