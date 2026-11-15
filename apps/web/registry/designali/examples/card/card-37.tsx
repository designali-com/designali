"use client"

import * as React from "react"
import {
  AngryIcon,
  FrownIcon,
  HeartHandshakeIcon,
  LaughIcon,
  MehIcon,
  SmileIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const ratings = [
  { value: "1", icon: AngryIcon, label: "Terrible" },
  { value: "2", icon: FrownIcon, label: "Bad" },
  { value: "3", icon: MehIcon, label: "Okay" },
  { value: "4", icon: SmileIcon, label: "Good" },
  { value: "5", icon: LaughIcon, label: "Great" },
]

export default function FeedbackCard() {
  const [rating, setRating] = React.useState<string[]>([])
  const [sent, setSent] = React.useState(false)

  if (sent) {
    return (
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
          <HeartHandshakeIcon className="size-8 text-primary" />
          <CardTitle>Thanks for the feedback!</CardTitle>
          <CardDescription>We read every response.</CardDescription>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSent(false)
              setRating([])
            }}
          >
            Send another
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>How was your export experience?</CardTitle>
        <CardDescription>Takes 10 seconds. Helps a lot.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <ToggleGroup
          value={rating}
          onValueChange={(v) => setRating(v as string[])}
          variant="outline"
          className="w-full"
        >
          {ratings.map((r) => (
            <ToggleGroupItem
              key={r.value}
              value={r.value}
              aria-label={r.label}
              className="flex-1"
            >
              <r.icon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Textarea
          placeholder="What could be better? (optional)"
          className="min-h-20"
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          size="sm"
          disabled={rating.length === 0}
          onClick={() => setSent(true)}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
