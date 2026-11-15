import { ChevronRightIcon, CircleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const trace = [
  "TypeError: Cannot read properties of undefined (reading 'amount')",
  "    at formatInvoice (invoice.ts:42:18)",
  "    at InvoiceRow (invoice-row.tsx:17:9)",
  "    at renderWithHooks (react-dom.js:1622:22)",
]

export default function ErrorStackTrace() {
  return (
    <Alert variant="error" className="w-full max-w-md">
      <CircleAlertIcon />
      <AlertTitle>Failed to render invoices</AlertTitle>
      <AlertDescription>
        <p>
          Something went wrong while loading this page. Our team has been
          notified.
        </p>
        <Collapsible className="mt-2 w-full">
          <CollapsibleTrigger
            render={
              <Button
                variant="link"
                size="xs"
                className="h-auto px-0 text-destructive"
              />
            }
          >
            <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
            Technical details
          </CollapsibleTrigger>
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <pre className="mt-2 overflow-x-auto bg-muted p-3 font-mono text-[11px] leading-relaxed text-foreground">
              {trace.join("\n")}
            </pre>
          </CollapsibleContent>
        </Collapsible>
      </AlertDescription>
    </Alert>
  )
}
