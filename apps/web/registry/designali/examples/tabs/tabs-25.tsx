import { Badge } from "@workspace/ui/components/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const endpoints = [
  {
    value: "list",
    label: "List invoices",
    method: "GET",
    path: "/v1/invoices",
  },
  {
    value: "create",
    label: "Create invoice",
    method: "POST",
    path: "/v1/invoices",
  },
  {
    value: "void",
    label: "Void invoice",
    method: "POST",
    path: "/v1/invoices/:id/void",
  },
]

export default function VerticalLineDocsTabs() {
  return (
    <Tabs
      defaultValue="list"
      orientation="vertical"
      className="w-full max-w-md gap-4"
    >
      <TabsList variant="line" className="w-36 shrink-0 items-stretch">
        {endpoints.map((e) => (
          <TabsTrigger key={e.value} value={e.value}>
            {e.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {endpoints.map((e) => (
        <TabsContent
          key={e.value}
          value={e.value}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 font-mono">
            <Badge variant={e.method === "GET" ? "secondary" : "default"}>
              {e.method}
            </Badge>
            <span className="truncate">{e.path}</span>
          </div>
          <p className="text-muted-foreground">
            Requires a Designali API key with the invoices:write scope for writes.
          </p>
        </TabsContent>
      ))}
    </Tabs>
  )
}
