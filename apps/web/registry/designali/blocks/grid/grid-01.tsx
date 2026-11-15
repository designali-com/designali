import {
  Blocks,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
  type LucideIcon,
} from "lucide-react"

const cells: {
  icon: LucideIcon
  title: string
  description: string
  className: string
}[] = [
  {
    icon: Gauge,
    title: "Edge rendering",
    description:
      "Pages render in the region closest to your visitor, with a median TTFB of 38ms worldwide.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: GitBranch,
    title: "Preview branches",
    description: "Every pull request gets its own live URL.",
    className: "",
  },
  {
    icon: KeyRound,
    title: "Secrets vault",
    description: "Encrypted environment variables per stage.",
    className: "",
  },
  {
    icon: Globe,
    title: "Custom domains",
    description: "Automatic TLS and apex support.",
    className: "",
  },
  {
    icon: Layers,
    title: "Instant rollbacks",
    description: "Revert any deploy in a single click.",
    className: "",
  },
  {
    icon: Blocks,
    title: "Integrations",
    description:
      "Connect your CMS, analytics and error tracking from a library of 60+ first-party integrations.",
    className: "md:col-span-2",
  },
]

export default function Grid01() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Everything you need to ship, nothing you have to maintain.
        </h2>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-px border border-border bg-border md:grid-cols-4">
          {cells.map((cell, index) => (
            <article
              key={cell.title}
              className={`flex flex-col justify-between bg-background p-6 ${cell.className}`}
            >
              <cell.icon className="size-5 text-muted-foreground" />
              {index === 0 && (
                <div className="my-8 flex items-end gap-2">
                  <span className="text-7xl font-semibold tracking-tighter md:text-8xl">
                    38
                  </span>
                  <span className="mb-3 text-sm text-muted-foreground">ms median TTFB</span>
                </div>
              )}
              <div>
                <h3 className="text-base font-medium">{cell.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {cell.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
