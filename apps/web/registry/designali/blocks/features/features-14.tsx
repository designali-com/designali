import {
  Bell,
  Cloud,
  Database,
  GitBranch,
  Mail,
  MessageCircle,
  Plug,
  Server,
  Webhook,
} from "lucide-react"

const nodes = [
  { icon: GitBranch, label: "Git", pos: "left-1/2 top-0 -translate-x-1/2" },
  { icon: MessageCircle, label: "Chat", pos: "right-[6%] top-[14%]" },
  { icon: Database, label: "Postgres", pos: "right-0 top-1/2 -translate-y-1/2" },
  { icon: Mail, label: "Email", pos: "right-[6%] bottom-[14%]" },
  { icon: Cloud, label: "Storage", pos: "left-1/2 bottom-0 -translate-x-1/2" },
  { icon: Bell, label: "Pager", pos: "left-[6%] bottom-[14%]" },
  { icon: Server, label: "Kubernetes", pos: "left-0 top-1/2 -translate-y-1/2" },
  { icon: Webhook, label: "Webhooks", pos: "left-[6%] top-[14%]" },
]

const points = [
  ["120+ connectors", "Maintained by us, versioned, and tested nightly against each vendor's sandbox."],
  ["Two-way sync", "Changes flow both directions with conflict resolution you can configure per field."],
  ["Bring your own", "Anything with an HTTP API becomes a connector with a 20-line manifest."],
]

export default function Features14() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Plugs into the tools you already pay for.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Switchyard sits in the middle of your stack and turns events from
            any system into actions in any other. No glue code, no cron jobs.
          </p>
          <dl className="mt-10 space-y-6">
            {points.map(([title, body]) => (
              <div key={title} className="border-l-2 border-foreground pl-4">
                <dt className="text-sm font-medium">{title}</dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <div className="absolute inset-[12%] rounded-full border border-dashed border-border" />
          <div className="absolute inset-[30%] rounded-full border border-border bg-muted/40" />
          <div className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-foreground text-background shadow-xl md:size-24">
            <Plug className="size-8" />
          </div>
          {nodes.map(({ icon: Icon, label, pos }) => (
            <div key={label} className={`absolute flex flex-col items-center gap-1 ${pos}`}>
              <span className="flex size-11 items-center justify-center border border-border bg-background shadow-sm md:size-12">
                <Icon className="size-5" />
              </span>
              <span className="hidden text-[11px] text-muted-foreground sm:block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
