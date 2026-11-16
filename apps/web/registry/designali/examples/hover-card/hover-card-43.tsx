import {
  Gauge as GaugeIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const endpoints = [
  {
    method: "GET",
    path: "/v1/templates",
    params: ["category", "limit", "cursor"],
    rate: "100 req/min",
  },
  {
    method: "POST",
    path: "/v1/templates",
    params: ["name", "blocks", "framework"],
    rate: "30 req/min",
  },
  {
    method: "DELETE",
    path: "/v1/templates/:id",
    params: ["id"],
    rate: "10 req/min",
  },
]
const tone: Record<string, string> = {
  GET: "text-emerald-600",
  POST: "text-blue-600",
  DELETE: "text-destructive",
}

export default function ApiEndpointHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1 font-mono text-xs">
      {endpoints.map((e) => (
        <HoverCard key={e.method + e.path}>
          <HoverCardTrigger
            href="#"
            className="flex gap-2 px-2 py-1.5 hover:bg-muted"
          >
            <span className={cn("w-12 font-semibold", tone[e.method])}>
              {e.method}
            </span>
            {e.path}
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-56 font-sans">
            <p className="font-mono font-medium">{e.path}</p>
            <p className="mt-2 text-muted-foreground">Parameters</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {e.params.map((p) => (
                <Badge key={p} variant="outline" className="font-mono">
                  {p}
                </Badge>
              ))}
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <GaugeIcon className="size-3.5" />
              {e.rate}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
