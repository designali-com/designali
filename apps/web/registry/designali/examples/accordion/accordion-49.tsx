import {
  ChevronDown as ChevronDownIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const metrics = [
  {
    value: "revenue",
    label: "Revenue",
    total: "$48,210",
    delta: "+12.4%",
    breakdown: [
      { name: "Templates", pct: 72 },
      { name: "Blocks", pct: 20 },
      { name: "Studio services", pct: 8 },
    ],
  },
  {
    value: "signups",
    label: "New signups",
    total: "1,382",
    delta: "+4.1%",
    breakdown: [
      { name: "Organic", pct: 54 },
      { name: "Referral", pct: 31 },
      { name: "Paid", pct: 15 },
    ],
  },
]

export default function AccordionInDashboardCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>designali.com this month</CardTitle>
        <CardDescription>Nov 1 to Nov 15</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["revenue"]}>
          {metrics.map((metric) => (
            <AccordionItem key={metric.value} value={metric.value}>
              <AccordionTrigger className="items-center hover:no-underline">
                <span className="flex flex-col">
                  <span className="font-normal text-muted-foreground">
                    {metric.label}
                  </span>
                  <span className="text-lg font-semibold">{metric.total}</span>
                </span>
                <Badge variant="secondary" className="ms-auto me-2">
                  <TrendingUpIcon />
                  {metric.delta}
                </Badge>
                <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                {metric.breakdown.map((row) => (
                  <div key={row.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{row.name}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted">
                      <div
                        className="h-full bg-foreground"
                        style={{ width: row.pct + "%" }}
                      />
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
