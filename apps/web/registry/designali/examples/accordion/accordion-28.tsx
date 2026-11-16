import {
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const items = [
  {
    value: "where",
    q: "How do I receive my template?",
    a: "Downloads are instant — your template is in your designali.com account right after checkout.",
  },
  {
    value: "duties",
    q: "Are taxes included?",
    a: "Yes, prices on designali.com/pricing include taxes at checkout, so there are no surprise fees.",
  },
  {
    value: "track",
    q: "How do I get updates?",
    a: "We email you whenever a template you own gets a new version.",
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
