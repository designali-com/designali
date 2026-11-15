import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LoadingSkeletonPanels() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-xl border"
    >
      <ResizablePanel defaultSize="35%" minSize="25%">
        <div className="flex h-full flex-col gap-3 p-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="size-8 shrink-0" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-2.5 w-3/4" />
                <Skeleton className="h-2 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65%" minSize="40%">
        <div className="flex h-full flex-col gap-3 p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Spinner />
            Loading conversation...
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
