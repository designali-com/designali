import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { cn } from "@workspace/ui/lib/utils"

const endpoints = [
  {
    value: "list",
    method: "GET",
    path: "/v1/invoices",
    summary: "List invoices for the current account.",
    params: [
      { name: "limit", type: "integer", note: "1 to 100, default 20" },
      { name: "status", type: "string", note: "draft, open or paid" },
    ],
  },
  {
    value: "create",
    method: "POST",
    path: "/v1/invoices",
    summary: "Create a draft invoice for a customer.",
    params: [
      { name: "customer", type: "string", note: "Required customer ID" },
      { name: "due_date", type: "date", note: "ISO 8601 date" },
    ],
  },
  {
    value: "delete",
    method: "DELETE",
    path: "/v1/invoices/:id",
    summary: "Delete a draft invoice. Finalised invoices cannot be deleted.",
    params: [{ name: "id", type: "string", note: "Invoice ID in the path" }],
  },
]

const methodClass: Record<string, string> = {
  GET: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  POST: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  DELETE: "bg-destructive/15 text-destructive",
}

export default function AccordionApiEndpoints() {
  return (
    <Accordion defaultValue={["list"]} className="w-full max-w-md border px-3">
      {endpoints.map((endpoint) => (
        <AccordionItem key={endpoint.value} value={endpoint.value}>
          <AccordionTrigger className="items-center font-mono">
            <span className="flex min-w-0 items-center gap-2">
              <span
                className={cn(
                  "w-14 shrink-0 py-0.5 text-center text-[10px] font-semibold",
                  methodClass[endpoint.method]
                )}
              >
                {endpoint.method}
              </span>
              <span className="truncate">{endpoint.path}</span>
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            <p className="text-muted-foreground">{endpoint.summary}</p>
            <div className="border">
              {endpoint.params.map((param) => (
                <div
                  key={param.name}
                  className="grid grid-cols-[1fr_auto] gap-x-2 border-b px-2 py-1.5 last:border-0"
                >
                  <code className="font-mono">{param.name}</code>
                  <span className="text-muted-foreground">{param.type}</span>
                  <span className="col-span-2 text-muted-foreground">
                    {param.note}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
