"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const steps = [
  {
    value: "profile",
    label: "Profile",
    text: "Tell us your name and role so we can tailor your workspace.",
  },
  {
    value: "team",
    label: "Team",
    text: "Invite up to five teammates now, or skip and do it later.",
  },
  {
    value: "finish",
    label: "Finish",
    text: "You're all set. We created a starter project for you.",
  },
]

export default function OnboardingStepTabs() {
  const [step, setStep] = React.useState("profile")
  const index = steps.findIndex((s) => s.value === step)

  return (
    <Tabs
      value={step}
      onValueChange={(v) => setStep(v as string)}
      className="w-full max-w-sm border p-4"
    >
      <TabsList className="w-full">
        {steps.map((s, i) => (
          <TabsTrigger key={s.value} value={s.value}>
            <span className="text-muted-foreground tabular-nums">{i + 1}.</span>
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {steps.map((s) => (
        <TabsContent
          key={s.value}
          value={s.value}
          className="min-h-12 py-2 text-muted-foreground"
        >
          {s.text}
        </TabsContent>
      ))}
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          disabled={index === 0}
          onClick={() => setStep(steps[index - 1]!.value)}
        >
          Back
        </Button>
        <Button
          size="sm"
          disabled={index === steps.length - 1}
          onClick={() => setStep(steps[index + 1]!.value)}
        >
          Continue
        </Button>
      </div>
    </Tabs>
  )
}
