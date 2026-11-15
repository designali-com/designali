import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const payouts = [
  {
    date: "Nov 14",
    account: "•••• 4021",
    amount: 2840.12,
    status: "In transit",
  },
  { date: "Nov 7", account: "•••• 4021", amount: 3102.5, status: "Paid" },
  { date: "Oct 31", account: "•••• 4021", amount: 2650.0, status: "Paid" },
]

export default function CardWrappedTable() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Payouts</CardTitle>
        <CardDescription>Transfers to your bank account.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            View all
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((payout) => (
              <TableRow key={payout.date}>
                <TableCell>{payout.date}</TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  {payout.account}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={payout.status === "Paid" ? "secondary" : "outline"}
                  >
                    {payout.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {"$" + payout.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
