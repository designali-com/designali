"use client"

import * as React from "react"
import {
  Bookmark as BookmarkIcon,
} from "@designali/icons"

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
          D
        </div>
        <CardTitle>Landing page build</CardTitle>
        <CardDescription>Designali studio brief · Remote</CardDescription>
        <CardAction className="col-start-3">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={saved ? "Unsave brief" : "Save brief"}
            aria-pressed={saved}
            onClick={() => setSaved(!saved)}
          >
            <BookmarkIcon className={cn(saved && "fill-current")} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">Project</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Next.js</Badge>
        </div>
        <p className="text-muted-foreground">
          Take Designali blocks and templates from Figma to production-ready
          code with Next.js and Tailwind CSS.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="grid">
          <span className="font-medium">Fixed scope · 2 weeks</span>
          <span className="text-muted-foreground">Posted 3 days ago</span>
        </div>
        <Button size="sm">Send proposal</Button>
      </CardFooter>
    </Card>
  )
}
