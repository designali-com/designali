import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const envs = [
  {
    name: "Production",
    url: "www.designali.com",
    className: "bg-destructive text-white",
  },
  {
    name: "Staging",
    url: "staging.designali.com",
    className: "bg-primary text-chart-5",
  },
  {
    name: "Preview",
    url: "designali-pr-812.vercel.app",
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    name: "Local",
    url: "localhost:3000",
    className: "bg-muted text-muted-foreground",
  },
]

export default function EnvironmentBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {envs.map((env) => (
        <div key={env.name} className="flex items-center gap-3 border p-2.5">
          <Badge className={cn("w-20 font-semibold uppercase", env.className)}>
            {env.name}
          </Badge>
          <span className="truncate font-sans text-xs text-muted-foreground">
            {env.url}
          </span>
        </div>
      ))}
    </div>
  )
}
