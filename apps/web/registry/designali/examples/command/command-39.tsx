"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const tasks = [
  {
    cmd: "npm run dev",
    desc: "Start the dev server",
    out: "ready - started server on 0.0.0.0:3000",
  },
  {
    cmd: "npm run test",
    desc: "Run the unit test suite",
    out: "Tests: 128 passed, 128 total",
  },
  {
    cmd: "npm run lint",
    desc: "Lint all packages",
    out: "✔ No ESLint warnings or errors",
  },
  {
    cmd: "npm run build",
    desc: "Create a production build",
    out: "Compiled successfully in 14.2s",
  },
]

export default function TerminalCommandRunner() {
  const [output, setOutput] = React.useState<string[]>([
    "$ waiting for a task...",
  ])

  return (
    <div className="flex w-full max-w-md flex-col border font-mono">
      <Command className="border-b">
        <CommandInput placeholder="> run task" className="font-mono" />
        <CommandList className="max-h-44">
          <CommandEmpty>Unknown task.</CommandEmpty>
          <CommandGroup heading="package.json scripts">
            {tasks.map((task) => (
              <CommandItem
                key={task.cmd}
                value={task.cmd + " " + task.desc}
                onSelect={() =>
                  setOutput((lines) =>
                    [...lines, "$ " + task.cmd, task.out].slice(-6)
                  )
                }
              >
                <ChevronRightIcon />
                <span>{task.cmd}</span>
                <span className="ms-auto truncate font-sans text-[11px] text-muted-foreground">
                  {task.desc}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="flex min-h-24 flex-col gap-0.5 bg-muted/40 p-2 text-[11px]">
        {output.map((line, index) => (
          <span
            key={index}
            className={
              line.startsWith("$")
                ? "text-muted-foreground"
                : "text-emerald-600 dark:text-emerald-400"
            }
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}
