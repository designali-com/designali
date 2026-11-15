import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const columns = [
  { title: "To do", tasks: ["Audit onboarding emails", "Draft pricing FAQ"] },
  { title: "In progress", tasks: ["Billing page redesign", "Webhook retries"] },
  { title: "Done", tasks: ["SSO for Teams plan"] },
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
