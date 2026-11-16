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
} from "@designali/icons"

const nodes = [
  { icon: GitBranch, label: "GitHub", pos: "left-1/2 top-0 -translate-x-1/2" },
  { icon: MessageCircle, label: "Feedback", pos: "right-[6%] top-[14%]" },
  { icon: Database, label: "Database", pos: "right-0 top-1/2 -translate-y-1/2" },
  { icon: Mail, label: "Email", pos: "right-[6%] bottom-[14%]" },
  { icon: Cloud, label: "Vercel", pos: "left-1/2 bottom-0 -translate-x-1/2" },
  { icon: Bell, label: "Alerts", pos: "left-[6%] bottom-[14%]" },
  { icon: Server, label: "Next.js", pos: "left-0 top-1/2 -translate-y-1/2" },
  { icon: Webhook, label: "Webhooks", pos: "left-[6%] top-[14%]" },
]

const points = [
  ["Next.js and React", "Every Designali block is built with Next.js, React and TypeScript."],
  ["Figma to code", "Designs move from Figma to Tailwind CSS without losing a single detail."],
  ["Deploy on Vercel", "Ship your site in minutes and keep iterating with every push to GitHub."],
]

export default function Features14() {
  return (
    <section className="w-full overflow-hidden bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Fits right into the stack you already use.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Designali designs and builds with modern tools, so your website
            plugs straight into your workflow. Design se code tak.
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
