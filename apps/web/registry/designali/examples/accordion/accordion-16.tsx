import {
  ArrowRightIcon,
  ChevronDownIcon,
  CircleCheckIcon,
  CircleIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  {
    value: "profile",
    title: "Complete your profile",
    done: true,
    body: "Add a photo and job title so teammates recognise you.",
  },
  {
    value: "invite",
    title: "Invite your team",
    done: true,
    body: "Workspaces with three or more members get the most out of shared boards.",
  },
  {
    value: "connect",
    title: "Connect your calendar",
    done: false,
    body: "Sync meetings so action items land on the right board automatically.",
  },
  {
    value: "board",
    title: "Create your first board",
    done: false,
    body: "Start from a template or a blank board and add a few cards.",
  },
]

export default function AccordionOnboardingChecklist() {
  const done = steps.filter((step) => step.done).length

  return (
    <div className="w-full max-w-md border">
      <div className="space-y-2 border-b p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Set up your workspace</span>
          <span className="text-muted-foreground">
            {done}/{steps.length} done
          </span>
        </div>
        <Progress value={(done / steps.length) * 100} />
      </div>
      <Accordion defaultValue={["connect"]} className="px-3">
        {steps.map((step) => (
          <AccordionItem key={step.value} value={step.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {step.done ? (
                  <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <CircleIcon className="size-4 text-muted-foreground" />
                )}
                <span
                  className={cn(
                    step.done && "text-muted-foreground line-through"
                  )}
                >
                  {step.title}
                </span>
              </span>
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 ps-6">
              <p className="text-muted-foreground">{step.body}</p>
              {!step.done && (
                <Button size="xs">
                  Start
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
