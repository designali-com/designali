const rows = [
  {
    value: "460+",
    label: "Blocks",
    body: "Copy-and-paste sections for heroes, features, pricing, footers and dashboards, built with Next.js and Tailwind CSS.",
  },
  {
    value: "240+",
    label: "Landing pages",
    body: "Complete page layouts you can launch as-is or remix into your own Designali-powered product.",
  },
  {
    value: "2300+",
    label: "UI examples",
    body: "Every component shown in real-world states, so you can see exactly how it behaves before you use it.",
  },
  {
    value: "4000+",
    label: "Icons",
    body: "Lucide-compatible icons in @designali/icons, plus brand logos in @designali/logos.",
  },
]

export default function Features12() {
  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            The numbers behind Designali.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-right">
            Designed and built by Ali Imam. Design se code tak.
          </p>
        </div>
        <div className="mt-14 border-t border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_1fr_1.4fr] md:items-baseline md:gap-10"
            >
              <div className="font-sans text-5xl font-medium tracking-tighter md:text-6xl">
                {row.value}
              </div>
              <div className="text-base font-medium">{row.label}</div>
              <p className="text-sm leading-7 text-muted-foreground">{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
