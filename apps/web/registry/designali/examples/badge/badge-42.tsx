import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const endpoints = [
  {
    method: "GET",
    path: "/v1/templates",
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    method: "POST",
    path: "/v1/templates",
    className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    method: "PATCH",
    path: "/v1/templates/:id",
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  {
    method: "DELETE",
    path: "/v1/templates/:id",
    className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
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
              "w-14 font-mono text-[10px] font-bold",
              endpoint.className
            )}
          >
            {endpoint.method}
          </Badge>
          <span className="truncate font-mono text-xs">{endpoint.path}</span>
        </a>
      ))}
    </div>
  )
}
