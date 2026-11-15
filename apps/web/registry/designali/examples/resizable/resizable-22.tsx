import { SendIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const response = {
  id: "ord_8F2kq",
  status: "fulfilled",
  total: 129.5,
  currency: "EUR",
}

export default function ApiPlaygroundSplit() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="50%" minSize="35%">
        <div className="flex h-full flex-col gap-3 p-3">
          <div className="flex gap-1">
            <Badge>GET</Badge>
            <Input
              aria-label="Endpoint"
              defaultValue="/v1/orders/ord_8F2kq"
              className="h-7 font-mono text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-medium">Headers</span>
            <span className="font-mono text-muted-foreground">
              Authorization: Bearer key_demo_...
            </span>
            <span className="font-mono text-muted-foreground">
              Accept: application/json
            </span>
          </div>
          <Button size="sm" className="mt-auto self-start">
            <SendIcon data-icon="inline-start" />
            Send request
          </Button>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col bg-muted/40">
          <div className="flex items-center gap-2 border-b px-3 py-1.5 text-xs">
            <Badge variant="secondary">200 OK</Badge>
            <span className="text-muted-foreground">84 ms</span>
          </div>
          <pre className="flex-1 overflow-auto p-3 font-mono text-[11px]">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
