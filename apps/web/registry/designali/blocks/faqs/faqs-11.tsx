const faqs = [
  {
    q: "What does Designali do?",
    a: "Brand identity, UI/UX design, web design and Next.js development, plus design systems, CGI, 3D, motion and AI-assisted workflows. Design se code tak.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. Designali often helps founders go from first idea to a launched brand and website, with a scope sized for that stage.",
  },
  {
    q: "Who will I actually work with?",
    a: "Ali Imam, the designer and developer behind Designali, from kickoff to handover. No account managers in the middle.",
  },
  {
    q: "What does a project cost?",
    a: "Every project gets a fixed quote after a short discovery call, so there are no surprise invoices. See /pricing for blocks and templates.",
  },
  {
    q: "Do you handle development?",
    a: "Yes. Designali designs in Figma and builds production-ready sites with Next.js, React, TypeScript and Tailwind CSS, deployed on Vercel.",
  },
  {
    q: "What happens after launch?",
    a: "You get the code, the Figma files and a walkthrough. Support and ongoing updates can be arranged whenever you need them.",
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
            The things founders and teams ask Designali before starting. If
            yours isn&apos;t here, write to hello@designali.com.
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
