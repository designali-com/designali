import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const columns = [
  { title: "To do", tasks: ["Audit icon naming", "Draft Designali pricing FAQ"] },
  { title: "In progress", tasks: ["Portfolio template redesign", "Logos package release"] },
  { title: "Done", tasks: ["Apple device mockups"] },
]

export default function KanbanResizableColumns() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-2xl border"
    >
      {columns.map((column, i) => (
        <React.Fragment key={column.title}>
          {i > 0 && <ResizableHandle />}
          <ResizablePanel minSize="20%">
            <div className="flex h-full flex-col gap-2 p-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium">{column.title}</span>
                <Badge variant="secondary">{column.tasks.length}</Badge>
              </div>
              {column.tasks.map((task) => (
                <div
                  key={task}
                  className="border bg-background p-2 text-xs shadow-xs"
                >
                  {task}
                </div>
              ))}
            </div>
          </ResizablePanel>
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  )
}
