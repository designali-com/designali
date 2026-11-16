import {
  ChevronDown as ChevronDownIcon,
  Headphones as HeadphonesIcon,
  RotateCcw as RotateCcwIcon,
  ShieldCheck as ShieldCheckIcon,
  Truck as TruckIcon,
} from "@designali/icons"

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
    title: "Delivery",
    body: "Templates and blocks are available to download instantly after checkout on designali.com.",
  },
  {
    value: "returns",
    icon: RotateCcwIcon,
    title: "Returns",
    body: "Not the right fit? Email support@designali.com within 14 days for a full refund.",
  },
  {
    value: "warranty",
    icon: ShieldCheckIcon,
    title: "Updates",
    body: "Every template gets free updates as Next.js, React and Tailwind CSS evolve.",
  },
  {
    value: "support",
    icon: HeadphonesIcon,
    title: "Support",
    body: "Questions go straight to the Designali studio at hello@designali.com.",
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
