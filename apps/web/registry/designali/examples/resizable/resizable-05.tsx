import {
  FileCode as FileCodeIcon,
} from "@designali/icons"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const files = ["app.tsx", "routes.ts", "server.ts", "utils.ts", "styles.css"]

const lines = [
  "import { createServer } from './server'",
  "",
  "const port = Number(process.env.PORT ?? 3000)",
  "const app = createServer()",
  "",
  "app.listen(port)",
]

export default function CodeEditorWithTerminal() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border font-sans"
    >
      <ResizablePanel defaultSize="25%" minSize="15%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          <span className="px-2 py-1 font-sans text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
            Explorer
          </span>
          {files.map((file, i) => (
            <div
              key={file}
              className={cn(
                "flex items-center gap-2 px-2 py-1",
                i === 2 && "bg-muted"
              )}
            >
              <FileCodeIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{file}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="65%" minSize="30%">
            <div className="h-full overflow-hidden p-3 text-xs">
              {lines.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-4 shrink-0 text-right text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="truncate whitespace-pre">{line}</span>
                </div>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="35%" minSize="15%">
            <div className="flex h-full flex-col gap-1 bg-muted/40 p-3 text-xs">
              <span className="text-muted-foreground">$ pnpm dev</span>
              <span>ready - started server on 0.0.0.0:3000</span>
              <span className="text-primary dark:text-primary">
                compiled successfully in 412ms
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
