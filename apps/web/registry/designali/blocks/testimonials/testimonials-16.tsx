const quotes = [
  { quote: "It feels like the tool was designed by someone who has actually run a kitchen on a Saturday night.", name: "Chef Marco Bellini", place: "Osteria Nove, Turin" },
  { quote: "Table turns are up 15% and my front-of-house team stopped dreading the booking screen.", name: "Aisha Rahman", place: "Saffron House, Leeds" },
  { quote: "No-shows fell off a cliff once deposits and reminders were automatic. Best change we made all year.", name: "Kenji Mori", place: "Kumo Izakaya, Vancouver" },
]

export default function Testimonials16() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
            Trusted on the busiest night of the week.
          </h2>
          <p className="text-sm text-background/60">2,700 restaurants in 19 countries</p>
        </div>
        <div className="mt-14 grid divide-y divide-background/15 border-y border-background/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col justify-between gap-10 py-10 md:px-8 md:first:pl-0 md:last:pr-0">
              <blockquote className="text-lg leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full border border-background/30 text-xs">
                  {q.name.replace("Chef ", "").split(" ").map((p) => p[0]).join("")}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{q.name}</span>
                  <span className="text-background/60">{q.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
