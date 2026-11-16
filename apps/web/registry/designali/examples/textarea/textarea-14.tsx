"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ProfileBioTextarea() {
  const [bio, setBio] = React.useState(
    "Design engineer at Designali. I design and code thoughtful digital experiences."
  )
  const max = 160

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Bio</CardTitle>
        <CardDescription>Shown on your public profile.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Textarea
          value={bio}
          maxLength={max}
          onChange={(e) => setBio(e.target.value)}
          aria-label="Bio"
        />
        <div className="flex items-center gap-2">
          <Progress value={(bio.length / max) * 100} className="flex-1" />
          <span className="text-xs text-muted-foreground tabular-nums">
            {max - bio.length} left
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  )
}
