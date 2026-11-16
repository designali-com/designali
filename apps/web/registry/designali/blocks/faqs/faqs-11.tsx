const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Brand identity projects run six to eight weeks. Full websites take ten to fourteen, including content and launch support.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. About a third of our clients are pre-Series A. We offer a fixed-scope launch package designed for that stage.",
  },
  {
    q: "Who will I actually work with?",
    a: "A dedicated lead designer and strategist from kickoff to handover. No account managers in the middle.",
  },
  {
    q: "What does a project cost?",
    a: "Engagements start at $24k. We send a fixed quote after a 30-minute discovery call, so there are no surprise invoices.",
  },
  {
    q: "Do you handle development?",
    a: "We design and build marketing sites in-house. For product engineering we partner with two trusted studios.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free support. After that, most clients keep us on a light monthly retainer.",
  },
]

export default function Faqs11() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-background/15 pb-12 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Good questions.
          </h2>
          <p className="max-w-md text-base leading-7 text-background/60 md:justify-self-end">
            The things founders and marketing leads ask us before signing. If
            yours isn&apos;t here, write to hello@northfield.studio.
          </p>
        </div>
        <dl className="grid gap-x-12 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <span className="font-sans text-sm text-background/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="mt-4 text-lg font-medium tracking-tight">
                {faq.q}
              </dt>
              <dd className="mt-3 text-sm leading-6 text-background/60">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
