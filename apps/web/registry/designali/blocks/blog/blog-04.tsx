import {
  Clock,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"

const posts = [
  {
    title: "A practical guide to fluid type in Designali templates",
    excerpt: "Clamp-based sizing that stays readable from 320px phones to 4K monitors.",
    tag: "Guide",
    read: 9,
    author: "Ali Imam",
    colSpan: 2,
    rowSpan: 2,
    tone: "bg-primary text-primary-foreground",
  },
  {
    title: "@designali/icons, redrawn on a 24px grid",
    excerpt: "Four thousand icons, lucide-compatible names, one optical baseline.",
    tag: "Release",
    read: 4,
    author: "Ali Imam",
    colSpan: 1,
    rowSpan: 1,
    tone: "bg-muted",
  },
  {
    title: "Interview: Ali Imam on running a one-person design studio",
    excerpt: "How Designali ships brand, UI and code without a big team.",
    tag: "Interview",
    read: 14,
    author: "Designali Studio",
    colSpan: 1,
    rowSpan: 1,
    tone: "bg-card",
  },
  {
    title: "Measuring design debt in 2,300+ UI examples",
    excerpt: "A scoring rubric your roadmap can actually use.",
    tag: "Opinion",
    read: 7,
    author: "Ali Imam",
    colSpan: 2,
    rowSpan: 1,
    tone: "bg-card",
  },
]

export default function Blog04() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Read, then build
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Hand-picked articles from the Designali blog, published every Thursday.
          </p>
        </div>

        <BentoGrid
          cols={{ base: 1, md: 4 }}
          gap={4}
          rowHeight="minmax(220px,auto)"
        >
          {posts.map((post) => (
            <BentoGridItem
              key={post.title}
              colSpan={{ base: 1, md: post.colSpan as 1 | 2 }}
              rowSpan={{ base: 1, md: post.rowSpan as 1 | 2 }}
              className={`group border-border p-0 transition-colors hover:border-foreground ${post.tone}`}
            >
            <a
              href="#"
              className="flex h-full flex-col justify-between p-6 md:p-8"
            >
              <Badge variant="outline" className="border-current/30 text-current">
                {post.tag}
              </Badge>
              <div className="mt-10">
                <h3 className="text-xl leading-snug font-medium md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 opacity-70">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs opacity-70">
                  <span>{post.author}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.read} min
                  </span>
                </div>
              </div>
            </a>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
