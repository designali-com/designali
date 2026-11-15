import {
  ChevronDownIcon,
  HeadphonesIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const policies = [
  {
    value: "shipping",
    icon: TruckIcon,
    title: "Shipping",
    body: "Orders ship within 2 business days. Standard delivery takes 3 to 5 days.",
  },
  {
    value: "returns",
    icon: RotateCcwIcon,
    title: "Returns",
    body: "Return unworn items within 30 days for a full refund. Return labels are free.",
  },
  {
    value: "warranty",
    icon: ShieldCheckIcon,
    title: "Warranty",
    body: "Every product is covered by a 2 year warranty against manufacturing defects.",
  },
  {
    value: "support",
    icon: HeadphonesIcon,
    title: "Support",
    body: "Our team answers within 4 hours, seven days a week.",
  },
]

export default function AccordionWithLeadingIcons() {
  return (
    <Accordion
      defaultValue={["shipping"]}
      className="w-full max-w-md border px-3"
    >
      {policies.map((policy) => (
        <AccordionItem key={policy.value} value={policy.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center bg-muted">
                <policy.icon className="size-3.5" />
              </span>
              {policy.title}
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="ps-9.5 text-muted-foreground">
            {policy.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
