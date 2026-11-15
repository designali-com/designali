"use client"

import * as React from "react"
import { BookmarkIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

export default function JobPostingCard() {
  const [saved, setSaved] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 flex size-10 items-center justify-center bg-foreground text-sm font-bold text-background">
          Q
        </div>
        <CardTitle>Senior Frontend Engineer</CardTitle>
        <CardDescription>Quillstack · Berlin or remote (EU)</CardDescription>
        <CardAction className="col-start-3">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={saved ? "Unsave job" : "Save job"}
            aria-pressed={saved}
            onClick={() => setSaved(!saved)}
          >
            <BookmarkIcon className={cn(saved && "fill-current")} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">Full-time</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Visa support</Badge>
        </div>
        <p className="text-muted-foreground">
          Own our editor surface end to end, from collaborative cursors to
          performance budgets on low-end devices.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="grid">
          <span className="font-medium">€85k - €105k</span>
          <span className="text-muted-foreground">Posted 3 days ago</span>
        </div>
        <Button size="sm">Apply now</Button>
      </CardFooter>
    </Card>
  )
}
