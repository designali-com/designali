import {
  CreditCard,
  LogOut,
  Rocket,
  ShoppingCart,
} from "@designali/icons"

const stages = [
  {
    icon: ShoppingCart,
    stage: "Before buying",
    when: "Day 0",
    items: [
      {
        q: "Which plan should I start on?",
        a: "Most teams under 20 people start on Studio. You can move up or down at any time, and we prorate the difference.",
      },
      {
        q: "Can I see a live demo first?",
        a: "Book a 20-minute walkthrough with a product specialist, or explore the sandbox workspace with sample data.",
      },
    ],
  },
  {
    icon: Rocket,
    stage: "Onboarding",
    when: "Week 1",
    items: [
      {
        q: "Will someone help us set up?",
        a: "Every new workspace gets a guided setup call. We import your existing boards and configure permissions with you.",
      },
      {
        q: "How do I bring my team in?",
        a: "Invite by email or connect your identity provider. New members get a short interactive tour on first login.",
      },
    ],
  },
  {
    icon: CreditCard,
    stage: "Billing",
    when: "Monthly",
    items: [
      {
        q: "When am I charged?",
        a: "On the same date each month or year as your first payment. Receipts land in your inbox and in Settings, under Billing.",
      },
      {
        q: "What if we add people mid-cycle?",
        a: "New seats are charged pro rata for the rest of the cycle, so you never pay for days you didn't use.",
      },
    ],
  },
  {
    icon: LogOut,
    stage: "Cancelling",
    when: "Any time",
    items: [
      {
        q: "How do I cancel?",
        a: "Owners can cancel from Settings in two clicks. No calls, no retention forms. Your plan stays active until the period ends.",
      },
      {
        q: "Can I get my data out?",
        a: "Export every board, file and comment as a ZIP. We keep a read-only copy for 30 days in case you come back.",
      },
    ],
  },
]

export default function Faqs16() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Your journey with Orbitly
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Answers for every step, from first look to last day.
          </h2>
        </div>
        <ol className="relative mt-14 space-y-12 border-s border-border ps-8 md:ps-12">
          {stages.map((stage, index) => (
            <li key={stage.stage} className="relative">
              <span className="absolute -start-[49px] top-0 flex size-8 items-center justify-center border border-border bg-background md:-start-[65px]">
                <stage.icon className="size-4" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium tracking-tight">
                  {stage.stage}
                </h3>
                <span className="border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                  {stage.when}
                </span>
              </div>
              <dl className="mt-6 grid gap-4 md:grid-cols-2">
                {stage.items.map((item) => (
                  <div
                    key={item.q}
                    className="border border-border bg-card p-5"
                  >
                    <dt className="text-sm font-medium">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
