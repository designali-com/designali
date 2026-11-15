import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function WideHoverHandle() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-44 w-full max-w-md border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center text-xs">
          Source
        </div>
      </ResizablePanel>
      <ResizableHandle className="w-2 bg-muted transition-colors data-[separator=active]:bg-primary data-[separator=hover]:bg-primary/40" />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
          Target
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
