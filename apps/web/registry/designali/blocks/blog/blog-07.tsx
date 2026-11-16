"use client"

import { useRef } from "react"
import {
  ArrowLeft,
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const posts = [
  { tag: "Research", title: "What 1,200 support emails say about our templates", date: "Nov 13", read: 9, image: "/img/ask/ask1.jpg" },
  { tag: "Engineering", title: "Cutting designali.com load time from 2.1s to 380ms", date: "Nov 8", read: 12, image: "/img/dashboard-1-light.jpg" },
  { tag: "Design", title: "Dense UI blocks that still breathe", date: "Nov 2", read: 6, image: "/img/ask/ask4.jpg" },
  { tag: "Culture", title: "The Designali writing guide, published in full", date: "Oct 27", read: 15, image: "/images/templates/portfolio-simple.jpg" },
  { tag: "Product", title: "Inside the redesign of the icons page", date: "Oct 21", read: 8, image: "/images/templates/dalim-icons-old.jpg" },
  { tag: "Engineering", title: "Shipping @designali/logos as an npm package", date: "Oct 14", read: 11, image: "/images/templates/vercel.jpg" },
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
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali blog</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Fresh from the studio</h2>
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
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
