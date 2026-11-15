import { HashIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const topics = [
  "react",
  "performance",
  "server-components",
  "caching",
  "web-vitals",
]

export default function TopicLinkBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Related topics
      </p>
      <div className="flex flex-wrap gap-1.5">
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="outline"
            render={<a href={"#" + topic} />}
          >
            <HashIcon data-icon="inline-start" />
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  )
}
