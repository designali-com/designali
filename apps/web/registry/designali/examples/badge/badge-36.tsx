import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const envs = [
  {
    name: "Production",
    url: "app.quillstack.io",
    className: "bg-red-600 text-white",
  },
  {
    name: "Staging",
    url: "staging.quillstack.io",
    className: "bg-amber-400 text-amber-950",
  },
  {
    name: "Preview",
    url: "pr-812.quillstack.dev",
    className:
      "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
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
          <span className="truncate font-mono text-xs text-muted-foreground">
            {env.url}
          </span>
        </div>
      ))}
    </div>
  )
}
