const rowOne = [
  "Northwind",
  "Halcyon",
  "Kestrel Labs",
  "Orbital",
  "Fieldnote",
  "Monolith",
  "Brightline",
]

const rowTwo = [
  "Quanta",
  "Sable & Co",
  "Driftwave",
  "Tessel",
  "Arcwell",
  "Lumen",
  "Corvid",
]

function Glyph({ index }: { index: number }) {
  const shape = index % 4
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-5 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      {shape === 0 && <circle cx="10" cy="10" r="8" />}
      {shape === 1 && <path d="M10 2 18 18H2Z" />}
      {shape === 2 && <rect x="3" y="3" width="14" height="14" />}
      {shape === 3 && <path d="M10 1 19 10 10 19 1 10Z" />}
    </svg>
  )
}

function Row({ names, reverse }: { names: string[]; reverse?: boolean }) {
  return (
    <div className="flex gap-(--gap) overflow-hidden [--duration:40s] [--gap:3.5rem]">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee items-center gap-(--gap)"
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {names.map((name, index) => (
            <span
              key={name}
              className="flex items-center gap-2.5 text-xl font-semibold tracking-tight whitespace-nowrap text-background/70 md:text-2xl"
            >
              <Glyph index={index + (reverse ? 2 : 0)} />
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Clients11() {
  return (
    <section className="w-full overflow-hidden bg-foreground py-20 text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          The quiet infrastructure behind 3,000+ product launches.
        </h2>
        <p className="max-w-sm text-sm leading-6 text-background/60">
          Design leads, platform engineers and founders standardise on one
          system so every release looks and feels like the last.
        </p>
      </div>
      <div className="mt-14 space-y-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Row names={rowOne} />
        <Row names={rowTwo} reverse />
      </div>
    </section>
  )
}
