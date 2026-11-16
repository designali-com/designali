import {
  CircleX as CircleXIcon,
  GitBranch as GitBranchIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

export default function EditorStatusBar() {
  return (
    <div className="flex h-6 w-full max-w-md items-center gap-2 overflow-hidden border bg-muted/40 px-2 font-sans text-[11px] text-muted-foreground">
      <span className="flex items-center gap-1">
        <GitBranchIcon className="size-3" />
        main
      </span>
      <Separator orientation="vertical" className="my-1" />
      <span className="flex items-center gap-1">
        <CircleXIcon className="size-3 text-destructive" />0
        <TriangleAlertIcon className="ms-1 size-3 text-primary" />2
      </span>
      <span className="ms-auto">Ln 42, Col 18</span>
      <Separator orientation="vertical" className="my-1 hidden sm:block" />
      <span className="hidden sm:inline">UTF-8</span>
      <Separator orientation="vertical" className="my-1" />
      <span>TSX</span>
    </div>
  )
}
