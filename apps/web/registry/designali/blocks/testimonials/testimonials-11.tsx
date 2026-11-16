import {
  Play,
} from "@designali/icons"

const videos = [
  {
    name: "Marisol Vega",
    role: "Owner, Casa Verde Bakery",
    title: "How we doubled weekday orders",
    length: "2:14",
    tone: "from-amber-300 via-orange-400 to-rose-500",
  },
  {
    name: "Theo Brandt",
    role: "Coach, Summit Running Club",
    title: "Running a 400-member club solo",
    length: "3:02",
    tone: "from-sky-300 via-cyan-400 to-teal-500",
  },
  {
    name: "Ines Carvalho",
    role: "Founder, Linho Studio",
    title: "From Instagram DMs to a real store",
    length: "1:48",
    tone: "from-violet-300 via-fuchsia-400 to-pink-500",
  },
]

export default function Testimonials11() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-lg text-3xl font-medium tracking-tight md:text-5xl">
            Small businesses, big stories.
          </h2>
          <a href="#" className="text-sm underline underline-offset-4">
            Watch all 24 stories
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <a key={v.name} href="#" className="group block">
              <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${v.tone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-6 fill-current" />
                </span>
                <span className="absolute right-3 bottom-3 bg-black/60 px-2 py-0.5 font-mono text-xs text-white">
                  {v.length}
                </span>
                <span className="absolute top-4 left-4 text-5xl font-medium text-white/80">
                  {v.name.split(" ").map((p) => p[0]).join("")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-medium group-hover:underline group-hover:underline-offset-4">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {v.name}, {v.role}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
