import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

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
    path: "/v1/templates",
    summary: "List Designali templates in your account.",
    params: [
      { name: "limit", type: "integer", note: "1 to 100, default 20" },
      { name: "category", type: "string", note: "blocks, pages or templates" },
    ],
  },
  {
    value: "create",
    method: "POST",
    path: "/v1/projects",
    summary: "Create a new client project from a template.",
    params: [
      { name: "template", type: "string", note: "Required template ID" },
      { name: "due_date", type: "date", note: "ISO 8601 date" },
    ],
  },
  {
    value: "delete",
    method: "DELETE",
    path: "/v1/projects/:id",
    summary: "Delete a draft project. Deployed projects cannot be deleted.",
    params: [{ name: "id", type: "string", note: "Project ID in the path" }],
  },
]

const methodClass: Record<string, string> = {
  GET: "bg-primary/15 text-chart-3 dark:text-chart-1",
  POST: "bg-primary/15 text-chart-3 dark:text-chart-1",
  DELETE: "bg-destructive/15 text-destructive",
}

export default function AccordionApiEndpoints() {
  return (
    <Accordion defaultValue={["list"]} className="w-full max-w-md border px-3">
      {endpoints.map((endpoint) => (
        <AccordionItem key={endpoint.value} value={endpoint.value}>
          <AccordionTrigger className="items-center font-sans">
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
