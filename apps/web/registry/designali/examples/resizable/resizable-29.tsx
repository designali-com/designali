import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function PixelSizedSidebar() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-48 w-full max-w-xl border"
    >
      <ResizablePanel
        defaultSize="180px"
        minSize="120px"
        maxSize="260px"
        groupResizeBehavior="preserve-pixel-size"
      >
        <div className="flex h-full flex-col justify-center gap-1 bg-muted/40 p-3">
          <span className="text-xs font-medium">Sidebar</span>
          <span className="font-sans text-[11px] text-muted-foreground">
            120px - 260px
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="flex h-full flex-col justify-center gap-1 p-3">
          <span className="text-xs font-medium">Main content</span>
          <span className="text-[11px] text-muted-foreground">
            Takes the remaining space and absorbs window resizes.
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
