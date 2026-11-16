import {
  Brain as BrainIcon,
  Calculator as CalculatorIcon,
  ChevronDown as ChevronDownIcon,
  FileText as FileTextIcon,
  Search as SearchIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const steps = [
  { icon: SearchIcon, text: 'Searched designali.com for "template sales"' },
  { icon: FileTextIcon, text: "Read designali-q3-report.pdf" },
  { icon: CalculatorIcon, text: "Compared Q3 template sales against Q2" },
]

export default function AssistantReasoningTrace() {
  return (
    <div className="flex w-full max-w-md gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary text-white">
        <SparklesIcon className="size-4" />
      </div>
      <div className="flex-1 space-y-2">
        <Collapsible>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="xs"
                className="-ml-2 text-muted-foreground"
              />
            }
          >
            <BrainIcon />
            Thought for 6 seconds
            <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ol className="mt-1 flex flex-col gap-2 border-l pl-3 text-xs text-muted-foreground">
              {steps.map((step) => (
                <li key={step.text} className="flex items-center gap-2">
                  <step.icon className="size-3.5" />
                  {step.text}
                </li>
              ))}
            </ol>
          </CollapsibleContent>
        </Collapsible>
        <p className="text-sm">
          Template sales grew 18% in Q3 compared with Q2. Most of the growth
          came from the new Designali blocks and landing page bundles.
        </p>
      </div>
    </div>
  )
}
