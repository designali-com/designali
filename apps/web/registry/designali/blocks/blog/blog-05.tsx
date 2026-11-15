import { Mail } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const issues = [
  {
    number: 112,
    title: "Tokens, themes, and the myth of the perfect palette",
    summary: "Three teams share how they handle brand color across five products.",
    date: "Nov 14",
  },
  {
    number: 111,
    title: "The case for boring navigation",
    summary: "Why we removed our mega menu and conversion went up 9%.",
    date: "Nov 7",
  },
  {
    number: 110,
    title: "Prototyping with real data from day one",
    summary: "Fake content hides real problems. A workflow for testing with production samples.",
    date: "Oct 31",
  },
]

export default function Blog05() {
  return (
    <section className="w-full border-y border-border bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div className="md:sticky md:top-24 md:self-start">
          <span className="flex size-12 items-center justify-center border border-border bg-background">
            <Mail className="size-5" />
          </span>
          <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-5xl">
            The Friday Margin
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            One essay on interface design every week. Read by 32,000 designers and
            engineers. No tracking pixels, unsubscribe in one click.
          </p>
          <form className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className="h-10 bg-background"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        <div className="divide-y divide-border border-y border-border bg-background">
          {issues.map((issue) => (
            <a key={issue.number} href="#" className="group block p-6 transition-colors hover:bg-muted/60 md:p-8">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">Issue #{issue.number}</span>
                <span>{issue.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-medium">{issue.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {issue.summary}
              </p>
              <span className="mt-4 inline-block text-xs underline-offset-4 group-hover:underline">
                Read issue
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
