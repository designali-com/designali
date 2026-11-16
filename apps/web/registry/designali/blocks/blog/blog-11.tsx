import {
  Quote,
} from "@designali/icons"

type Card =
  | { kind: "post"; tag: string; title: string; excerpt: string; date: string; art?: string }
  | { kind: "quote"; text: string; source: string }
  | { kind: "note"; title: string; date: string }

const cards: Card[] = [
  {
    kind: "post",
    tag: "CGI & 3D",
    title: "Rendering the Designali brand in 3D",
    excerpt: "Lighting, materials, and the twelve renders that survived out of eighty.",
    date: "Nov 12",
    art: "aspect-[4/5] bg-gradient-to-b from-chart-5/60 to-chart-1/20",
  },
  { kind: "note", title: "New Designali templates drop on December 7", date: "Nov 10" },
  {
    kind: "quote",
    text: "Where thoughtful design meets production-ready code. That is the whole job.",
    source: "Ali Imam, founder of Designali",
  },
  {
    kind: "post",
    tag: "Process",
    title: "Drawing the same icon a hundred times",
    excerpt: "A practice log on consistency, optical balance, and when to stop.",
    date: "Nov 6",
    art: "aspect-square bg-gradient-to-tr from-chart-2/50 to-chart-3/20",
  },
  {
    kind: "post",
    tag: "Code",
    title: "Tailwind CSS tokens, tested",
    excerpt: "We themed 460+ blocks in light and dark mode. Results inside.",
    date: "Oct 30",
  },
  {
    kind: "post",
    tag: "Archive",
    title: "A week in the Dalim Visuals archive",
    excerpt: "Notes, sketches, and a very heavy Figma file.",
    date: "Oct 24",
    art: "aspect-[3/4] bg-gradient-to-br from-chart-4/60 to-chart-2/20",
  },
  { kind: "note", title: "New icon packs are in the Designali store", date: "Oct 20" },
  {
    kind: "post",
    tag: "Tools",
    title: "The design tools we actually reach for",
    excerpt: "Nine tools, from Figma and Cursor to a homemade icon builder.",
    date: "Oct 15",
    art: "aspect-video bg-gradient-to-r from-chart-1/50 to-chart-4/20",
  },
]

export default function Blog11() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-xl">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Designali journal</h2>
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
