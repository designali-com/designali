const logos = [
  { name: "Dalim", shape: "circle" },
  { name: "Dalim Agency", shape: "triangle" },
  { name: "Dalim UI", shape: "square" },
  { name: "Dalim Fonts", shape: "wave" },
  { name: "Dalim Works", shape: "diamond" },
  { name: "Dalim Visuals", shape: "grid" },
] as const

function Mark({ shape }: { shape: (typeof logos)[number]["shape"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {shape === "circle" && <circle cx="12" cy="12" r="8" />}
      {shape === "triangle" && <path d="M12 4 20 19H4Z" />}
      {shape === "square" && <rect x="5" y="5" width="14" height="14" />}
      {shape === "wave" && <path d="M3 14c3-6 6 6 9 0s6 6 9 0" />}
      {shape === "diamond" && <path d="M12 3 21 12 12 21 3 12Z" />}
      {shape === "grid" && <path d="M4 4h7v7H4zM13 13h7v7h-7z" />}
    </svg>
  )
}

export default function Clients07() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            One studio, many brands
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            From Dalim to Designali, Ali Imam has designed and coded every
            brand, website and product in this family.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
          >
            See our work
          </a>
        </div>
        <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center gap-2 bg-background text-muted-foreground"
            >
              <Mark shape={logo.shape} />
              <span className="font-medium tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
