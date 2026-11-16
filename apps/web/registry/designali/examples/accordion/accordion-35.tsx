import {
  ChevronDown as ChevronDownIcon,
  CircleCheck as CircleCheckIcon,
  CircleDashed as CircleDashedIcon,
  CircleX as CircleXIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  {
    value: "install",
    title: "Install dependencies",
    status: "success",
    duration: "18s",
    log: ["Resolving packages", "Added 1,204 packages", "Done in 17.8s"],
  },
  {
    value: "build",
    title: "Build",
    status: "success",
    duration: "1m 04s",
    log: [
      "Compiling 312 modules",
      "Generated static pages for designali.com (48/48)",
      "Build completed",
    ],
  },
  {
    value: "test",
    title: "Run tests",
    status: "failed",
    duration: "42s",
    log: [
      "PASS  blocks/pricing.test.ts",
      "FAIL  templates/design-agency.test.ts",
      "1 failed, 86 passed",
    ],
  },
  {
    value: "deploy",
    title: "Deploy",
    status: "skipped",
    duration: "-",
    log: ["Skipped because a previous step failed"],
  },
]

export default function AccordionDeploymentLogs() {
  return (
    <Accordion defaultValue={["test"]} className="w-full max-w-md border">
      {steps.map((step) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger className="items-center px-3 hover:bg-muted/50 hover:no-underline">
            <span className="flex items-center gap-2">
              {step.status === "success" && (
                <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              )}
              {step.status === "failed" && (
                <CircleXIcon className="size-4 text-destructive" />
              )}
              {step.status === "skipped" && (
                <CircleDashedIcon className="size-4 text-muted-foreground" />
              )}
              {step.title}
            </span>
            <span className="ms-auto me-2 font-mono font-normal text-muted-foreground">
              {step.duration}
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <pre className="overflow-x-auto bg-muted p-2 font-mono text-[11px] leading-relaxed">
              {step.log.map((line, index) => (
                <div
                  key={line}
                  className={cn(line.startsWith("FAIL") && "text-destructive")}
                >
                  <span className="me-3 text-muted-foreground select-none">
                    {index + 1}
                  </span>
                  {line}
                </div>
              ))}
            </pre>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
