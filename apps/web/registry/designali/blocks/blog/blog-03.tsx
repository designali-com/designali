"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const categories = ["All", "Design", "Engineering", "Company", "Guides"]

const posts = [
  { title: "Introducing variable themes for every block", category: "Company", date: "Nov 13, 2026", read: 4 },
  { title: "Building accessible comboboxes without a framework", category: "Engineering", date: "Nov 9, 2026", read: 12 },
  { title: "Grids that bend: layout for editorial products", category: "Design", date: "Nov 6, 2026", read: 7 },
  { title: "How to migrate a design system without a freeze", category: "Guides", date: "Oct 31, 2026", read: 9 },
  { title: "We are opening a studio in Lisbon", category: "Company", date: "Oct 24, 2026", read: 3 },
  { title: "Color contrast is a product decision", category: "Design", date: "Oct 18, 2026", read: 6 },
  { title: "Server components for marketing sites, one year in", category: "Engineering", date: "Oct 11, 2026", read: 10 },
  { title: "Writing a component brief your engineers will read", category: "Guides", date: "Oct 4, 2026", read: 5 },
]

export default function Blog03() {
  const [active, setActive] = useState("All")
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">Writing</h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Product updates, long-form essays, and practical guides from the people
          building the platform.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "border px-3 py-1.5 text-xs transition-colors",
                active === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <ul>
          {visible.map((post) => (
            <li key={post.title} className="border-b border-border">
              <a
                href="#"
                className="group grid grid-cols-1 gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-lg font-medium transition-transform group-hover:translate-x-1">
                  {post.title}
                </span>
                <span className="flex items-center gap-3 text-xs text-muted-foreground">
                  {post.category} · {post.read} min
                  <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
