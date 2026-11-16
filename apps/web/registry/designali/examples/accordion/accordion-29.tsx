import {
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const groups = [
  {
    value: "inbox",
    title: "Client requests",
    body: "New Designali project briefs land here and are sorted by service.",
  },
  {
    value: "labels",
    title: "Tags",
    body: "Tag work as Brand, UI/UX, Web or Motion. Nested tags inherit the parent colour.",
  },
  {
    value: "filters",
    title: "Saved filters",
    body: "Saved filters like “Next.js builds” appear in the sidebar and update in real time.",
  },
]

export default function AccordionLeadingChevron() {
  return (
    <Accordion defaultValue={["labels"]} className="w-full max-w-sm">
      {groups.map((group) => (
        <AccordionItem
          key={group.value}
          value={group.value}
          className="border-none"
        >
          <AccordionTrigger className="justify-start gap-2 hover:no-underline">
            <ChevronRightIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
            {group.title}
          </AccordionTrigger>
          <AccordionContent className="ms-2 border-s ps-4 text-muted-foreground">
            {group.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
