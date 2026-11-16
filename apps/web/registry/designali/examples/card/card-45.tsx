"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  Download as DownloadIcon,
  Mail as MailIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const lines = [
  { label: "Designali Pro · 12 seats", amount: "$216.00" },
  { label: "Icons add-on · 4000+ icons", amount: "$20.00" },
  { label: "VAT (21%)", amount: "$49.56" },
]

export default function ExpandableInvoiceCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invoice INV-2026-0118</CardTitle>
        <CardDescription>Issued Nov 1 · due Nov 15</CardDescription>
        <CardAction>
          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
            Paid
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold tabular-nums">$285.56</span>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
              {open ? "Hide details" : "Show details"}
              <ChevronDownIcon
                data-icon="inline-end"
                className={cn("transition-transform", open && "rotate-180")}
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-3 grid gap-2 border-t pt-3">
            {lines.map((l) => (
              <div
                key={l.label}
                className="flex justify-between text-muted-foreground"
              >
                <span>{l.label}</span>
                <span className="tabular-nums">{l.amount}</span>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <DownloadIcon data-icon="inline-start" />
          PDF
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <MailIcon data-icon="inline-start" />
          Email
        </Button>
      </CardFooter>
    </Card>
  )
}
