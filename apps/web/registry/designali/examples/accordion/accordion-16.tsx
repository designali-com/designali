import {
  ArrowRight as ArrowRightIcon,
  ChevronDown as ChevronDownIcon,
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

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
    body: "Add your name and studio so Designali can tailor recommendations.",
  },
  {
    value: "invite",
    title: "Download your first template",
    done: true,
    body: "Pick a Designali template and run it locally with Next.js.",
  },
  {
    value: "connect",
    title: "Install @designali/icons",
    done: false,
    body: "Add 4000+ icons to your project with a single install.",
  },
  {
    value: "board",
    title: "Deploy to Vercel",
    done: false,
    body: "Push your project live — design se code tak.",
  },
]

export default function AccordionOnboardingChecklist() {
  const done = steps.filter((step) => step.done).length

  return (
    <div className="w-full max-w-md border">
      <div className="space-y-2 border-b p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Set up your Designali project</span>
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
                  <CircleCheckIcon className="size-4 text-primary dark:text-primary" />
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
