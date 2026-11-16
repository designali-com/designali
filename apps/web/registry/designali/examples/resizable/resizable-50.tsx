import {
  Lock as LockIcon,
} from "@designali/icons"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function DisabledHandleSection() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="h-72 w-full max-w-md border"
    >
      <ResizablePanel defaultSize="20%" minSize="20%" maxSize="20%">
        <div className="flex h-full items-center gap-2 bg-muted/40 px-3 text-xs font-medium">
          <LockIcon className="size-3.5" />
          Fixed toolbar
        </div>
      </ResizablePanel>
      <ResizableHandle disabled />
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="flex h-full items-center justify-center text-xs">
          Timeline
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="30%" minSize="15%">
        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
          Properties
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
