"use client"

import * as React from "react"
import { CalendarIcon, CircleCheckIcon, TrashIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const initialTodos = [
  {
    id: 1,
    title: "Renew domain for fieldnote.io",
    done: false,
    due: "Today",
    priority: "high",
  },
  {
    id: 2,
    title: "Send W-9 to accountant",
    done: false,
    due: "Tomorrow",
    priority: "medium",
  },
  {
    id: 3,
    title: "Book flights for offsite",
    done: true,
    due: "Next week",
    priority: "low",
  },
]

const priorityColor: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-sky-500",
}

export default function TodoItemMenu() {
  const [todos, setTodos] = React.useState(initialTodos)
  const patch = (id: number, changes: Partial<(typeof initialTodos)[number]>) =>
    setTodos((list) =>
      list.map((t) => (t.id === id ? { ...t, ...changes } : t))
    )

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {todos.map((todo) => (
        <ContextMenu key={todo.id}>
          <ContextMenuTrigger className="flex items-center gap-2 border px-3 py-2 text-xs data-popup-open:bg-muted">
            <Checkbox
              checked={todo.done}
              onCheckedChange={(done) => patch(todo.id, { done })}
              aria-label="Complete"
            />
            <span
              className={cn(
                "flex-1 truncate",
                todo.done && "text-muted-foreground line-through"
              )}
            >
              {todo.title}
            </span>
            <span
              className={cn(
                "size-2 rounded-full",
                priorityColor[todo.priority]
              )}
            />
            <span className="text-muted-foreground">{todo.due}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => patch(todo.id, { done: !todo.done })}
              >
                <CircleCheckIcon />
                Mark {todo.done ? "incomplete" : "complete"}
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <CalendarIcon />
                  Due date
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-36">
                  <ContextMenuRadioGroup
                    value={todo.due}
                    onValueChange={(due) => patch(todo.id, { due })}
                  >
                    <ContextMenuRadioItem value="Today">
                      Today
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="Tomorrow">
                      Tomorrow
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="Next week">
                      Next week
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup
              value={todo.priority}
              onValueChange={(priority) => patch(todo.id, { priority })}
            >
              <ContextMenuLabel>Priority</ContextMenuLabel>
              <ContextMenuRadioItem value="high">High</ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
              <ContextMenuRadioItem value="low">Low</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() =>
                  setTodos((l) => l.filter((t) => t.id !== todo.id))
                }
              >
                <TrashIcon />
                Delete task
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
