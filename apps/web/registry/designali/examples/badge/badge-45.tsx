import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

export default function ArticleMetaBadges() {
  return (
    <article className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex flex-wrap items-center gap-1">
        <Badge variant="link" className="px-0" render={<a href="#" />}>
          Designali blog
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
      <h3 className="text-base font-semibold">How I ship Designali blocks from Figma to code</h3>
      <p className="text-sm text-muted-foreground">
        Design tokens, Tailwind CSS, and a few tricks for turning Figma
        frames into production-ready Next.js components.
      </p>
    </article>
  )
}
