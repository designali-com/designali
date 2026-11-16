import { Play } from "@designali/icons"

const videos = [
  {
    title: "Installing your first Designali block",
    duration: "3:24",
    level: "Beginner",
    image: "/images/templates/portfolio-simple.jpg",
  },
  {
    title: "Designing with tokens",
    duration: "8:10",
    level: "Intermediate",
    image: "/images/templates/design-agency.jpg",
  },
  {
    title: "Theming for dark mode",
    duration: "6:45",
    level: "Intermediate",
    image: "/img/dashboard-1-dark.jpg",
  },
  {
    title: "Using @designali/icons and logos",
    duration: "12:02",
    level: "Advanced",
    image: "/images/templates/dalim-icons-old.jpg",
  },
  {
    title: "Accessible motion patterns",
    duration: "9:31",
    level: "Advanced",
    image: "/images/templates/ai.jpg",
  },
  {
    title: "From Figma to Next.js",
    duration: "5:18",
    level: "Beginner",
    image: "/images/templates/vercel.jpg",
  },
]

export default function Media04() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Designali video tutorials
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Six lessons, under an hour in total.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4"
          >
            View all lessons
          </a>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <a key={video.title} href="#" className="group">
              <div className="relative aspect-video overflow-hidden border border-border">
                <img
                  src={video.image}
                  alt={video.title}
                  className="absolute inset-0 size-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex size-12 items-center justify-center rounded-full bg-background">
                    <Play className="size-4 fill-current" />
                  </span>
                </span>
                <span className="absolute right-2 bottom-2 bg-background px-1.5 py-0.5 text-xs tabular-nums">
                  {video.duration}
                </span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Lesson {i + 1} &middot; {video.level}
              </p>
              <p className="mt-1 font-medium group-hover:underline">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
