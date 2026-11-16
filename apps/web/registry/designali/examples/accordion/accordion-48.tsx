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
    body: "Talk to the client, audit their brand and map the goals for the new designali build.",
  },
  {
    value: "concept",
    title: "Concept",
    body: "Explore two directions in Figma and pick one with the client before any code.",
  },
  {
    value: "build",
    title: "Build",
    body: "Build it in Next.js and Tailwind CSS, then ship to Vercel — design se code tak.",
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
