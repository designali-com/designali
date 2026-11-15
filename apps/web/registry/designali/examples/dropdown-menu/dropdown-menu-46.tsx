"use client"

import * as React from "react"
import { ArrowUpIcon, ChevronDownIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const models = [
  {
    id: "swift",
    name: "Swift 2",
    hint: "Fast answers for everyday tasks",
    badge: "Fast",
  },
  {
    id: "atlas",
    name: "Atlas 4",
    hint: "Balanced reasoning and speed",
    badge: "Default",
  },
  {
    id: "summit",
    name: "Summit 4 Pro",
    hint: "Deep analysis and long documents",
    badge: "Pro",
  },
]

export default function ChatModelPickerMenu() {
  const [model, setModel] = React.useState("atlas")
  const current = models.find((m) => m.id === model)!

  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-2">
      <textarea
        placeholder="Ask anything..."
        rows={2}
        className="resize-none bg-transparent px-1 text-xs outline-none placeholder:text-muted-foreground"
      />
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" size="xs" />}>
            <SparklesIcon data-icon="inline-start" />
            {current.name}
            <ChevronDownIcon data-icon="inline-end" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-64">
            <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
              <DropdownMenuLabel>Choose a model</DropdownMenuLabel>
              {models.map((m) => (
                <DropdownMenuRadioItem
                  key={m.id}
                  value={m.id}
                  disabled={m.id === "summit"}
                >
                  <span className="grid flex-1">
                    <span className="flex items-center gap-2 font-medium">
                      {m.name}
                      <Badge
                        variant={m.id === "summit" ? "outline" : "secondary"}
                      >
                        {m.badge}
                      </Badge>
                    </span>
                    <span className="text-muted-foreground">{m.hint}</span>
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="icon-sm" aria-label="Send">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}
