import { ChevronDownIcon, PlusIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const chapters = [
  {
    value: "guides",
    title: "Guides",
    sections: [
      {
        value: "routing",
        title: "Routing",
        body: "Files inside the routes folder map directly to URLs.",
      },
      {
        value: "data",
        title: "Data fetching",
        body: "Load data on the server and stream it to the page as it resolves.",
      },
    ],
  },
  {
    value: "reference",
    title: "API reference",
    sections: [
      {
        value: "config",
        title: "Config file",
        body: "All options live in a single typed config file at the project root.",
      },
      {
        value: "cli",
        title: "CLI commands",
        body: "dev, build, start and lint cover the full local workflow.",
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
