import {
  Banknote as BanknoteIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const alerts = [
  {
    title: "Payment received",
    body: "Brand identity client paid INV-3310 ($1,240).",
    time: "2m",
  },
  {
    title: "Payment received",
    body: "Templates customer paid INV-3308 ($980).",
    time: "18m",
  },
  {
    title: "Payment received",
    body: "Web development client paid INV-3301 ($2,115).",
    time: "1h",
  },
]

export default function StackedNotificationGroup() {
  return (
    <Collapsible className="w-full max-w-sm">
      <div className="relative border bg-background p-3 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="flex size-8 items-center justify-center bg-primary/15 text-primary">
            <BanknoteIcon className="size-4" />
          </span>
          <div className="flex-1 text-sm">
            <p className="font-medium">{alerts[0]!.title}</p>
            <p className="text-muted-foreground">{alerts[0]!.body}</p>
          </div>
          <span className="text-xs text-muted-foreground">
            {alerts[0]!.time}
          </span>
        </div>
        <CollapsibleTrigger
          render={
            <Button variant="secondary" size="xs" className="mt-2 ml-11" />
          }
        >
          <span className="group-data-panel-open/button:hidden">
            {alerts.length - 1} more from Billing
          </span>
          <span className="hidden group-data-panel-open/button:inline">
            Show less
          </span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="flex flex-col gap-1 pt-1">
          {alerts.slice(1).map((alert) => (
            <div
              key={alert.body}
              className="flex items-start gap-3 border bg-background p-3 pl-14 text-sm"
            >
              <p className="flex-1 text-muted-foreground">{alert.body}</p>
              <span className="text-xs text-muted-foreground">
                {alert.time}
              </span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
