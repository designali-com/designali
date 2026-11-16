import {
  ArrowRight,
  CreditCard,
  KeyRound,
  Plug,
  Rocket,
  ShieldCheck,
  Users,
} from "@designali/icons"

const topics = [
  {
    icon: Rocket,
    title: "Getting started",
    count: 14,
    questions: [
      "Copying your first Designali block",
      "Installing @designali/icons",
      "Setting up design tokens",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing and plans",
    count: 11,
    questions: [
      "Upgrading to Designali Pro",
      "Downloading invoices",
      "Contacting billing@designali.com",
    ],
  },
  {
    icon: Users,
    title: "Teams and studios",
    count: 9,
    questions: [
      "Using Designali in client work",
      "Sharing templates with your team",
      "Hiring Ali Imam for a project",
    ],
  },
  {
    icon: KeyRound,
    title: "Account and login",
    count: 7,
    questions: [
      "Resetting your password",
      "Changing your account email",
      "Signing in on a new device",
    ],
  },
  {
    icon: Plug,
    title: "Stack and integrations",
    count: 18,
    questions: [
      "Using blocks with Next.js and Vercel",
      "Tailwind CSS and shadcn-style UI",
      "Importing Figma files",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Licensing",
    count: 10,
    questions: [
      "What the Designali license covers",
      "Using icons and logos commercially",
      "Reading the terms at /docs/legal/terms",
    ],
  },
]

export default function Faqs09() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Help center
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Browse Designali answers by topic
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
          >
            View all 69 articles
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex flex-col border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center border border-border bg-muted">
                  <topic.icon className="size-5" />
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  {topic.count} articles
                </span>
              </div>
              <h3 className="mt-5 text-base font-medium">{topic.title}</h3>
              <ul className="mt-4 flex-1 space-y-1">
                {topic.questions.map((question) => (
                  <li key={question}>
                    <a
                      href="#"
                      className="group flex items-center justify-between gap-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {question}
                      <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
