import { ArrowRight, Calendar, Inbox, Sparkles, Users } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function Hero11() {
  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <div className="flex flex-col justify-between border border-border bg-card p-8 md:col-span-4 md:row-span-2 md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-muted px-2.5 py-1 text-xs">
              <Sparkles className="size-3.5" />
              Spring release
            </span>
            <h1 className="mt-8 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
              The shared inbox your support team actually wants to open.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Hearth routes every email, chat and DM into one calm queue,
              assigns it to the right person and drafts a reply in your
              team&apos;s voice.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Try Hearth free
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
              Book a walkthrough
            </Button>
          </div>
        </div>

        <div className="border border-border bg-foreground p-6 text-background md:col-span-2">
          <Inbox className="size-5" />
          <p className="mt-6 text-5xl font-medium tracking-tight">-41%</p>
          <p className="mt-2 text-sm opacity-70">
            median first response time after 30 days
          </p>
        </div>

        <div className="border border-border p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <Users className="size-5" />
            <div className="flex -space-x-2">
              {["MO", "JT", "AS", "RB"].map((initials, index) => (
                <span
                  key={initials}
                  className={`flex size-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-medium text-white ${
                    ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"][index]
                  }`}
                >
                  {initials}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm font-medium">Collision detection</p>
          <p className="mt-1 text-sm text-muted-foreground">
            See who is replying in real time. No more double answers.
          </p>
        </div>

        <div className="border border-border p-6 md:col-span-3">
          <p className="text-xs text-muted-foreground">Today&apos;s queue</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["Refund for order #4821", "Billing", "bg-amber-500"],
              ["Cannot connect calendar", "Integrations", "bg-sky-500"],
              ["Bulk pricing question", "Sales", "bg-emerald-500"],
            ].map(([subject, tag, dot]) => (
              <li key={subject} className="flex items-center gap-3">
                <span className={`size-2 shrink-0 rounded-full ${dot}`} />
                <span className="min-w-0 flex-1 truncate">{subject}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 border border-border bg-muted/50 p-6 md:col-span-3">
          <Calendar className="size-5 shrink-0" />
          <p className="text-sm">
            <span className="font-medium">SLA timers that respect weekends.</span>{" "}
            <span className="text-muted-foreground">
              Business hours per team, per timezone, per holiday calendar.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
