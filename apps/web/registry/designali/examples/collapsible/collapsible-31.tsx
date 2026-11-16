import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const endpoints = [
  {
    method: "GET",
    path: "/v1/invoices",
    summary: "List invoices",
    params: [
      { name: "status", type: "string", desc: "Filter by open, paid or void" },
      { name: "limit", type: "integer", desc: "Between 1 and 100" },
    ],
  },
  {
    method: "POST",
    path: "/v1/invoices",
    summary: "Create an invoice",
    params: [
      { name: "customer", type: "string", desc: "Customer ID" },
      { name: "due_date", type: "date", desc: "ISO 8601 date" },
    ],
  },
]

export default function ApiEndpointReference() {
  return (
    <div className="w-full max-w-md space-y-2">
      {endpoints.map((endpoint) => (
        <Collapsible key={endpoint.method + endpoint.path} className="border">
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="w-full justify-start px-3 font-mono"
              >
                <Badge
                  variant={endpoint.method === "GET" ? "secondary" : "default"}
                  className="w-12"
                >
                  {endpoint.method}
                </Badge>
                {endpoint.path}
                <span className="ml-auto hidden font-sans text-xs font-normal text-muted-foreground sm:inline">
                  {endpoint.summary}
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="border-t px-3 py-2">
              <p className="mb-2 text-xs font-medium text-muted-foreground uppercase">
                Parameters
              </p>
              {endpoint.params.map((param) => (
                <div
                  key={param.name}
                  className="flex flex-wrap items-baseline gap-2 py-1 text-xs"
                >
                  <code className="font-semibold">{param.name}</code>
                  <span className="text-muted-foreground">{param.type}</span>
                  <span className="w-full text-muted-foreground sm:w-auto sm:flex-1 sm:text-right">
                    {param.desc}
                  </span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
