import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const faqs = [
  {
    value: "refund",
    question: "Can I get a refund?",
    answer:
      "Yes. If you cancel within 14 days of purchase we refund the full amount, no questions asked.",
  },
  {
    value: "seats",
    question: "How are seats counted?",
    answer:
      "Every member with edit access uses a seat. Viewers and guests are always free.",
  },
  {
    value: "export",
    question: "Can I export my data?",
    answer:
      "You can export every project as JSON or CSV from Settings at any time, even after cancelling.",
  },
]

export default function AccordionBasicFaq() {
  return (
    <Accordion defaultValue={["refund"]} className="w-full max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>
            {faq.question}
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
