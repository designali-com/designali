import { CalendarIcon, ClockIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

export default function ArticleMetaBadges() {
  return (
    <article className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex flex-wrap items-center gap-1">
        <Badge variant="link" className="px-0" render={<a href="#" />}>
          Engineering
        </Badge>
        <span className="text-muted-foreground">·</span>
        <Badge variant="ghost">
          <ClockIcon data-icon="inline-start" />7 min read
        </Badge>
        <Badge variant="ghost">
          <CalendarIcon data-icon="inline-start" />
          Feb 21
        </Badge>
      </div>
      <h3 className="text-base font-semibold">How we cut cold starts by 60%</h3>
      <p className="text-sm text-muted-foreground">
        Lazy module loading, smarter bundling, and a few surprises from
        profiling production traffic.
      </p>
    </article>
  )
}
