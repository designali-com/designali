import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const steps = [
  {
    value: "research",
    title: "Research",
    body: "Interview eight customers and summarise the top three pains.",
  },
  {
    value: "concept",
    title: "Concept",
    body: "Sketch two directions and review them with engineering for feasibility.",
  },
  {
    value: "build",
    title: "Build",
    body: "Ship behind a flag to 10% of workspaces and watch activation.",
  },
]

export default function AccordionActiveAccentBorder() {
  return (
    <Accordion defaultValue={["concept"]} className="w-full max-w-sm">
      {steps.map((step) => (
        <AccordionItem
          key={step.value}
          value={step.value}
          className="border-s-2 border-b-0 border-s-border ps-4 transition-colors not-last:border-b-0 data-open:border-s-foreground"
        >
          <AccordionTrigger className="text-sm text-muted-foreground hover:no-underline aria-expanded:text-foreground">
            {step.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {step.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
