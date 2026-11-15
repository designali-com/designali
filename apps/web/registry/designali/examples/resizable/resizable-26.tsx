import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const tickets = [
  { id: "#4821", subject: "Cannot reset password", priority: "High" },
  { id: "#4819", subject: "Refund for duplicate charge", priority: "Medium" },
  { id: "#4815", subject: "Export stuck at 90%", priority: "Low" },
]

export default function SupportTicketWorkspace() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="38%" minSize="28%">
        <div className="flex h-full flex-col divide-y">
          {tickets.map((ticket, i) => (
            <div
              key={ticket.id}
              className={cn(
                "flex flex-col gap-1 p-3",
                i === 0 && "bg-muted/60"
              )}
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-muted-foreground">
                  {ticket.id}
                </span>
                <Badge
                  variant={
                    ticket.priority === "High" ? "destructive" : "outline"
                  }
                >
                  {ticket.priority}
                </Badge>
              </div>
              <span className="truncate text-xs font-medium">
                {ticket.subject}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62%" minSize="40%">
        <div className="flex h-full flex-col gap-3 p-3">
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="text-[10px]">EH</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">Elif Hansen</span>
            <span className="text-[11px] text-muted-foreground">
              12 min ago
            </span>
          </div>
          <p className="text-xs">
            The reset email never arrives. I&apos;ve checked spam and tried
            twice.
          </p>
          <Textarea
            placeholder="Write a reply..."
            className="mt-auto min-h-16 text-xs"
          />
          <div className="flex justify-end gap-2">
            <Button size="sm" variant="outline">
              Add note
            </Button>
            <Button size="sm">Send reply</Button>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
