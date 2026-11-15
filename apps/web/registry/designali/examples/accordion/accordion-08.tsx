import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const sections = [
  {
    value: "overview",
    title: "Overview",
    body: "Quarterly roadmap for the Atlas mobile app, covering offline sync and the redesigned inbox.",
  },
  {
    value: "goals",
    title: "Goals",
    body: "Cut cold-start time to under 1.5s and lift weekly retention from 41% to 48%.",
  },
  {
    value: "risks",
    title: "Risks",
    body: "The sync engine rewrite depends on two engineers who are also on call this quarter.",
  },
  {
    value: "owners",
    title: "Owners",
    body: "Product: Lena Ortiz. Engineering: Marcus Hale. Design: Ivy Tran.",
  },
]

export default function AccordionMultipleOpen() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-xs text-muted-foreground">
        Open as many sections as you like.
      </p>
      <Accordion
        multiple
        defaultValue={["overview", "goals"]}
        className="border px-3"
      >
        {sections.map((section) => (
          <AccordionItem key={section.value} value={section.value}>
            <AccordionTrigger>
              {section.title}
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {section.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
