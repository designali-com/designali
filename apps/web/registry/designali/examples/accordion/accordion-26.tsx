import { ChevronDownIcon, DownloadIcon, ReceiptIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const invoices = [
  {
    value: "nov",
    month: "November 2026",
    status: "Due Dec 1",
    amount: 312,
    lines: [
      { label: "Team plan, 12 seats", amount: 288 },
      { label: "Extra storage, 200 GB", amount: 24 },
    ],
  },
  {
    value: "oct",
    month: "October 2026",
    status: "Paid",
    amount: 288,
    lines: [{ label: "Team plan, 12 seats", amount: 288 }],
  },
  {
    value: "sep",
    month: "September 2026",
    status: "Paid",
    amount: 264,
    lines: [{ label: "Team plan, 11 seats", amount: 264 }],
  },
]

export default function AccordionBillingInvoices() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-sm font-medium">Billing history</p>
      <Accordion className="border px-3">
        {invoices.map((invoice) => (
          <AccordionItem key={invoice.value} value={invoice.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                <ReceiptIcon className="size-4 text-muted-foreground" />
                {invoice.month}
              </span>
              <span className="ms-auto me-2 flex items-center gap-2">
                <span className="font-normal text-muted-foreground">
                  {invoice.status}
                </span>
                <span>${invoice.amount}.00</span>
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {invoice.lines.map((line) => (
                <div
                  key={line.label}
                  className="flex justify-between text-muted-foreground"
                >
                  <span>{line.label}</span>
                  <span>${line.amount}.00</span>
                </div>
              ))}
              <Button size="xs" variant="outline">
                <DownloadIcon data-icon="inline-start" />
                Download PDF
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
