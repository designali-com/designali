import { Clock } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const posts = [
  {
    title: "A practical guide to fluid type scales",
    excerpt: "Clamp-based sizing that stays readable from 320px phones to 4K monitors.",
    tag: "Guide",
    read: 9,
    author: "Tomás Silva",
    span: "md:col-span-2 md:row-span-2",
    tone: "bg-primary text-primary-foreground",
  },
  {
    title: "Our 2026 icon set, redrawn on a 20px grid",
    excerpt: "Four hundred glyphs, two stroke weights, one optical baseline.",
    tag: "Release",
    read: 4,
    author: "Hana Kim",
    span: "",
    tone: "bg-muted",
  },
  {
    title: "Interview: running design ops at a 40-person startup",
    excerpt: "Process that scales down as well as it scales up.",
    tag: "Interview",
    read: 14,
    author: "Owen Clarke",
    span: "",
    tone: "bg-card",
  },
  {
    title: "Measuring design debt like engineering debt",
    excerpt: "A scoring rubric your roadmap can actually use.",
    tag: "Opinion",
    read: 7,
    author: "Amara Diallo",
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
            Hand-picked articles from our editors, published every Thursday.
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
