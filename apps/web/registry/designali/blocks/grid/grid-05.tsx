const integrations = [
  { name: "Slack", category: "Messaging", hue: 330 },
  { name: "Linear", category: "Issues", hue: 250 },
  { name: "GitHub", category: "Code", hue: 0 },
  { name: "Notion", category: "Docs", hue: 40 },
  { name: "Figma", category: "Design", hue: 15 },
  { name: "Corvia", category: "Payments", hue: 260 },
  { name: "Vercel", category: "Hosting", hue: 200 },
  { name: "Sentry", category: "Monitoring", hue: 290 },
  { name: "HubSpot", category: "CRM", hue: 20 },
  { name: "Zapier", category: "Automation", hue: 25 },
  { name: "Intercom", category: "Support", hue: 210 },
  { name: "Segment", category: "Data", hue: 160 },
]

export default function Grid05() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Plays well with your stack
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Two-way sync with the tools your team already lives in. Set up in
          minutes, no engineering ticket required.
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
          href="#"
          className="mt-8 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Browse all 84 integrations
        </a>
      </div>
    </section>
  )
}
