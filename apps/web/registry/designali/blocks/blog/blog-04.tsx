import {
  Clock,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const posts = [
  {
    title: "A practical guide to fluid type in Designali templates",
    excerpt: "Clamp-based sizing that stays readable from 320px phones to 4K monitors.",
    tag: "Guide",
    read: 9,
    author: "Ali Imam",
    span: "md:col-span-2 md:row-span-2",
    tone: "bg-primary text-primary-foreground",
  },
  {
    title: "@designali/icons, redrawn on a 24px grid",
    excerpt: "Four thousand icons, lucide-compatible names, one optical baseline.",
    tag: "Release",
    read: 4,
    author: "Ali Imam",
    span: "",
    tone: "bg-muted",
  },
  {
    title: "Interview: Ali Imam on running a one-person design studio",
    excerpt: "How Designali ships brand, UI and code without a big team.",
    tag: "Interview",
    read: 14,
    author: "Designali Studio",
    span: "",
    tone: "bg-card",
  },
  {
    title: "Measuring design debt in 2,300+ UI examples",
    excerpt: "A scoring rubric your roadmap can actually use.",
    tag: "Opinion",
    read: 7,
    author: "Ali Imam",
    span: "md:col-span-2",
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

        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className={`group flex flex-col justify-between border border-border p-6 transition-colors hover:border-foreground md:p-8 ${post.span} ${post.tone}`}
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
          ))}
        </div>
      </div>
    </section>
  )
}
