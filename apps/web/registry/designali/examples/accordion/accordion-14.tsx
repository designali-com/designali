import {
  ChevronDown as ChevronDownIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const chapters = [
  {
    value: "guides",
    title: "Designali docs",
    sections: [
      {
        value: "routing",
        title: "Routing",
        body: "Every Designali template uses the Next.js app router — folders map to URLs.",
      },
      {
        value: "data",
        title: "Theming",
        body: "Change the primary token once and every block picks up your brand colour.",
      },
    ],
  },
  {
    value: "reference",
    title: "Components",
    sections: [
      {
        value: "config",
        title: "Icons",
        body: "Import any icon from @designali/icons — over 4000 to choose from.",
      },
      {
        value: "cli",
        title: "Logos",
        body: "Brand logos from @designali/logos work as React components with a size prop.",
      },
    ],
  },
]

export default function AccordionNestedDocs() {
  return (
    <Accordion
      defaultValue={["guides"]}
      className="w-full max-w-md border px-3"
    >
      {chapters.map((chapter) => (
        <AccordionItem key={chapter.value} value={chapter.value}>
          <AccordionTrigger className="text-sm">
            {chapter.title}
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <Accordion
              defaultValue={chapter.sections
                .slice(0, 1)
                .map((section) => section.value)}
              className="border-s ps-3"
            >
              {chapter.sections.map((section) => (
                <AccordionItem key={section.value} value={section.value}>
                  <AccordionTrigger className="py-2 font-normal">
                    {section.title}
                    <PlusIcon
                      data-slot="accordion-trigger-icon"
                      className="transition-transform group-aria-expanded/accordion-trigger:rotate-45"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {section.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
