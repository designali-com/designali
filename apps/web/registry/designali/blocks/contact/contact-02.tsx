import {
  ArrowUpRight,
  Headphones,
  LifeBuoy,
  MessageSquare,
} from "@designali/icons"

const channels = [
  {
    icon: MessageSquare,
    title: "Start a project",
    description:
      "Need a brand identity, UI/UX design or a Next.js website? Book a call with Ali Imam.",
    action: "Book a call",
    meta: "Avg. reply in 2 hours",
  },
  {
    icon: LifeBuoy,
    title: "Templates & blocks support",
    description:
      "Stuck installing a Designali block, icon or template? The studio can help.",
    action: "Open a ticket",
    meta: "Priority for Designali Pro",
  },
  {
    icon: Headphones,
    title: "Partnerships",
    description:
      "Agencies and studios: white-label design, CGI, motion and front-end builds.",
    action: "Become a partner",
    meta: "partners@relay.so",
  },
]

export default function Contact02() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            How can we help?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick the team that fits your question and we&apos;ll route you to a
            real person, not a chatbot.
          </p>
        </div>

        <div className="mt-14 grid border md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href="#"
              className="group flex flex-col gap-6 border-b p-8 transition-colors last:border-b-0 hover:bg-muted/50 md:border-e md:border-b-0 md:last:border-e-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center border bg-background">
                  <channel.icon className="size-4" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{channel.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {channel.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t pt-4 text-xs">
                <span className="font-medium">{channel.action}</span>
                <span className="text-muted-foreground">{channel.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
