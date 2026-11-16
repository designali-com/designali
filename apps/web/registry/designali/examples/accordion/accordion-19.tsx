import {
  ChevronDown as ChevronDownIcon,
  Package as PackageIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const orders = [
  {
    value: "48213",
    date: "Nov 9",
    status: "Downloaded",
    total: 132.5,
    items: ["Design Agency template", "Landing page blocks"],
  },
  {
    value: "47990",
    date: "Oct 30",
    status: "Updated",
    total: 58.0,
    items: ["Portfolio Simple template"],
  },
  {
    value: "47512",
    date: "Oct 2",
    status: "Refunded",
    total: 24.0,
    items: ["Designali icon pack"],
  },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Downloaded: "default",
  Updated: "secondary",
  Refunded: "destructive",
}

export default function AccordionOrderHistory() {
  return (
    <Accordion className="w-full max-w-md border px-3">
      {orders.map((order) => (
        <AccordionItem key={order.value} value={order.value}>
          <AccordionTrigger className="items-center">
            <span className="flex flex-col">
              <span className="text-sm">Order #{order.value}</span>
              <span className="font-normal text-muted-foreground">
                Placed {order.date}
              </span>
            </span>
            <Badge
              variant={statusVariant[order.status]}
              className="ms-auto me-2"
            >
              {order.status}
            </Badge>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <ul className="space-y-1 text-muted-foreground">
              {order.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <PackageIcon className="size-3.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t pt-3">
              <span className="font-medium">
                Total ${order.total.toFixed(2)}
              </span>
              <div className="flex gap-1">
                <Button size="xs" variant="outline">
                  Invoice
                </Button>
                <Button size="xs">Buy again</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
