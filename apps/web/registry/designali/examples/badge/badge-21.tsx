import { Badge } from "@workspace/ui/components/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const rows = [
  { customer: "Juniper Foods", plan: "Business", status: "Active" },
  { customer: "Halcyon Travel", plan: "Starter", status: "Trialing" },
  { customer: "Marrow & Co", plan: "Business", status: "Past due" },
  { customer: "Tidewater Inc", plan: "Enterprise", status: "Canceled" },
]

const variants = {
  Active: "default",
  Trialing: "secondary",
  "Past due": "destructive",
  Canceled: "outline",
} as const

export default function SubscriptionTableStatus() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.customer}>
              <TableCell className="font-medium">{row.customer}</TableCell>
              <TableCell className="text-muted-foreground">
                {row.plan}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant={variants[row.status as keyof typeof variants]}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
