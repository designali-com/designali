import {
  ChevronDown as ChevronDownIcon,
  Wrench as WrenchIcon,
} from "@designali/icons"

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
    title: "A Designali block won’t render",
    steps: [
      { text: "Save your work with", keys: ["Ctrl", "S"] },
      { text: "Reload the window with", keys: ["Ctrl", "Shift", "R"] },
      { text: "If it persists, reinstall the block from designali.com/blocks." },
    ],
  },
  {
    value: "sync",
    title: "Icons are not showing",
    steps: [
      { text: "Check @designali/icons is installed in package.json." },
      { text: "Open the command menu with", keys: ["Ctrl", "K"] },
      { text: "Search the icon name and copy the import again." },
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
