import {
  Play,
  Quote,
} from "@designali/icons"

const reels = [
  { name: "Dana", role: "Founder, Designali client", quote: "Designali built our brand and site in weeks.", length: "0:42", image: "/img/ask/ask1.jpg" },
  { name: "Kwame", role: "Frontend developer", quote: "The blocks cut our build time in half.", length: "0:58", image: "/img/ask/ask4.jpg" },
  { name: "Lucia", role: "Product designer", quote: "The Figma files match the code exactly.", length: "1:04", image: "/img/ask/ask8.jpg" },
  { name: "Sam", role: "Studio client", quote: "Ali designs and codes. It shows.", length: "0:37", image: "/img/ask/ask11.jpg" },
  { name: "Mei", role: "Designali Pro member", quote: "4000+ icons and every one is consistent.", length: "0:51", image: "/img/ask/ask14.jpg" },
]

export default function Media12() {
  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Designali clients, in their own words
          </h2>
          <p className="text-muted-foreground md:text-right">
            Unscripted, one-minute clips recorded by the people who build with
            Designali every day.
          </p>
        </div>
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <a
              key={reel.name}
              href="#"
              className="group relative aspect-[9/16] w-[62%] shrink-0 snap-start overflow-hidden border border-border sm:w-[38%] md:w-[28%] lg:w-[calc((100%-4rem)/5)]"
            >
              <img src={reel.image} alt={`${reel.name} on Designali`} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
              <span className="absolute top-3 right-3 bg-black/50 px-1.5 py-0.5 font-sans text-[11px] text-white backdrop-blur">
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
