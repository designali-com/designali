import {
  CircleCheck as CircleCheckIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { title: "Create your designali account", done: true },
  { title: "Install @designali/icons", done: true },
  { title: "Copy your first block", done: false, cta: "Browse" },
  { title: "Deploy a template to Vercel", done: false, cta: "Start" },
]

export default function OnboardingChecklistCard() {
  const done = steps.filter((s) => s.done).length
  const next = steps.findIndex((s) => !s.done)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Get started with Designali</CardTitle>
        <CardDescription>
          {done} of {steps.length} steps complete
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Progress
          value={(done / steps.length) * 100}
          aria-label="Onboarding progress"
        />
        <ol className="grid gap-1">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={cn(
                "flex items-center gap-3 p-2",
                i === next && "bg-muted/60"
              )}
            >
              {s.done ? (
                <CircleCheckIcon className="size-5 text-primary" />
              ) : (
                <span className="flex size-5 items-center justify-center rounded-full border text-[10px]">
                  {i + 1}
                </span>
              )}
              <span
                className={cn(
                  "flex-1",
                  s.done && "text-muted-foreground line-through"
                )}
              >
                {s.title}
              </span>
              {i === next ? <Button size="xs">{s.cta}</Button> : null}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
