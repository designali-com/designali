"use client"

import * as React from "react"
import {
  Clock as ClockIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function ParentalControls() {
  const [screenLimit, setScreenLimit] = React.useState(true)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>DT</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Design Intern&apos;s profile</CardTitle>
            <CardDescription>Designali studio</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-filter">Hide client-confidential projects</Label>
          <Switch id="pc-filter" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-purchases">Require approval for asset purchases</Label>
          <Switch id="pc-purchases" defaultChecked />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="pc-limit">Daily working hours limit</Label>
            <Switch
              id="pc-limit"
              checked={screenLimit}
              onCheckedChange={setScreenLimit}
            />
          </div>
          {screenLimit && (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3" /> 6 hours on weekdays, off on
              weekends
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
