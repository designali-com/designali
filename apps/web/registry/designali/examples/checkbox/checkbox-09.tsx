"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

export default function TodoListStrikethrough() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Reply to design feedback", done: true },
    { id: 2, text: "Prepare sprint demo", done: false },
    { id: 3, text: "Book venue for offsite", done: false },
  ])
  const [draft, setDraft] = React.useState("")
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (!draft.trim()) return
          setTodos((list) => [
            ...list,
            { id: Date.now(), text: draft.trim(), done: false },
          ])
          setDraft("")
        }}
      >
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a task"
        />
        <Button type="submit" size="icon" aria-label="Add task">
          <PlusIcon />
        </Button>
      </form>
      <ul className="flex flex-col divide-y border">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className="flex cursor-pointer items-center gap-3 px-3 py-2.5">
              <Checkbox
                checked={todo.done}
                onCheckedChange={(checked) =>
                  setTodos((list) =>
                    list.map((t) =>
                      t.id === todo.id ? { ...t, done: checked } : t
                    )
                  )
                }
              />
              <span
                className={cn(
                  "text-sm",
                  todo.done && "text-muted-foreground line-through"
                )}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">{remaining} remaining</p>
    </div>
  )
}
