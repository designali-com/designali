import { CheckCircle2Icon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const comments = [
  {
    author: "Hana Sato",
    text: "Can we cap liability at 12 months of fees?",
    resolved: false,
  },
  {
    author: "Victor Lund",
    text: "Renewal term updated to annual.",
    resolved: true,
  },
]

export default function DocumentReviewComments() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="64%" minSize="45%">
        <div className="flex h-full items-start justify-center bg-muted/50 p-4">
          <div className="flex w-full max-w-64 flex-col gap-2 bg-background p-4 shadow-sm">
            <span className="text-xs font-semibold">
              Master Services Agreement
            </span>
            <div className="h-1.5 w-full bg-muted" />
            <div className="h-1.5 w-5/6 bg-muted" />
            <div className="h-1.5 w-full bg-amber-300/60" />
            <div className="h-1.5 w-2/3 bg-muted" />
            <div className="h-1.5 w-full bg-muted" />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="36%" minSize="25%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">Comments</span>
          {comments.map((c) => (
            <div
              key={c.author}
              className={cn(
                "flex flex-col gap-1 border p-2 text-xs",
                c.resolved && "opacity-60"
              )}
            >
              <div className="flex items-center gap-1.5">
                <Avatar className="size-5">
                  <AvatarFallback className="text-[9px]">
                    {c.author
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate font-medium">{c.author}</span>
                {c.resolved && (
                  <CheckCircle2Icon className="ml-auto size-3.5 text-emerald-600" />
                )}
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
