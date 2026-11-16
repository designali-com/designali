import {
  CircleCheck as CheckCircle2Icon,
  Circle as CircleIcon,
  Landmark as LandmarkIcon,
  MailCheck as MailCheckIcon,
  PiggyBank as PiggyBankIcon,
  Rocket as RocketIcon,
  User as UserIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { title: "Create account", done: true, icon: UserIcon },
  { title: "Verify email", done: true, icon: MailCheckIcon },
  { title: "Install @designali/icons", done: false, icon: LandmarkIcon },
  { title: "Add team", done: false, icon: UsersIcon },
  { title: "Pick a template", done: false, icon: PiggyBankIcon },
  { title: "Go live", done: false, icon: RocketIcon },
]

export default function OnboardingStepsHorizontal() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Setup progress</span>
        <span className="text-muted-foreground">
          2 of {steps.length} complete
        </span>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max gap-2 pb-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={cn(
                "flex w-32 flex-col gap-2 border p-3",
                i === 2 && "border-primary"
              )}
            >
              <div className="flex items-center justify-between">
                <step.icon className="size-4 text-muted-foreground" />
                {step.done ? (
                  <CheckCircle2Icon className="size-4 text-emerald-600" />
                ) : (
                  <CircleIcon className="size-4 text-muted-foreground/50" />
                )}
              </div>
              <span className="text-xs font-medium">{step.title}</span>
              <span className="text-[10px] text-muted-foreground">
                Step {i + 1}
              </span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
