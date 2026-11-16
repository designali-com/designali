import {
  CircleQuestionMark as CircleHelpIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const faqs = [
  [
    "Can I change my plan later?",
    "Yes, upgrade or downgrade any time from billing settings. Changes are prorated.",
  ],
  [
    "Do you offer refunds?",
    "We refund annual plans within 30 days of purchase, no questions asked.",
  ],
  [
    "Is my data encrypted?",
    "All data is encrypted in transit with TLS 1.3 and at rest with AES-256.",
  ],
  [
    "How do I export my data?",
    "Go to Settings, then Data, and choose CSV or JSON export.",
  ],
  [
    "Can I invite guests?",
    "Guests can view and comment on shared projects without a paid seat.",
  ],
  [
    "What happens when my trial ends?",
    "Your workspace switches to the free plan; nothing is deleted.",
  ],
]

export default function FaqAccordionScroll() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <CircleHelpIcon className="size-4" />
        <span className="text-sm font-medium">Frequently asked</span>
      </div>
      <ScrollArea className="h-64">
        <Accordion className="px-4">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-xs">{q}</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  )
}
