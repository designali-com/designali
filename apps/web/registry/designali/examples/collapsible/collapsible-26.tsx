"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  {
    id: "profile",
    title: "Complete your profile",
    body: "Add a photo and role so the Designali studio recognises you.",
    cta: "Edit profile",
    done: true,
  },
  {
    id: "invite",
    title: "Invite your team",
    body: "Share templates, blocks and icons with your whole team.",
    cta: "Send invites",
    done: false,
  },
  {
    id: "connect",
    title: "Connect Figma",
    body: "Sync your Figma files so designs move to code faster.",
    cta: "Connect",
    done: false,
  },
]

export default function OnboardingChecklist() {
  const [openId, setOpenId] = React.useState<string | null>("invite")
  return (
    <Card className="w-full max-w-sm gap-2">
      <CardHeader>
        <CardTitle>Get started</CardTitle>
        <CardDescription>1 of 3 steps complete</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {steps.map((step) => (
          <Collapsible
            key={step.id}
            open={openId === step.id}
            onOpenChange={(open) => setOpenId(open ? step.id : null)}
            className="data-open:bg-muted/50"
          >
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  {step.done ? (
                    <CircleCheckIcon className="text-primary" />
                  ) : (
                    <CircleIcon className="text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      step.done && "text-muted-foreground line-through"
                    )}
                  >
                    {step.title}
                  </span>
                </Button>
              }
            />
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
              <div className="space-y-3 px-4 pb-3 pl-10 text-sm text-muted-foreground">
                <p>{step.body}</p>
                <Button size="xs" variant={step.done ? "outline" : "default"}>
                  {step.cta}
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  )
}
