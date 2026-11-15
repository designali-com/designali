import { Quote } from "lucide-react"

type Card =
  | { kind: "post"; tag: string; title: string; excerpt: string; date: string; art?: string }
  | { kind: "quote"; text: string; source: string }
  | { kind: "note"; title: string; date: string }

const cards: Card[] = [
  {
    kind: "post",
    tag: "Ceramics",
    title: "Firing a wood kiln for three days straight",
    excerpt: "Shift rotas, ash glaze, and the twelve pieces that survived out of eighty.",
    date: "Nov 12",
    art: "aspect-[4/5] bg-gradient-to-b from-chart-5/60 to-chart-1/20",
  },
  { kind: "note", title: "Studio open house moved to December 7", date: "Nov 10" },
  {
    kind: "quote",
    text: "The glaze does what it wants. My job is to give it good reasons.",
    source: "From our interview with potter Saoirse Byrne",
  },
  {
    kind: "post",
    tag: "Process",
    title: "Throwing the same bowl a hundred times",
    excerpt: "A practice log on consistency, wrist pain, and when to stop.",
    date: "Nov 6",
    art: "aspect-square bg-gradient-to-tr from-chart-2/50 to-chart-3/20",
  },
  {
    kind: "post",
    tag: "Materials",
    title: "Local clay, tested",
    excerpt: "We dug from four riverbanks and fired the samples to cone 10. Results inside.",
    date: "Oct 30",
  },
  {
    kind: "post",
    tag: "Visit",
    title: "A week at the Mashiko pottery fair",
    excerpt: "Notes, sketches, and a very heavy suitcase.",
    date: "Oct 24",
    art: "aspect-[3/4] bg-gradient-to-br from-chart-4/60 to-chart-2/20",
  },
  { kind: "note", title: "New glaze recipe cards are in the shop", date: "Oct 20" },
  {
    kind: "post",
    tag: "Tools",
    title: "The trimming tools we actually reach for",
    excerpt: "Nine tools, six of them homemade from banding steel.",
    date: "Oct 15",
    art: "aspect-video bg-gradient-to-r from-chart-1/50 to-chart-4/20",
  },
]

export default function Blog11() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-xl">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Kiln &amp; Kettle journal</h2>
          <p className="mt-3 text-muted-foreground">
            Long reads, short notes, and things overheard in the studio.
          </p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {cards.map((card, i) => {
            if (card.kind === "quote") {
              return (
                <figure key={i} className="mb-5 break-inside-avoid bg-foreground p-6 text-background">
                  <Quote className="size-5 opacity-60" />
                  <blockquote className="mt-4 font-serif text-2xl leading-snug">
                    {card.text}
                  </blockquote>
                  <figcaption className="mt-4 text-xs opacity-70">{card.source}</figcaption>
                </figure>
              )
            }
            if (card.kind === "note") {
              return (
                <a
                  key={i}
                  href="#"
                  className="mb-5 block break-inside-avoid border border-dashed p-5 hover:bg-muted/50"
                >
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                    Studio note · {card.date}
                  </p>
                  <p className="mt-2 font-medium">{card.title}</p>
                </a>
              )
            }
            return (
              <a key={i} href="#" className="group mb-5 block break-inside-avoid border bg-card">
                {card.art && <div className={card.art} />}
                <div className="p-5">
                  <p className="text-xs text-muted-foreground">
                    {card.tag} · {card.date}
                  </p>
                  <h3 className="mt-2 text-lg leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.excerpt}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
