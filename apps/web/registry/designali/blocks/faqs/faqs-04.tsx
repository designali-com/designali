const faqs = [
  {
    question: "How long does a typical Designali project take?",
    answer:
      "Timelines depend on scope. A brand identity or a full website is planned in clear phases from kickoff to launch, while smaller pieces like a landing page or a component audit move faster. You get a schedule before anything starts.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. Designali works with founders and small teams who need a brand, a product UI or a production-ready Next.js site without building an in-house design team first.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A short brief, access to any existing brand assets, and one decision-maker who can join regular reviews. Ali Imam handles research, design and development from there.",
  },
  {
    question: "Can you hand off to our in-house developers?",
    answer:
      "Every project ships with organised Figma files, design tokens and clean TypeScript and Tailwind CSS code, so your team can pick it up and keep building.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment terms are agreed up front in the proposal. Write to billing@designali.com for invoices, receipts or anything related to billing.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Of course. Designali is happy to sign your NDA before the first call. Just send it to hello@designali.com.",
  },
]

export default function Faqs04() {
  return (
    <section className="w-full border-y border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Designali FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Everything you need to know before we work together.
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
