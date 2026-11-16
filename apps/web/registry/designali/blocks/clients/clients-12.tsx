const stats = [
  { value: "48%", label: "Faster design-to-code handoff" },
  { value: "2.1M", label: "Designali blocks rendered daily" },
  { value: "99.98%", label: "designali.com uptime last 12 months" },
]

const logos = [
  { name: "Designali", mark: "ring" },
  { name: "Dalim", mark: "bars" },
  { name: "Dalim UI", mark: "chevron" },
  { name: "Dalim Fonts", mark: "leaf" },
  { name: "Dalim Icons", mark: "slash" },
  { name: "Dalim Works", mark: "cloud" },
  { name: "Dalim Tools", mark: "hex" },
  { name: "Dalim Visuals", mark: "peak" },
] as const

function Mark({ type }: { type: (typeof logos)[number]["mark"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "ring" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </>
      )}
      {type === "bars" && <path d="M5 18V9M10 18V5M15 18v-7M20 18V8" />}
      {type === "chevron" && <path d="m4 16 8-8 8 8M4 21l8-8 8 8" />}
      {type === "leaf" && <path d="M5 19C5 10 10 5 20 4c0 10-5 15-15 15Zm0 0 8-8" />}
      {type === "slash" && <path d="M4 20 14 4M10 20 20 4" />}
      {type === "cloud" && (
        <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />
      )}
      {type === "hex" && <path d="M12 2 21 7v10l-9 5-9-5V7Z" />}
      {type === "peak" && <path d="m2 20 7-12 4 6 3-4 6 10Z" />}
    </svg>
  )
}

export default function Clients12() {
  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Customers
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Numbers Designali customers report after their first quarter.
            </h2>
          </div>
          <dl className="grid grid-cols-1 border-t border-border sm:grid-cols-3 sm:border-t-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-border py-6 sm:border-b-0 sm:border-l sm:px-6 sm:py-0"
              >
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center gap-2.5 bg-background text-muted-foreground transition-colors hover:text-foreground md:h-28"
            >
              <Mark type={logo.mark} />
              <span className="text-base font-semibold tracking-tight md:text-lg">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
