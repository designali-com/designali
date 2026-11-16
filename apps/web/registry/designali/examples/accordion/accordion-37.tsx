import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const terms = [
  {
    value: "cancellation",
    title: "Cancellation",
    body: "You may cancel your Designali plan at any time. Access continues until the end of the current billing period.",
  },
  {
    value: "liability",
    title: "Limitation of liability",
    body: "Designali’s total liability is limited to the fees you paid in the twelve months before the claim.",
  },
  {
    value: "governing",
    title: "Governing law",
    body: "These terms are governed by the laws of the jurisdiction where Designali is registered. See designali.com/docs/legal/terms.",
  },
]

export default function AccordionHiddenUntilFound() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Collapsed text stays searchable. Try
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>F</Kbd>
        </KbdGroup>
        and search for &ldquo;jurisdiction&rdquo;.
      </p>
      <Accordion hiddenUntilFound className="border px-3">
        {terms.map((term) => (
          <AccordionItem key={term.value} value={term.value}>
            <AccordionTrigger>
              {term.title}
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {term.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
