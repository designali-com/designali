const notes = [
  { label: "Founded", value: "Porto, 2015" },
  { label: "First product", value: "A printed field guide to Atlantic tides" },
  { label: "Today", value: "Tide and swell forecasts for 2.1M sailors" },
]

export default function Sections19() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="border-b border-border pb-10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Chapter one · How Salt began
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            It started with a capsized dinghy and a forecast that was wrong by four hours.
          </h2>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[200px_1fr_220px]">
          <aside className="order-last lg:order-first">
            <dl className="space-y-6">
              {notes.map((note) => (
                <div key={note.label} className="border-t border-border pt-3">
                  <dt className="text-xs text-muted-foreground">{note.label}</dt>
                  <dd className="mt-1 text-sm">{note.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="max-w-2xl space-y-6 text-base leading-8 text-muted-foreground">
            <p className="text-foreground first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-medium">
              In the summer of 2014, Inês Barros and her brother Tiago were
              pulled out of the Douro estuary by a fishing crew who happened to
              be heading home early. The app they had checked that morning said
              the tide would turn at three. It turned just before eleven.
            </p>
            <p>
              Tiago, a hydrologist, spent the following winter comparing every
              public tide model against harbour gauges up and down the coast.
              The errors were not random. They clustered around river mouths,
              exactly where small boats spend most of their time.
            </p>
            <figure className="my-10 border-y border-border py-8">
              <blockquote className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
                &ldquo;We did not set out to build a company. We set out to
                never be rescued again.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">Inês Barros, co-founder</figcaption>
            </figure>
            <p>
              The first version of Salt was a 64-page printed booklet, sold
              from a cafe by the marina. The second was a website. The third,
              built with two engineers from the university, is the forecasting
              engine that now runs every Salt product.
            </p>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-12 border border-border bg-muted/50 p-5">
              <svg viewBox="0 0 180 80" className="w-full text-foreground" aria-hidden>
                <path
                  d="M0 40 C 22 10, 45 10, 67 40 S 112 70, 135 40 S 168 15, 180 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 48 C 22 22, 45 22, 67 48 S 112 72, 135 48 S 168 26, 180 40"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeDasharray="3 3"
                />
              </svg>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Predicted (dashed) vs observed tide at Foz do Douro, 14 July 2014.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
