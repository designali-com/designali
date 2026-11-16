import {
  Play,
} from "@designali/icons"

const videos = [
  {
    name: "Marisol",
    role: "Owner, Designali client",
    title: "A new brand identity in four weeks",
    length: "2:14",
    image: "/images/templates/design-agency.jpg",
  },
  {
    name: "Theo",
    role: "Founder, Designali client",
    title: "From Figma to a live Next.js site",
    length: "3:02",
    image: "/images/templates/portfolio-simple.jpg",
  },
  {
    name: "Ines",
    role: "Founder, designali.com customer",
    title: "Launching with a Designali template",
    length: "1:48",
    image: "/images/templates/resort.jpg",
  },
]

export default function Testimonials11() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-lg text-3xl font-medium tracking-tight md:text-5xl">
            Designali clients, big stories.
          </h2>
          <a href="https://www.designali.com/work" className="text-sm underline underline-offset-4">
            See all work
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <a key={v.name} href="https://www.designali.com/work" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={v.image}
                  alt={v.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-6 fill-current" />
                </span>
                <span className="absolute right-3 bottom-3 bg-black/60 px-2 py-0.5 text-xs text-white">
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
