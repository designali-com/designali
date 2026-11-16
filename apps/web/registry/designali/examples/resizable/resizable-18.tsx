import {
  Frame as FrameIcon,
  Shapes as ShapesIcon,
  Square as SquareIcon,
  Type as TypeIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const layers = [
  { name: "Header", icon: FrameIcon },
  { name: "Hero title", icon: TypeIcon },
  { name: "CTA button", icon: SquareIcon },
  { name: "Illustration", icon: ShapesIcon },
]

export default function DesignToolPanels() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="22%" minSize="15%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          <span className="px-1 pb-1 text-[10px] font-medium text-muted-foreground uppercase">
            Layers
          </span>
          {layers.map((layer, i) => (
            <div
              key={layer.name}
              className={cn(
                "flex items-center gap-2 px-1 py-1",
                i === 2 && "bg-primary/10 text-primary"
              )}
            >
              <layer.icon className="size-3.5 shrink-0" />
              <span className="truncate">{layer.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="56%" minSize="30%">
        <div className="relative flex h-full items-center justify-center bg-muted/50 p-4">
          <DotPattern
            width={12}
            height={12}
            dotSize={1}
            className="rounded-none p-0 text-muted-foreground"
          />
          <div className="relative flex w-full max-w-40 flex-col gap-2 border bg-background p-3 shadow-sm">
            <div className="h-2 w-2/3 bg-foreground/80" />
            <div className="h-1.5 w-full bg-muted-foreground/30" />
            <div className="h-5 w-16 border-2 border-primary bg-primary/80" />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="22%" minSize="15%">
        <div className="flex h-full flex-col gap-2 p-2 text-xs">
          <span className="text-[10px] font-medium text-muted-foreground uppercase">
            Properties
          </span>
          <div className="grid grid-cols-2 gap-1">
            <Input
              aria-label="Width"
              defaultValue="96"
              className="h-7 text-xs"
            />
            <Input
              aria-label="Height"
              defaultValue="32"
              className="h-7 text-xs"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 border bg-primary" />
            <span className="font-sans">primary</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
