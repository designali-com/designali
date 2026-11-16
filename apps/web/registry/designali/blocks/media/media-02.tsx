import {
  Play,
} from "@designali/icons"

const chapters = [
  { time: "00:00", title: "Why design systems fail" },
  { time: "04:12", title: "Tokens before components" },
  { time: "11:38", title: "Design se code tak" },
  { time: "18:05", title: "Q&A with Ali Imam" },
]

export default function Media02() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[2fr_1fr]">
        <div
          className="group relative aspect-video border border-border"
          style={{
            background:
              "linear-gradient(135deg, var(--chart-1), var(--chart-3) 60%, var(--chart-5))",
          }}
        >
          <button
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:scale-105"
          >
            <Play className="size-7 translate-x-0.5 fill-current" />
          </button>
          <span className="absolute bottom-4 left-4 bg-background px-2 py-1 text-xs tabular-nums">
            24:16
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali talk
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Building design systems that ship as production-ready code
          </h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {chapters.map((chapter) => (
              <li key={chapter.time}>
                <a href="#" className="flex gap-4 py-3 text-sm hover:bg-muted">
                  <span className="w-12 text-muted-foreground tabular-nums">
                    {chapter.time}
                  </span>
                  <span>{chapter.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
