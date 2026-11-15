"use client"

import * as React from "react"
import { ClockIcon } from "lucide-react"

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
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Leo&apos;s profile</CardTitle>
            <CardDescription>Age 9</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-filter">Filter mature content</Label>
          <Switch id="pc-filter" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-purchases">Require approval for purchases</Label>
          <Switch id="pc-purchases" defaultChecked />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="pc-limit">Daily screen time limit</Label>
            <Switch
              id="pc-limit"
              checked={screenLimit}
              onCheckedChange={setScreenLimit}
            />
          </div>
          {screenLimit && (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3" /> 2 hours on school days, 3 hours
              on weekends
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
