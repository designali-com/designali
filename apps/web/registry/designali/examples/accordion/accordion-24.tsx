import { ChevronDownIcon, WrenchIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const issues = [
  {
    value: "frozen",
    title: "The editor stops responding",
    steps: [
      { text: "Save your work with", keys: ["Ctrl", "S"] },
      { text: "Reload the window with", keys: ["Ctrl", "Shift", "R"] },
      { text: "If it persists, disable extensions from Settings." },
    ],
  },
  {
    value: "sync",
    title: "Changes are not syncing",
    steps: [
      { text: "Check the status dot in the bottom bar is green." },
      { text: "Open the command menu with", keys: ["Ctrl", "K"] },
      { text: "Run Force sync and wait for the confirmation." },
    ],
  },
]

export default function AccordionTroubleshooting() {
  return (
    <Accordion
      defaultValue={["frozen"]}
      className="w-full max-w-md border px-3"
    >
      {issues.map((issue) => (
        <AccordionItem key={issue.value} value={issue.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <WrenchIcon className="size-3.5 text-muted-foreground" />
              {issue.title}
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ol className="space-y-2">
              {issue.steps.map((step, index) => (
                <li key={step.text} className="flex items-start gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center border text-[10px]">
                    {index + 1}
                  </span>
                  <span className="flex flex-wrap items-center gap-1 pt-0.5">
                    {step.text}
                    {step.keys && (
                      <KbdGroup>
                        {step.keys.map((key) => (
                          <Kbd key={key}>{key}</Kbd>
                        ))}
                      </KbdGroup>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
