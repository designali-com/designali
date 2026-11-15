const works = [
  { title: "Bloom", year: "2025", medium: "Generative print", shape: "circle" },
  { title: "Fold", year: "2025", medium: "Paper study", shape: "fold" },
  { title: "Orbit", year: "2024", medium: "Animated loop", shape: "rings" },
  { title: "Stack", year: "2024", medium: "Risograph", shape: "bars" },
] as const

function Artwork({ shape }: { shape: (typeof works)[number]["shape"] }) {
  return (
    <svg viewBox="0 0 200 200" className="size-full" fill="none">
      {shape === "circle" && (
        <circle cx="100" cy="100" r="60" fill="var(--chart-1)" />
      )}
      {shape === "fold" && (
        <>
          <path d="M40 160 100 40 160 160Z" fill="var(--chart-2)" />
          <path d="M100 40 160 160H100Z" fill="var(--chart-4)" />
        </>
      )}
      {shape === "rings" &&
        [70, 50, 30].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            stroke="var(--chart-3)"
            strokeWidth="8"
          />
        ))}
      {shape === "bars" &&
        [0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={40 + i * 32}
            y={60 + i * 15}
            width="22"
            height={100 - i * 15}
            fill="var(--chart-5)"
          />
        ))}
    </svg>
  )
}

export default function Gallery07() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <figure key={work.title} className="group bg-background">
              <div className="aspect-square bg-muted p-8 transition-colors group-hover:bg-accent">
                <Artwork shape={work.shape} />
              </div>
              <figcaption className="border-t border-border p-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-medium">{work.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {work.year}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {work.medium}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Exhibited at Lumen Gallery, Rotterdam. All works available as limited
          editions of 25.
        </p>
      </div>
    </section>
  )
}
