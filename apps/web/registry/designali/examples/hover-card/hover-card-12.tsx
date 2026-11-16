import {
  CircleCheck as CircleCheckIcon,
  CircleX as CircleXIcon,
  GitPullRequest as GitPullRequestIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Separator } from "@workspace/ui/components/separator"

const checks = [
  { name: "Build", ok: true },
  { name: "Unit tests", ok: true },
  { name: "Lint", ok: false },
  { name: "Preview deploy", ok: true },
]

export default function PullRequestChecksHoverCard() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-3 text-sm">
      <GitPullRequestIcon className="size-4 text-primary" />
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="flex-1 truncate font-medium hover:underline"
        >
          Add pricing blocks to Designali registry
        </HoverCardTrigger>
        <HoverCardContent align="start" className="flex w-64 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">#1093 · 3 of 4 checks passed</span>
          </div>
          <ul className="flex flex-col gap-1">
            {checks.map((check) => (
              <li key={check.name} className="flex items-center gap-2">
                {check.ok ? (
                  <CircleCheckIcon className="size-3.5 text-primary" />
                ) : (
                  <CircleXIcon className="size-3.5 text-destructive" />
                )}
                {check.name}
              </li>
            ))}
          </ul>
          <Separator />
          <div className="flex gap-3 font-sans">
            <span className="text-primary">+412</span>
            <span className="text-destructive">−87</span>
            <span className="text-muted-foreground">12 files</span>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Badge variant="outline">Review</Badge>
    </div>
  )
}
