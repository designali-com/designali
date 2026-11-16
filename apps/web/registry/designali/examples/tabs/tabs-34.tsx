import * as React from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const body = {
  id: "client_81Kq",
  name: "Designali client",
  balance: 1250,
  currency: "eur",
}
const headers = [
  ["content-type", "application/json"],
  ["x-request-id", "req_7f2a91"],
  ["cache-control", "no-store"],
]

export default function ApiResponseTabs() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-md gap-0 border">
      <div className="flex items-center justify-between border-b px-2">
        <TabsList variant="line" className="h-9">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="raw">Raw</TabsTrigger>
        </TabsList>
        <span className="flex items-center gap-1.5 text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          200 OK · 84 ms
        </span>
      </div>
      <TabsContent
        value="preview"
        className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 p-3"
      >
        {Object.entries(body).map(([k, v]) => (
          <React.Fragment key={k}>
            <span className="text-muted-foreground">{k}</span>
            <span className="font-medium">{String(v)}</span>
          </React.Fragment>
        ))}
      </TabsContent>
      <TabsContent value="headers" className="p-3 font-sans">
        {headers.map(([k, v]) => (
          <p key={k}>
            <span className="text-muted-foreground">{k}:</span> {v}
          </p>
        ))}
      </TabsContent>
      <TabsContent value="raw" className="overflow-x-auto p-3">
        <pre className="font-mono">{JSON.stringify(body, null, 2)}</pre>
      </TabsContent>
    </Tabs>
  )
}
