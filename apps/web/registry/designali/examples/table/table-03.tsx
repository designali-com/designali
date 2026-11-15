import { Badge } from "@workspace/ui/components/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const orders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    date: "Nov 12",
    status: "Fulfilled",
    total: 129.0,
  },
  {
    id: "#3209",
    customer: "Jackson Lee",
    date: "Nov 12",
    status: "Processing",
    total: 39.5,
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen",
    date: "Nov 11",
    status: "Refunded",
    total: 299.0,
  },
  {
    id: "#3207",
    customer: "William Kim",
    date: "Nov 10",
    status: "Fulfilled",
    total: 74.25,
  },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Fulfilled: "default",
  Processing: "secondary",
  Refunded: "destructive",
}

export default function OrderStatusTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell className="text-muted-foreground">
                {order.date}
              </TableCell>
              <TableCell>
                <Badge variant={statusVariant[order.status]}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {"$" + order.total.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
