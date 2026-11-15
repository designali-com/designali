import { MailOpenIcon } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function ReadingPaneEmptyState() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="38%" minSize="28%">
        <div className="flex h-full flex-col divide-y">
          {[
            "Weekly sync notes",
            "Your receipt from Parcel",
            "New login from Chrome",
          ].map((subject) => (
            <div key={subject} className="p-3 text-xs">
              <span className="block truncate">{subject}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62%" minSize="40%">
        <Empty className="h-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <MailOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No message selected</EmptyTitle>
            <EmptyDescription>
              Choose a conversation from the list to read it here.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
