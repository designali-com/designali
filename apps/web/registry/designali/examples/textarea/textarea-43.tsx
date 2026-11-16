"use client"

import * as React from "react"
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"
import { Textarea } from "@workspace/ui/components/textarea"

export default function SurveyOpenQuestion() {
  const [answer, setAnswer] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Question 4 of 5</span>
        <span>80%</span>
      </div>
      <Progress value={80} />
      <Label htmlFor="sv-q4" className="text-sm">
        What&apos;s one thing that would make you recommend Designali to a friend?
      </Label>
      <Textarea
        id="sv-q4"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="min-h-24"
        placeholder="Your answer"
      />
      <div className="flex justify-between">
        <Button variant="ghost" size="sm">
          <ArrowLeftIcon data-icon="inline-start" />
          Back
        </Button>
        <Button size="sm" disabled={!answer.trim()}>
          Next
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
