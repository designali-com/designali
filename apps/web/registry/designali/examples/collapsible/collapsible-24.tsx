import {
  BrainIcon,
  CalculatorIcon,
  ChevronDownIcon,
  FileTextIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const steps = [
  { icon: SearchIcon, text: 'Searched workspace for "Q3 churn"' },
  { icon: FileTextIcon, text: "Read retention-report-q3.pdf" },
  { icon: CalculatorIcon, text: "Compared churn against Q2 baseline" },
]

export default function AssistantReasoningTrace() {
  return (
    <div className="flex w-full max-w-md gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-white">
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
          Churn in Q3 was 3.1%, down from 4.4% in Q2. Most of the improvement
          came from annual plans after the new onboarding emails launched.
        </p>
      </div>
    </div>
  )
}
