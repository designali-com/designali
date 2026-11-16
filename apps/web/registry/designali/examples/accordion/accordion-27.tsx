import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const questions = [
  {
    value: "trial",
    q: "Are there free Designali blocks?",
    a: "Yes. Many blocks and all icons are free to copy from designali.com — no card needed.",
  },
  {
    value: "switch",
    q: "Can I switch plans later?",
    a: "Upgrade or downgrade any time from designali.com/pricing. We prorate the difference.",
  },
  {
    value: "discount",
    q: "Can I hire Designali for a custom project?",
    a: "Yes. Ali and the studio take on brand, UI/UX and Next.js projects — email hello@designali.com.",
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
