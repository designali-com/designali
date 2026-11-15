import { Quote } from "lucide-react"

const brands = [
  { name: "northpeak", className: "font-semibold tracking-tight lowercase" },
  { name: "HALVARD", className: "font-mono tracking-[0.3em]" },
  { name: "Orchid&Co", className: "font-serif italic" },
  { name: "ZEPHYRA", className: "font-black tracking-tighter" },
  { name: "lumenstack", className: "font-light tracking-wide" },
  { name: "Brix", className: "font-bold uppercase" },
]

export default function Testimonials19() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by product teams at
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className={`flex h-20 items-center justify-center bg-background text-lg text-muted-foreground ${b.className}`}
            >
              {b.name}
            </div>
          ))}
        </div>
        <figure className="mx-auto mt-16 grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto size-40 shrink-0 md:size-48">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-300" />
            <span className="absolute inset-0 flex items-center justify-center text-5xl font-medium text-white">
              NR
            </span>
            <span className="absolute -right-3 -bottom-3 flex size-12 items-center justify-center bg-foreground text-background">
              <Quote className="size-5" />
            </span>
          </div>
          <div>
            <blockquote className="text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              &ldquo;Halvard runs 30 product squads on it. It is the rare tool
              that scaled from our first team to our fortieth without a
              re-platforming project.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium">Nadia Rossi</span>
              <span className="text-muted-foreground"> &middot; SVP Product, Halvard</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
