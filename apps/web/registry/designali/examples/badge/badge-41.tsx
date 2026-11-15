import { CheckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { title: "Create your workspace", state: "Done" },
  { title: "Invite teammates", state: "Done" },
  { title: "Connect a data source", state: "In progress" },
  { title: "Publish your first report", state: "Up next" },
]

export default function OnboardingStepBadges() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Get started</CardTitle>
        <CardDescription>2 of 4 steps complete</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-3">
            <span className="flex size-5 items-center justify-center border text-[10px] text-muted-foreground">
              {index + 1}
            </span>
            <span
              className={cn(
                "flex-1 text-sm",
                step.state === "Done" && "text-muted-foreground line-through"
              )}
            >
              {step.title}
            </span>
            <Badge
              variant={
                step.state === "Done"
                  ? "secondary"
                  : step.state === "In progress"
                    ? "default"
                    : "outline"
              }
            >
              {step.state === "Done" && <CheckIcon data-icon="inline-start" />}
              {step.state}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
