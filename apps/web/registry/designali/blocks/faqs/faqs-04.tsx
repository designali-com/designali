const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most brand and website projects run six to ten weeks from kickoff to launch. Smaller scopes, like a landing page or a component audit, usually ship in two to three weeks.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. Around half of our clients are pre-seed to Series A. We offer a fixed-scope launch package designed for teams that need to move quickly on a lean budget.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A short brief, access to any existing brand assets, and one decision-maker who can join a weekly review. We handle the rest, including research and stakeholder interviews.",
  },
  {
    question: "Can you hand off to our in-house developers?",
    answer:
      "Every project ships with annotated Figma files, a token library and a recorded walkthrough. We stay on Slack for two weeks after handoff to answer questions.",
  },
  {
    question: "How do payments work?",
    answer:
      "We invoice 50% at kickoff and 50% at delivery. Retainers are billed monthly in advance and can be paused or cancelled with 30 days' notice.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Of course. We are happy to sign your NDA before the first call, or we can send over our standard mutual agreement.",
  },
]

export default function Faqs04() {
  return (
    <section className="w-full border-y border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Everything you need to know before we start.
          </h2>
        </div>
        <dl className="mt-14 grid border-t border-l border-border md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="flex gap-6 border-r border-b border-border p-6 md:p-8"
            >
              <span className="font-sans text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="text-base font-medium">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-6 text-muted-foreground">
                  {faq.answer}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
