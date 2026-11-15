import { TriangleAlertIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const regions = [
  {
    code: "us-east",
    name: "US East",
    status: "operational",
    latency: "38 ms",
    uptime: "99.99%",
  },
  {
    code: "eu-west",
    name: "EU West",
    status: "degraded",
    latency: "212 ms",
    uptime: "99.71%",
  },
  {
    code: "ap-south",
    name: "Asia Pacific",
    status: "operational",
    latency: "64 ms",
    uptime: "99.98%",
  },
]

export default function RegionStatusHoverCard() {
  return (
    <div className="flex w-full max-w-sm flex-wrap justify-center gap-2">
      {regions.map((r) => (
        <HoverCard key={r.code}>
          <HoverCardTrigger
            render={
              <div className="flex cursor-default items-center gap-2 border px-3 py-1.5 text-sm" />
            }
          >
            <span
              className={cn(
                "size-2 rounded-full",
                r.status === "operational" ? "bg-emerald-500" : "bg-amber-500"
              )}
            />
            {r.name}
          </HoverCardTrigger>
          <HoverCardContent className="w-56">
            <div className="flex items-center justify-between">
              <span className="font-mono font-medium">{r.code}</span>
              <Badge
                variant={
                  r.status === "operational" ? "secondary" : "destructive"
                }
                className="capitalize"
              >
                {r.status}
              </Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <p className="text-muted-foreground">p95 latency</p>
                <p className="font-medium">{r.latency}</p>
              </div>
              <div>
                <p className="text-muted-foreground">30-day uptime</p>
                <p className="font-medium">{r.uptime}</p>
              </div>
            </div>
            {r.status !== "operational" && (
              <p className="mt-2 flex items-center gap-1.5 text-amber-600">
                <TriangleAlertIcon className="size-3.5" />
                Elevated error rates on uploads
              </p>
            )}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
