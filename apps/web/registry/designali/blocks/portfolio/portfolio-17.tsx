import {
  GitFork,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const repos = [
  {
    name: "@designali/icons",
    description: "4000+ lucide-compatible icons as typed React components.",
    stars: "8.4k",
    forks: "312",
    languages: [
      { name: "TypeScript", share: 72, color: "bg-primary" },
      { name: "SVG", share: 28, color: "bg-primary" },
    ],
  },
  {
    name: "@designali/logos",
    description: "Brand logos and wordmarks as React components.",
    stars: "3.1k",
    forks: "148",
    languages: [
      { name: "TypeScript", share: 91, color: "bg-primary" },
      { name: "CSS", share: 9, color: "bg-primary" },
    ],
  },
  {
    name: "@designali/vectors",
    description: "Abstract shapes and illustrations for Designali blocks.",
    stars: "1.2k",
    forks: "41",
    languages: [
      { name: "TypeScript", share: 100, color: "bg-primary" },
    ],
  },
  {
    name: "designali-blocks",
    description: "460+ production-ready blocks for Next.js and Tailwind CSS.",
    stars: "960",
    forks: "57",
    languages: [
      { name: "TypeScript", share: 80, color: "bg-primary" },
      { name: "MDX", share: 20, color: "bg-primary" },
    ],
  },
]

// Deterministic pseudo-random activity grid (26 weeks x 7 days)
const activity = Array.from({ length: 26 * 7 }, (_, i) => {
  const v = (Math.sin(i * 12.9898) * 43758.5453) % 1
  const n = Math.abs(v)
  return n > 0.85 ? 4 : n > 0.6 ? 3 : n > 0.35 ? 2 : n > 0.15 ? 1 : 0
})

const levels = [
  "bg-muted",
  "bg-primary/20 dark:bg-primary/10",
  "bg-primary dark:bg-chart-3",
  "bg-primary dark:bg-primary",
  "bg-chart-3 dark:bg-chart-1",
]

export default function Portfolio17() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center bg-foreground font-sans text-lg text-background">
              AI
            </span>
            <div>
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Ali Imam</h2>
              <p className="text-sm text-muted-foreground">
                Design engineer. Maintainer of @designali/icons and @designali/logos.
              </p>
            </div>
          </div>
          <Button variant="outline" nativeButton={false} render={<a href="https://21st.dev/@designali-in" />}>
            View on 21st.dev
          </Button>
        </div>

        <div className="mt-10 border border-border p-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>1,284 contributions in the last six months</span>
            <span className="hidden items-center gap-1 sm:flex">
              Less
              {levels.map((l) => (
                <span key={l} className={`size-2.5 ${l}`} />
              ))}
              More
            </span>
          </div>
          <div className="mt-4 overflow-hidden">
            <div className="grid grid-flow-col grid-cols-[repeat(26,minmax(0,1fr))] grid-rows-7 gap-[3px]">
              {activity.map((level, i) => (
                <span key={i} className={`aspect-square w-full ${levels[level]}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href="#"
              className="group flex flex-col border border-border bg-card p-5 transition-colors hover:border-foreground/40"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-sans text-sm font-medium group-hover:underline">{repo.name}</p>
                <span className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="size-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="size-3.5" />
                    {repo.forks}
                  </span>
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{repo.description}</p>
              <div className="mt-5 flex h-1.5 w-full overflow-hidden">
                {repo.languages.map((lang) => (
                  <span key={lang.name} className={lang.color} style={{ width: `${lang.share}%` }} />
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {repo.languages.map((lang) => (
                  <span key={lang.name} className="flex items-center gap-1.5">
                    <span className={`size-2 rounded-full ${lang.color}`} />
                    {lang.name} {lang.share}%
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
