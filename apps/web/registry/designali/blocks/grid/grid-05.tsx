const integrations = [
  { name: "Next.js", category: "Framework", hue: 0 },
  { name: "React", category: "UI library", hue: 220 },
  { name: "TypeScript", category: "Language", hue: 250 },
  { name: "Tailwind CSS", category: "Styling", hue: 200 },
  { name: "Figma", category: "Design", hue: 15 },
  { name: "Vercel", category: "Hosting", hue: 260 },
  { name: "GitHub", category: "Code", hue: 290 },
  { name: "Notion", category: "Docs", hue: 40 },
  { name: "Cursor", category: "Editor", hue: 160 },
  { name: "Claude", category: "AI workflows", hue: 30 },
  { name: "OpenAI", category: "AI workflows", hue: 150 },
  { name: "Stripe", category: "Payments", hue: 270 },
]

export default function Grid05() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          The stack behind Designali
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Every Designali block and template is designed and built with the
          tools modern teams already use.
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-border bg-border text-left sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((item) => (
            <li
              key={item.name}
              className="group flex flex-col gap-6 bg-background p-5 transition-colors hover:bg-muted"
            >
              <span
                className="flex size-10 items-center justify-center text-sm font-semibold text-white"
                style={{ backgroundColor: `oklch(0.55 0.15 ${item.hue})` }}
              >
                {item.name[0]}
              </span>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="/docs"
          className="mt-8 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          See the Designali docs
        </a>
      </div>
    </section>
  )
}
