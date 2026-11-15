import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const questions = [
  {
    value: "trial",
    q: "Do I need a card to start the trial?",
    a: "No. The 14 day trial starts without any payment details.",
  },
  {
    value: "switch",
    q: "Can I switch plans later?",
    a: "Upgrade or downgrade any time. We prorate the difference on your next invoice.",
  },
  {
    value: "discount",
    q: "Do you offer nonprofit pricing?",
    a: "Registered nonprofits get 50% off any paid plan. Contact us with your registration number.",
  },
]

export default function AccordionSeparatedCards() {
  return (
    <Accordion defaultValue={["switch"]} className="w-full max-w-md gap-2">
      {questions.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border px-4 not-last:border-b data-open:bg-muted/50"
        >
          <AccordionTrigger className="py-3 text-sm hover:no-underline">
            {item.q}
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-3 text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
