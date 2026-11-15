import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function MinMaxConstraints() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-44 w-full max-w-lg border"
    >
      <ResizablePanel defaultSize="30%" minSize="20%" maxSize="40%">
        <div className="flex h-full flex-col items-center justify-center gap-1 bg-muted/40 p-3 text-center">
          <span className="text-xs font-medium">Navigation</span>
          <Badge variant="outline">20% - 40%</Badge>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%" minSize="60%">
        <div className="flex h-full flex-col items-center justify-center gap-1 p-3 text-center">
          <span className="text-xs font-medium">Workspace</span>
          <Badge variant="outline">min 60%</Badge>
          <p className="max-w-48 text-[11px] text-muted-foreground">
            The handle stops when either panel reaches its limit.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
