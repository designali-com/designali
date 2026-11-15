"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const customers = [
  {
    id: "cus_8F2",
    name: "Marta Kowal",
    plan: "Team",
    mrr: 590,
    status: "Active",
    since: "Mar 2024",
  },
  {
    id: "cus_3K9",
    name: "Dev Patel",
    plan: "Pro",
    mrr: 24,
    status: "Past due",
    since: "Jan 2026",
  },
  {
    id: "cus_1Q4",
    name: "Yara Haddad",
    plan: "Pro",
    mrr: 48,
    status: "Active",
    since: "Aug 2025",
  },
]

type Customer = (typeof customers)[number]

export default function TableRowDetailsDialog() {
  const [selected, setSelected] = React.useState<Customer | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-end">MRR</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.plan}</TableCell>
              <TableCell className="text-end tabular-nums">
                {"$" + customer.mrr}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={"View " + customer.name}
                  onClick={() => setSelected(customer)}
                >
                  <ChevronRightIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <DialogTitle>{selected.name}</DialogTitle>
                  <Badge
                    variant={
                      selected.status === "Active" ? "secondary" : "destructive"
                    }
                  >
                    {selected.status}
                  </Badge>
                </div>
                <DialogDescription className="font-mono">
                  {selected.id}
                </DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-2">
                <dt className="text-muted-foreground">Plan</dt>
                <dd>{selected.plan}</dd>
                <dt className="text-muted-foreground">Monthly revenue</dt>
                <dd>{"$" + selected.mrr}</dd>
                <dt className="text-muted-foreground">Customer since</dt>
                <dd>{selected.since}</dd>
              </dl>
              <DialogFooter>
                <Button variant="outline">Issue refund</Button>
                <Button>Open in billing</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
