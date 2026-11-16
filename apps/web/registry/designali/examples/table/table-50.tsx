"use client"

import * as React from "react"
import {
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalMedium as SignalMediumIcon,
} from "@designali/icons"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const initialTasks = [
  { id: 1, title: "Send client onboarding survey", priority: "high", done: false },
  { id: 2, title: "Update pricing FAQ", priority: "medium", done: true },
  { id: 3, title: "Archive old Dalim projects", priority: "low", done: false },
  { id: 4, title: "Fix broken footer links", priority: "high", done: false },
]

const priorityIcon = {
  high: SignalHighIcon,
  medium: SignalMediumIcon,
  low: SignalLowIcon,
}

export default function TaskPriorityTable() {
  const [tasks, setTasks] = React.useState(initialTasks)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <span className="sr-only">Done</span>
            </TableHead>
            <TableHead>Task</TableHead>
            <TableHead className="text-right">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const Icon =
              priorityIcon[task.priority as keyof typeof priorityIcon]
            return (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={(checked) =>
                      setTasks((t) =>
                        t.map((x) =>
                          x.id === task.id ? { ...x, done: !!checked } : x
                        )
                      )
                    }
                    aria-label={"Complete " + task.title}
                  />
                </TableCell>
                <TableCell
                  className={cn(
                    task.done && "text-muted-foreground line-through"
                  )}
                >
                  {task.title}
                </TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center gap-1 text-muted-foreground capitalize">
                    <Icon className="size-3.5" />
                    {task.priority}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
