import {
  ArrowDown as ArrowDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const faqs = [
  {
    value: "1",
    q: "What makes Designali different?",
    a: "Designali is design se code tak — one studio that designs your brand and ships production-ready Next.js code.",
  },
  {
    value: "2",
    q: "Do you use AI in your workflow?",
    a: "Yes, AI-assisted workflows speed things up — but every design and line of code is reviewed by Ali.",
  },
  {
    value: "3",
    q: "How long does setup take?",
    a: "Most projects start with a short call and a Figma direction within the first week.",
  },
]

export default function AccordionLandingFaqLarge() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Questions, answered
      </h2>
      <Accordion defaultValue={["1"]} className="border-t">
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} className="border-b">
            <AccordionTrigger className="items-center gap-4 py-5 text-base hover:no-underline">
              <span className="font-sans text-xs text-muted-foreground">
                0{faq.value}
              </span>
              <span className="flex-1">{faq.q}</span>
              <ArrowDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="ps-9 pe-8 pb-5 text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
