"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const posts = [
  { tag: "Research", title: "What 1,200 support tickets say about onboarding", date: "Nov 13", read: 9, hue: "from-chart-1/50 to-chart-2/20" },
  { tag: "Engineering", title: "Cutting our cold start from 2.1s to 380ms", date: "Nov 8", read: 12, hue: "from-chart-2/50 to-chart-3/20" },
  { tag: "Design", title: "Dense tables that still breathe", date: "Nov 2", read: 6, hue: "from-chart-3/50 to-chart-4/20" },
  { tag: "Culture", title: "Our writing guide, published in full", date: "Oct 27", read: 15, hue: "from-chart-4/50 to-chart-5/20" },
  { tag: "Product", title: "Inside the redesign of recurring invoices", date: "Oct 21", read: 8, hue: "from-chart-5/50 to-chart-1/20" },
  { tag: "Engineering", title: "Postgres row-level security, two years on", date: "Oct 14", read: 11, hue: "from-chart-1/50 to-chart-3/20" },
]

export default function Blog07() {
  const track = useRef<HTMLDivElement>(null)

  function scroll(dir: 1 | -1) {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="w-full overflow-hidden bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Tallyhall blog</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Fresh from the team</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon-lg" aria-label="Previous posts" onClick={() => scroll(-1)}>
              <ArrowLeft />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Next posts" onClick={() => scroll(1)}>
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div
          ref={track}
          className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex w-[80%] shrink-0 snap-start flex-col border bg-card sm:w-[340px]"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${post.hue}`}>
                <span className="absolute top-3 left-3 bg-background/90 px-2 py-0.5 text-xs">{post.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <p className="mt-auto pt-6 text-xs text-muted-foreground">
                  {post.date} · {post.read} min read
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
