import { ArrowUpRight, Mail, MessageSquare, Phone, Ticket, Video } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const channels = [
  {
    icon: MessageSquare,
    name: "In-app chat",
    best: "Quick questions, billing",
    response: "< 5 min",
    hours: "24/7",
    plan: "All plans",
    href: "#",
  },
  {
    icon: Mail,
    name: "Email",
    best: "Detailed issues with screenshots",
    response: "< 4 hrs",
    hours: "24/7",
    plan: "All plans",
    href: "#",
  },
  {
    icon: Ticket,
    name: "Priority ticket",
    best: "Outages, data problems",
    response: "< 30 min",
    hours: "24/7",
    plan: "Business",
    href: "#",
  },
  {
    icon: Phone,
    name: "Phone",
    best: "Urgent account access",
    response: "Live",
    hours: "Mon-Fri, 8-18 GMT",
    plan: "Business",
    href: "#",
  },
  {
    icon: Video,
    name: "Screen-share session",
    best: "Setup, migrations, training",
    response: "Booked",
    hours: "Mon-Thu",
    plan: "Enterprise",
    href: "#",
  },
]

export default function Contact14() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Pick the right channel
          </h2>
          <p className="text-muted-foreground md:text-end">
            Response times are measured medians for Orbitdesk customers over the
            last 90 days.
          </p>
        </div>

        <div className="mt-12 border">
          <div className="hidden grid-cols-[1.4fr_1.6fr_1fr_1fr_1fr_40px] gap-4 border-b bg-muted/50 px-6 py-3 text-xs font-medium tracking-wide text-muted-foreground uppercase md:grid">
            <span>Channel</span>
            <span>Best for</span>
            <span>Response</span>
            <span>Hours</span>
            <span>Plan</span>
            <span />
          </div>
          <ul className="divide-y">
            {channels.map((channel) => (
              <li key={channel.name}>
                <a
                  href={channel.href}
                  className="group grid grid-cols-2 gap-x-4 gap-y-3 px-6 py-5 transition-colors hover:bg-muted/40 md:grid-cols-[1.4fr_1.6fr_1fr_1fr_1fr_40px] md:items-center"
                >
                  <span className="col-span-2 flex items-center gap-3 font-medium md:col-span-1">
                    <span className="flex size-9 shrink-0 items-center justify-center border bg-background">
                      <channel.icon className="size-4" />
                    </span>
                    {channel.name}
                  </span>
                  <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">
                    {channel.best}
                  </span>
                  <span className="text-sm">
                    <span className="me-1 text-xs text-muted-foreground md:hidden">Response</span>
                    <span className="font-medium tabular-nums">{channel.response}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">{channel.hours}</span>
                  <span>
                    <Badge variant={channel.plan === "All plans" ? "secondary" : "outline"}>
                      {channel.plan}
                    </Badge>
                  </span>
                  <ArrowUpRight className="hidden size-4 justify-self-end text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
