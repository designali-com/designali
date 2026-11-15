import { ChevronDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const regions = [
  { name: "North America", value: 48200, share: 52 },
  { name: "Europe", value: 29100, share: 31 },
  { name: "Asia Pacific", value: 15700, share: 17 },
]

export default function KpiRegionBreakdown() {
  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardDescription>Monthly revenue</CardDescription>
        <CardTitle className="text-2xl">$93,000</CardTitle>
        <CardAction>
          <Badge variant="secondary">
            <TrendingUpIcon />
            8.2%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger
            render={<Button variant="ghost" size="xs" className="-ml-2" />}
          >
            By region
            <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="space-y-3 pt-2">
              {regions.map((region) => (
                <div key={region.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{region.name}</span>
                    <span className="text-muted-foreground">
                      ${region.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{ width: region.share + "%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
