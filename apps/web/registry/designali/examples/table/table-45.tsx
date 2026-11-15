"use client"

import * as React from "react"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const rates = [
  {
    id: "ground",
    carrier: "Parcelway Ground",
    eta: "5-7 business days",
    price: 0,
  },
  {
    id: "two-day",
    carrier: "Parcelway 2-Day",
    eta: "2 business days",
    price: 12.5,
  },
  {
    id: "overnight",
    carrier: "SwiftAir Overnight",
    eta: "Next business day",
    price: 29,
  },
]

export default function ShippingRatesTable() {
  const [rate, setRate] = React.useState("two-day")

  return (
    <RadioGroup
      value={rate}
      onValueChange={(v) => setRate(v as string)}
      className="w-full max-w-lg gap-0 border"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Method</TableHead>
            <TableHead>Delivery</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map((r) => (
            <TableRow
              key={r.id}
              data-state={rate === r.id ? "selected" : undefined}
              className="cursor-pointer"
              onClick={() => setRate(r.id)}
            >
              <TableCell>
                <RadioGroupItem value={r.id} aria-label={r.carrier} />
              </TableCell>
              <TableCell className="font-medium">{r.carrier}</TableCell>
              <TableCell className="text-muted-foreground">{r.eta}</TableCell>
              <TableCell className="text-right tabular-nums">
                {r.price === 0 ? "Free" : "$" + r.price.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RadioGroup>
  )
}
