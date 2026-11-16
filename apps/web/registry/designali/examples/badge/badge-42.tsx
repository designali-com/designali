import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const endpoints = [
  {
    method: "GET",
    path: "/v1/templates",
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    method: "POST",
    path: "/v1/templates",
    className: "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    method: "PATCH",
    path: "/v1/templates/:id",
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    method: "DELETE",
    path: "/v1/templates/:id",
    className: "bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive",
  },
]

export default function ApiMethodBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {endpoints.map((endpoint) => (
        <a
          key={endpoint.method}
          href="#"
          className="flex items-center gap-3 px-2 py-1.5 hover:bg-muted"
        >
          <Badge
            className={cn(
              "w-14 font-sans text-[10px] font-bold",
              endpoint.className
            )}
          >
            {endpoint.method}
          </Badge>
          <span className="truncate font-sans text-xs">{endpoint.path}</span>
        </a>
      ))}
    </div>
  )
}
