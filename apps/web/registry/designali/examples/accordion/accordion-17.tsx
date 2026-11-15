import { CheckIcon, ChevronDownIcon } from "lucide-react"

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
    features: ["3 projects", "1 GB storage", "Community support"],
  },
  {
    value: "team",
    name: "Team",
    price: 24,
    popular: true,
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Shared workspaces",
      "Priority support",
    ],
  },
  {
    value: "scale",
    name: "Scale",
    price: 79,
    features: [
      "Everything in Team",
      "SAML single sign-on",
      "Audit log",
      "99.9% uptime SLA",
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
