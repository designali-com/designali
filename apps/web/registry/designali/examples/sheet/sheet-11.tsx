"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

const initialSubtasks = [
  { id: "a", label: "Draft API contract", done: true },
  { id: "b", label: "Review with platform team", done: true },
  { id: "c", label: "Add rate limiting", done: false },
  { id: "d", label: "Write migration guide", done: false },
]

export default function TaskDetailSheet() {
  const [subtasks, setSubtasks] = React.useState(initialSubtasks)
  const done = subtasks.filter((s) => s.done).length

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open task ENG-482
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <span className="text-muted-foreground">ENG-482</span>
          <SheetTitle>Public webhooks API</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <dl className="grid grid-cols-[96px_1fr] gap-y-2">
            <dt className="text-muted-foreground">Status</dt>
            <dd>
              <Badge variant="secondary">In progress</Badge>
            </dd>
            <dt className="text-muted-foreground">Assignee</dt>
            <dd className="flex items-center gap-1.5">
              <Avatar size="sm">
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              Rui Kato
            </dd>
            <dt className="text-muted-foreground">Due</dt>
            <dd className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              Mar 14
            </dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Subtasks</span>
              <span className="text-muted-foreground">
                {done}/{subtasks.length}
              </span>
            </div>
            <Progress value={(done / subtasks.length) * 100} />
            {subtasks.map((s) => (
              <Label
                key={s.id}
                className={cn(
                  "gap-2 font-normal",
                  s.done && "text-muted-foreground line-through"
                )}
              >
                <Checkbox
                  checked={s.done}
                  onCheckedChange={(checked) =>
                    setSubtasks((prev) =>
                      prev.map((p) =>
                        p.id === s.id ? { ...p, done: checked } : p
                      )
                    )
                  }
                />
                {s.label}
              </Label>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
