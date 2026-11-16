const tiers = [
  {
    label: "Products",
    names: ["Designali Templates", "Designali Blocks", "Designali Icons"],
  },
  {
    label: "Libraries",
    names: ["@designali/icons", "@designali/logos", "@designali/vectors", "Dalim UI"],
  },
  {
    label: "Brands",
    names: ["Dalim", "Dalim Agency", "Dalim Fonts", "Dalim Graphic", "Dalim Works"],
  },
]

export default function Clients10() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          Every Designali brand, product and library, built on one foundation.
        </h2>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="grid gap-4 py-6 md:grid-cols-[180px_1fr] md:items-center"
            >
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                {tier.label}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {tier.names.map((name) => (
                  <span
                    key={name}
                    className="text-lg font-medium tracking-tight"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
