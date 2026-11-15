const tiers = [
  {
    label: "Enterprise",
    names: ["Meridian Group", "Halcyon Bank", "Atlas Freight"],
  },
  {
    label: "Scale-ups",
    names: ["Driftwave", "Quanta AI", "Tessel", "Polar"],
  },
  {
    label: "Studios",
    names: ["Corvid", "Blockhaus", "Lumen & Co", "Fieldnote", "Sable"],
  },
]

export default function Clients10() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          Companies of every size build their brand on our foundation.
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
