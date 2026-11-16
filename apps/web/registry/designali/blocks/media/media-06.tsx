import {
  Headphones,
  Mic,
  Radio,
} from "@designali/icons"

const episodes = [
  {
    number: "48",
    title: "The case for boring interfaces",
    guest: "Marcus",
    length: "52 min",
  },
  {
    number: "47",
    title: "Hiring your first design engineer",
    guest: "Priya",
    length: "44 min",
  },
  {
    number: "46",
    title: "Brand systems at scale",
    guest: "Sofia",
    length: "61 min",
  },
  {
    number: "45",
    title: "What we learned building 460+ blocks",
    guest: "Jonas",
    length: "38 min",
  },
]

const platforms = [
  { label: "Apple Podcasts", icon: Headphones },
  { label: "Spotify", icon: Radio },
  { label: "RSS feed", icon: Mic },
]

export default function Media06() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Designali Podcast
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A weekly conversation hosted by Ali Imam on design, code and the
              space between — design se code tak.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {platforms.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-2 border border-border px-3 py-2 text-xs hover:bg-muted"
              >
                <Icon className="size-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>
        <ul className="mt-12 border-t border-border">
          {episodes.map((episode) => (
            <li key={episode.number} className="border-b border-border">
              <a
                href="#"
                className="grid grid-cols-[3rem_1fr] gap-4 py-6 hover:bg-muted/50 md:grid-cols-[4rem_1fr_10rem_5rem] md:items-center"
              >
                <span className="text-2xl font-semibold text-muted-foreground tabular-nums">
                  {episode.number}
                </span>
                <span className="font-medium">{episode.title}</span>
                <span className="col-start-2 text-sm text-muted-foreground md:col-start-auto">
                  with {episode.guest}
                </span>
                <span className="col-start-2 text-sm text-muted-foreground tabular-nums md:col-start-auto md:text-right">
                  {episode.length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
