import {
  FileDiff as FileDiffIcon,
} from "@designali/icons"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const before = [
  { text: "function total(items) {", kind: "same" },
  { text: "  let sum = 0", kind: "removed" },
  { text: "  for (const i of items) sum += i.price", kind: "removed" },
  { text: "  return sum", kind: "removed" },
  { text: "}", kind: "same" },
]

const after = [
  { text: "function total(items) {", kind: "same" },
  { text: "  return items.reduce(", kind: "added" },
  { text: "    (sum, i) => sum + i.price * i.qty, 0", kind: "added" },
  { text: "  )", kind: "added" },
  { text: "}", kind: "same" },
]

function Column({ lines }: { lines: typeof before }) {
  return (
    <div className="h-full py-2 font-sans text-[11px]">
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn(
            "truncate px-3 whitespace-pre",
            line.kind === "removed" &&
              "bg-destructive/10 text-destructive dark:text-destructive",
            line.kind === "added" &&
              "bg-primary/10 text-chart-3 dark:text-chart-1"
          )}
        >
          {line.kind === "removed" ? "- " : line.kind === "added" ? "+ " : "  "}
          {line.text}
        </div>
      ))}
    </div>
  )
}

export default function SideBySideDiff() {
  return (
    <div className="w-full max-w-2xl border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs">
        <FileDiffIcon className="size-3.5" />
        <span className="font-sans">src/cart/total.ts</span>
        <span className="ml-auto text-primary dark:text-primary">
          +3
        </span>
        <span className="text-destructive dark:text-destructive">-3</span>
      </div>
      <ResizablePanelGroup orientation="horizontal" className="h-36">
        <ResizablePanel defaultSize="50%" minSize="25%">
          <Column lines={before} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%" minSize="25%">
          <Column lines={after} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
