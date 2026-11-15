import { ArrowDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const faqs = [
  {
    value: "1",
    q: "What makes Tideline different?",
    a: "Tideline turns customer calls into searchable insight in minutes, without manual tagging.",
  },
  {
    value: "2",
    q: "Is my data used to train models?",
    a: "Never. Your recordings and transcripts stay in your workspace and are deleted on request.",
  },
  {
    value: "3",
    q: "How long does setup take?",
    a: "Most teams connect their calendar and record the first call within ten minutes.",
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
              <span className="font-mono text-xs text-muted-foreground">
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
