import {
  FileArchiveIcon,
  FileIcon,
  FileImageIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FileVideoIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const tree = [
  { name: "Documents", depth: 0, open: true },
  { name: "Contracts", depth: 1, open: false },
  { name: "Invoices", depth: 1, open: false },
  { name: "Design", depth: 0, open: false },
  { name: "Photos", depth: 0, open: false },
]

const items = [
  { name: "Q3-report.pdf", icon: FileTextIcon },
  { name: "budget.xlsx", icon: FileSpreadsheetIcon },
  { name: "logo.svg", icon: FileImageIcon },
  { name: "notes.md", icon: FileIcon },
  { name: "archive.zip", icon: FileArchiveIcon },
  { name: "intro.mp4", icon: FileVideoIcon },
]

export default function FileManagerSplit() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="28%" minSize="18%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          {tree.map((node) => (
            <div
              key={node.name}
              className="flex items-center gap-1.5 px-1 py-1 hover:bg-muted"
              style={{ paddingLeft: 4 + node.depth * 14 }}
            >
              {node.open ? (
                <FolderOpenIcon className="size-3.5 shrink-0" />
              ) : (
                <FolderIcon className="size-3.5 shrink-0" />
              )}
              <span className="truncate">{node.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="72%">
        <div className="grid h-full auto-rows-min grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2 p-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-1 border p-2 text-center hover:bg-muted"
            >
              <item.icon className="size-6 text-muted-foreground" />
              <span className="w-full truncate text-[11px]">{item.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
