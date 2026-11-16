import {
  BadgeCheck,
  Heart,
  MessageCircle,
  Repeat2,
} from "@designali/icons"

const posts = [
  { name: "Maya Fontaine", handle: "mayabuilds", body: "Shipped my side project's landing page in 40 minutes with @driftkit. The pricing block alone saved me a weekend.", likes: 412, replies: 23, time: "2h", verified: true },
  { name: "Dev Kapoor", handle: "devkapoor", body: "Hot take: the best design systems are the ones you can delete half of. driftkit gets this.", likes: 1290, replies: 88, time: "5h", verified: false },
  { name: "Ruth Adeyemi", handle: "ruthcodes", body: "Copied a hero, changed three words, client said it looked custom. I will not be elaborating.", likes: 3021, replies: 140, time: "1d", verified: true },
  { name: "Pablo Serrano", handle: "pserrano", body: "Dark mode that actually works on every component. Small thing, huge relief.", likes: 288, replies: 12, time: "1d", verified: false },
  { name: "Ingrid Solberg", handle: "ingrid_ui", body: "Their accessibility notes on each block taught me more than most courses I have paid for.", likes: 756, replies: 41, time: "3d", verified: true },
  { name: "Chen Wei", handle: "chenwei_dev", body: "We migrated our marketing site in a sprint. Lighthouse went from 71 to 98.", likes: 534, replies: 29, time: "4d", verified: false },
]

const tones = [
  "bg-primary/20 text-chart-5 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/20 text-chart-5 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/20 text-chart-5 dark:bg-primary/10 dark:text-chart-1",
]

export default function Testimonials14() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-5xl">
          What people are posting
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Unedited, from the timeline.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article key={p.handle} className="border border-border bg-background p-5">
              <header className="flex items-center gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium ${tones[i % tones.length]}`}>
                  {p.name.split(" ").map((s) => s[0]).join("")}
                </span>
                <div className="min-w-0 flex-1 text-sm">
                  <div className="flex items-center gap-1 font-medium">
                    <span className="truncate">{p.name}</span>
                    {p.verified && <BadgeCheck className="size-4 shrink-0 text-primary" />}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    @{p.handle} &middot; {p.time}
                  </div>
                </div>
              </header>
              <p className="mt-4 text-sm leading-6">{p.body}</p>
              <footer className="mt-5 flex gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><MessageCircle className="size-3.5" />{p.replies}</span>
                <span className="flex items-center gap-1.5"><Repeat2 className="size-3.5" />{Math.round(p.likes / 9)}</span>
                <span className="flex items-center gap-1.5"><Heart className="size-3.5" />{p.likes.toLocaleString("en-US")}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
