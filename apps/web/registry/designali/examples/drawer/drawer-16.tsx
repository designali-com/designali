"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const subtasks = [
  { id: "s1", label: "Audit current pricing blocks", done: true },
  { id: "s2", label: "Design new layouts in Figma", done: true },
  { id: "s3", label: "Build components in Next.js", done: false },
  { id: "s4", label: "Publish to designali.com/blocks", done: false },
]

export default function TaskDetailsDrawer() {
  const [items, setItems] = React.useState(subtasks)
  const done = items.filter((item) => item.done).length

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs flex-col gap-2 border bg-background p-3 text-start hover:bg-muted/50"
      >
        <span className="font-medium">Design new pricing blocks</span>
        <span className="flex items-center gap-2 text-muted-foreground">
          <Badge variant="secondary">In progress</Badge>
          {done}/{items.length} subtasks
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <span className="font-mono text-muted-foreground">DSG-218</span>
          <DrawerTitle className="text-base">
            Design new pricing blocks
          </DrawerTitle>
          <DrawerDescription>Blocks · Designali studio</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <dl className="grid grid-cols-[6rem_1fr] items-center gap-y-3">
            <dt className="text-muted-foreground">Status</dt>
            <dd>
              <NativeSelect
                size="sm"
                defaultValue="progress"
                aria-label="Status"
              >
                <NativeSelectOption value="todo">To do</NativeSelectOption>
                <NativeSelectOption value="progress">
                  In progress
                </NativeSelectOption>
                <NativeSelectOption value="review">
                  In review
                </NativeSelectOption>
                <NativeSelectOption value="done">Done</NativeSelectOption>
              </NativeSelect>
            </dd>
            <dt className="text-muted-foreground">Assignee</dt>
            <dd className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              Ali Imam
            </dd>
            <dt className="text-muted-foreground">Due</dt>
            <dd className="flex items-center gap-1">
              <CalendarIcon className="size-3.5" />
              Nov 28
            </dd>
          </dl>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium">Subtasks</p>
              <span className="text-muted-foreground">
                {done} of {items.length}
              </span>
            </div>
            <Progress value={(done / items.length) * 100} />
            {items.map((item) => (
              <Field key={item.id} orientation="horizontal">
                <Checkbox
                  id={item.id}
                  checked={item.done}
                  onCheckedChange={(checked) =>
                    setItems((current) =>
                      current.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, done: checked === true }
                          : entry
                      )
                    )
                  }
                />
                <FieldLabel
                  htmlFor={item.id}
                  className={cn(
                    item.done && "text-muted-foreground line-through"
                  )}
                >
                  {item.label}
                </FieldLabel>
              </Field>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
