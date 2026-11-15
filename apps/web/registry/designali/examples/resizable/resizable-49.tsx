import * as React from "react"
import { BoldIcon, ItalicIcon, PercentIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const cols = ["A", "B", "C", "D"]
const rows = [
  ["Region", "Q1", "Q2", "Q3"],
  ["North", "12.4", "14.1", "15.8"],
  ["South", "9.8", "10.2", "11.6"],
  ["West", "7.1", "8.4", "9.9"],
]

export default function SpreadsheetWithFormatPanel() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-60 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="68%" minSize="45%">
        <div className="grid grid-cols-[24px_repeat(4,minmax(0,1fr))] text-[11px]">
          <span className="border-r border-b bg-muted/60" />
          {cols.map((c) => (
            <span
              key={c}
              className="border-r border-b bg-muted/60 px-1 text-center text-muted-foreground"
            >
              {c}
            </span>
          ))}
          {rows.map((row, r) => (
            <React.Fragment key={r}>
              <span className="border-r border-b bg-muted/60 text-center text-muted-foreground">
                {r + 1}
              </span>
              {row.map((cell, c) => (
                <span
                  key={c}
                  className={cn(
                    "truncate border-r border-b px-1 py-1 tabular-nums",
                    r === 0 && "font-medium",
                    r === 1 && c === 3 && "ring-2 ring-primary ring-inset"
                  )}
                >
                  {cell}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">Format cell D2</span>
          <ToggleGroup
            variant="outline"
            size="sm"
            multiple
            defaultValue={["bold"]}
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="percent" aria-label="Percent">
              <PercentIcon />
            </ToggleGroupItem>
          </ToggleGroup>
          <span className="text-muted-foreground">Number format: 0.0</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
