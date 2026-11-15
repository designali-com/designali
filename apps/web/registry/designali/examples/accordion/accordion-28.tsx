import { MinusIcon, PlusIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const items = [
  {
    value: "where",
    q: "Where do you ship?",
    a: "We ship to 38 countries across Europe, North America and Oceania.",
  },
  {
    value: "duties",
    q: "Are duties included?",
    a: "Yes, all prices include duties and taxes at checkout, so there are no surprise fees.",
  },
  {
    value: "track",
    q: "How do I track my parcel?",
    a: "A tracking link is emailed as soon as your order leaves the warehouse.",
  },
]

export default function AccordionPlusMinusIcon() {
  return (
    <Accordion defaultValue={["duties"]} className="w-full max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="items-center py-4 text-sm hover:no-underline">
            {item.q}
            <span className="ms-auto flex size-6 shrink-0 items-center justify-center border">
              <PlusIcon className="size-3.5 group-aria-expanded/accordion-trigger:hidden" />
              <MinusIcon className="hidden size-3.5 group-aria-expanded/accordion-trigger:block" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pe-10 pb-4 text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
