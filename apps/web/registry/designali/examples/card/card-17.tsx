"use client"

import * as React from "react"
import { CheckIcon, ClockIcon, MapPinIcon, Share2Icon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const attendees = ["RS", "MJ", "AK", "TB"]

export default function UpcomingEventCard() {
  const [going, setGoing] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
        <div className="row-span-2 flex size-12 flex-col items-center justify-center border bg-muted/50">
          <span className="text-[10px] font-medium text-rose-500 uppercase">
            Mar
          </span>
          <span className="text-lg leading-none font-semibold">14</span>
        </div>
        <CardTitle>Spring product meetup</CardTitle>
        <CardDescription>Hosted by the Northside Design Guild</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <span className="flex items-center gap-2">
          <ClockIcon className="size-3.5" /> 6:30 PM - 9:00 PM
        </span>
        <span className="flex items-center gap-2">
          <MapPinIcon className="size-3.5" /> The Foundry, 22 Mill Lane
        </span>
        <div className="flex items-center gap-2 pt-1">
          <AvatarGroup>
            {attendees.map((a) => (
              <Avatar key={a} size="sm">
                <AvatarFallback>{a}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <span>+42 going</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          className="flex-1"
          variant={going ? "secondary" : "default"}
          onClick={() => setGoing(!going)}
        >
          {going ? <CheckIcon data-icon="inline-start" /> : null}
          {going ? "You're going" : "RSVP"}
        </Button>
        <Button variant="outline" size="icon" aria-label="Share event">
          <Share2Icon />
        </Button>
      </CardFooter>
    </Card>
  )
}
