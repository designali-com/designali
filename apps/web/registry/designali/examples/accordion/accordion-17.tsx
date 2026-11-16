import {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const plans = [
  {
    value: "starter",
    name: "Starter",
    price: 0,
    features: ["Free blocks", "@designali/icons", "Community support"],
  },
  {
    value: "team",
    name: "Team",
    price: 24,
    popular: true,
    features: [
      "All 460+ blocks",
      "240+ landing pages",
      "Premium templates",
      "Priority support",
    ],
  },
  {
    value: "scale",
    name: "Scale",
    price: 79,
    features: [
      "Everything in Team",
      "Figma source files",
      "Client project license",
      "Direct access to Ali",
    ],
  },
]

export default function AccordionPricingPlans() {
  return (
    <Accordion defaultValue={["team"]} className="w-full max-w-sm space-y-2">
      {plans.map((plan) => (
        <AccordionItem
          key={plan.value}
          value={plan.value}
          className="border px-3 not-last:border-b data-open:border-foreground"
        >
          <AccordionTrigger className="items-center py-3">
            <span className="flex items-center gap-2 text-sm">
              {plan.name}
              {plan.popular && <Badge>Popular</Badge>}
            </span>
            <span className="ms-auto me-2">
              <span className="text-sm font-semibold">${plan.price}</span>
              <span className="font-normal text-muted-foreground">/mo</span>
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <ul className="space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="size-3.5 text-muted-foreground" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              size="sm"
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              Choose {plan.name}
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
