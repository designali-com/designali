import { GitCommitHorizontalIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const commits = [
  { hash: "a3f9c21", message: "fix: debounce search input", author: "rk" },
  { hash: "7b21e0d", message: "feat: add bulk archive", author: "mt" },
  { hash: "c04d8aa", message: "chore: bump dependencies", author: "rk" },
  { hash: "19ee7f3", message: "docs: webhook retries", author: "sl" },
]

export default function CommitHistoryDetails() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="50%" minSize="35%">
        <div className="flex h-full flex-col divide-y">
          {commits.map((c, i) => (
            <div
              key={c.hash}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-xs",
                i === 1 && "bg-muted/60"
              )}
            >
              <GitCommitHorizontalIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate">{c.message}</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {c.hash}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">feat: add bulk archive</span>
          <span className="font-mono text-[11px] text-muted-foreground">
            7b21e0d - Mira Toivonen - 2h ago
          </span>
          <Separator />
          <div className="flex flex-col gap-1 font-mono text-[11px]">
            <span>
              <span className="text-emerald-600">+48</span>{" "}
              src/inbox/bulk-actions.ts
            </span>
            <span>
              <span className="text-emerald-600">+12</span>{" "}
              <span className="text-red-600">-3</span> src/inbox/toolbar.tsx
            </span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
