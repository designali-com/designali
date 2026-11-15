import { Play, Quote } from "lucide-react"

const reels = [
  { name: "Dana Whitfield", role: "Founder, Pebble & Pine", quote: "We replaced three tools in a week.", length: "0:42", gradient: "linear-gradient(180deg, var(--chart-1), var(--chart-3))" },
  { name: "Kwame Asante", role: "Ops Lead, Northgate", quote: "Our onboarding time dropped by half.", length: "0:58", gradient: "linear-gradient(200deg, var(--chart-2), var(--chart-5))" },
  { name: "Lucia Romero", role: "CTO, Fieldnote", quote: "The API is genuinely a pleasure.", length: "1:04", gradient: "linear-gradient(160deg, var(--chart-4), var(--chart-1))" },
  { name: "Sam Okafor", role: "Designer, Halfmoon", quote: "It finally feels like one product.", length: "0:37", gradient: "linear-gradient(220deg, var(--chart-3), var(--chart-2))" },
  { name: "Mei Tanaka", role: "PM, Orbitline", quote: "Support replies in minutes, not days.", length: "0:51", gradient: "linear-gradient(140deg, var(--chart-5), var(--chart-4))" },
]

export default function Media12() {
  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Customers, in their own words
          </h2>
          <p className="text-muted-foreground md:text-right">
            Unscripted, one-minute clips recorded on phones by the teams who use
            Fieldwork every day.
          </p>
        </div>
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <a
              key={reel.name}
              href="#"
              className="group relative aspect-[9/16] w-[62%] shrink-0 snap-start overflow-hidden border border-border sm:w-[38%] md:w-[28%] lg:w-[calc((100%-4rem)/5)]"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: reel.gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
              <span className="absolute top-3 right-3 bg-black/50 px-1.5 py-0.5 font-mono text-[11px] text-white backdrop-blur">
                {reel.length}
              </span>
              <span className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                <Play className="size-5 translate-x-0.5 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <Quote className="size-4 text-white/60" />
                <p className="mt-2 text-sm leading-snug font-medium">{reel.quote}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black">
                    {reel.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium">{reel.name}</p>
                    <p className="truncate text-[11px] text-white/70">{reel.role}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
