import {
  ArrowUpRight,
} from "@designali/icons"

import { IPad } from "@/registry/designali/ui/apple/ipad"

const posts = [
  {
    category: "Design systems",
    title: "How I name design tokens for designali.com",
    excerpt:
      "The semantic token model behind every Designali block: survives rebrands, dark mode and new products.",
    author: "Ali Imam",
    date: "Nov 12, 2026",
    read: "8 min read",
    image: "/images/templates/aliimam-comp.jpg",
  },
  {
    category: "Engineering",
    title: "Shipping 460+ blocks from Figma to Next.js",
    excerpt:
      "What I learned turning one Figma file into a React, TypeScript and Tailwind CSS registry.",
    author: "Ali Imam",
    date: "Nov 5, 2026",
    read: "11 min read",
    image: "/img/dashboard-1-light.jpg",
  },
  {
    category: "Process",
    title: "Design se code tak: the Designali workflow",
    excerpt:
      "How a brief becomes a brand identity, a UI design and a production-ready website.",
    author: "Ali Imam",
    date: "Oct 29, 2026",
    read: "6 min read",
    image: "/images/templates/design-agency.jpg",
  },
]

export default function Blog01() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Journal
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Latest from the Designali studio
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            All articles
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group flex flex-col bg-background">
              <div className="relative flex aspect-[4/3] items-end justify-center overflow-hidden bg-muted pt-8">
                <IPad
                  size="sm"
                  orientation="landscape"
                  color="space-grey"
                  className="max-w-[90%] translate-y-[12%] transition-transform duration-300 group-hover:translate-y-[8%]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover object-top"
                  />
                </IPad>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <h3 className="mt-3 text-lg leading-snug font-medium group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>
                    {post.date} · {post.read}
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
