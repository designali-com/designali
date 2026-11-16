import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const faqs = [
  {
    value: "refund",
    question: "Can I get a refund on a Designali template?",
    answer:
      "Yes. If a template or block pack isn’t right for you, email support@designali.com within 14 days for a full refund.",
  },
  {
    value: "seats",
    question: "Can I use Designali blocks in client projects?",
    answer:
      "Yes. Every license covers personal and client work — just don’t resell the blocks as-is.",
  },
  {
    value: "export",
    question: "Can I export designs to Figma?",
    answer:
      "Every template ships with production-ready Next.js code, and most include a matching Figma file.",
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
