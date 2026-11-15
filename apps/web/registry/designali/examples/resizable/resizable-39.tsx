import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const editors = [
  { lang: "HTML", code: "<button class='cta'>Buy</button>" },
  { lang: "CSS", code: ".cta { padding: 8px 16px; }" },
  { lang: "JS", code: "cta.onclick = () => checkout()" },
]

export default function CodePlaygroundPreview() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-80 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="50%" minSize="30%">
        <ResizablePanelGroup orientation="vertical">
          {editors.map((editor, i) => (
            <React.Fragment key={editor.lang}>
              {i > 0 && <ResizableHandle />}
              <ResizablePanel minSize="15%">
                <div className="flex h-full flex-col">
                  <span className="border-b bg-muted/40 px-2 py-1 text-[10px] font-medium">
                    {editor.lang}
                  </span>
                  <code className="truncate p-2 font-mono text-[11px]">
                    {editor.code}
                  </code>
                </div>
              </ResizablePanel>
            </React.Fragment>
          ))}
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="25%">
        <div className="flex h-full items-center justify-center">
          <Button>Buy</Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
