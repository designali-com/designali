import {
  ArchiveIcon,
  ForwardIcon,
  InboxIcon,
  ReplyIcon,
  SendIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const folders = [
  { label: "Inbox", icon: InboxIcon, count: 12 },
  { label: "Starred", icon: StarIcon, count: 3 },
  { label: "Sent", icon: SendIcon, count: 0 },
  { label: "Archive", icon: ArchiveIcon, count: 0 },
  { label: "Trash", icon: Trash2Icon, count: 0 },
]

const messages = [
  { from: "Maya Chen", subject: "Q3 roadmap review", time: "9:41" },
  { from: "Leo Park", subject: "Invoice #2041 paid", time: "8:12" },
  { from: "Ines Duarte", subject: "Design crit notes", time: "Yesterday" },
  { from: "Tomas Reyes", subject: "Offsite logistics", time: "Mon" },
]

export default function MailClientLayout() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="22%" minSize="15%">
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {folders.map((folder, i) => (
            <button
              key={folder.label}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted",
                i === 0 && "bg-muted font-medium"
              )}
            >
              <folder.icon className="size-3.5 shrink-0" />
              <span className="flex-1 truncate">{folder.label}</span>
              {folder.count > 0 && (
                <span className="text-muted-foreground">{folder.count}</span>
              )}
            </button>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="36%" minSize="25%">
        <div className="flex h-full flex-col divide-y">
          {messages.map((message, i) => (
            <div
              key={message.subject}
              className={cn(
                "flex flex-col gap-0.5 p-3",
                i === 0 && "bg-muted/50"
              )}
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="truncate font-medium">{message.from}</span>
                <span className="shrink-0 text-muted-foreground">
                  {message.time}
                </span>
              </div>
              <span className="truncate text-xs text-muted-foreground">
                {message.subject}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="42%" minSize="25%">
        <article className="flex h-full flex-col gap-3 p-4">
          <div>
            <h3 className="text-sm font-semibold">Q3 roadmap review</h3>
            <p className="text-xs text-muted-foreground">Maya Chen to you</p>
          </div>
          <p className="text-xs leading-relaxed">
            Hi team, I&apos;ve attached the draft roadmap for next quarter.
            Please leave comments on the priorities before Thursday so we can
            lock scope in the planning session.
          </p>
          <div className="mt-auto flex gap-2">
            <Button size="sm">
              <ReplyIcon data-icon="inline-start" />
              Reply
            </Button>
            <Button size="sm" variant="outline">
              <ForwardIcon data-icon="inline-start" />
              Forward
            </Button>
          </div>
        </article>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
