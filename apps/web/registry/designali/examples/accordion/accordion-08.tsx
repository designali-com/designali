import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

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
    body: "Quarterly roadmap for designali.com, covering new blocks, the icon library and the redesigned docs.",
  },
  {
    value: "goals",
    title: "Goals",
    body: "Ship 60 new blocks, reach 4000+ icons in @designali/icons and keep every page above 95 on Lighthouse.",
  },
  {
    value: "risks",
    title: "Risks",
    body: "Client work and product work share the same small studio team this quarter.",
  },
  {
    value: "owners",
    title: "Owners",
    body: "Design & code: Ali Imam. Studio: Designali.",
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
