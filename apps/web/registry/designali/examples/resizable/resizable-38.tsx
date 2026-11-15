import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function KeyboardResizeHint() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup orientation="horizontal" className="h-36 border">
        <ResizablePanel defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs">
            Outline
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          aria-label="Resize outline"
          className="focus-visible:ring-2"
        />
        <ResizablePanel defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs">
            Document
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        Tab to the handle, then press
        <KbdGroup>
          <Kbd>&larr;</Kbd>
          <Kbd>&rarr;</Kbd>
        </KbdGroup>
        to resize or
        <Kbd>Enter</Kbd>
        to toggle.
      </p>
    </div>
  )
}
