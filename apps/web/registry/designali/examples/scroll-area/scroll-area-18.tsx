import { FileIcon, FolderIcon } from "lucide-react"

import { ScrollArea } from "@workspace/ui/components/scroll-area"

const tree = [
  { name: "src", depth: 0, folder: true },
  { name: "app", depth: 1, folder: true },
  { name: "layout.tsx", depth: 2 },
  { name: "page.tsx", depth: 2 },
  { name: "dashboard", depth: 2, folder: true },
  { name: "page.tsx", depth: 3 },
  { name: "loading.tsx", depth: 3 },
  { name: "components", depth: 1, folder: true },
  { name: "header.tsx", depth: 2 },
  { name: "sidebar.tsx", depth: 2 },
  { name: "chart.tsx", depth: 2 },
  { name: "lib", depth: 1, folder: true },
  { name: "db.ts", depth: 2 },
  { name: "auth.ts", depth: 2 },
  { name: "package.json", depth: 0 },
  { name: "tsconfig.json", depth: 0 },
  { name: "README.md", depth: 0 },
]

export default function FileTreeExplorer() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
        Explorer
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col py-1 text-xs">
          {tree.map((node, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 py-1 pr-3 hover:bg-muted"
              style={{ paddingLeft: 12 + node.depth * 14 }}
            >
              {node.folder ? (
                <FolderIcon className="size-3.5 shrink-0 text-sky-500" />
              ) : (
                <FileIcon className="size-3.5 shrink-0 text-muted-foreground" />
              )}
              <span className="truncate">{node.name}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
