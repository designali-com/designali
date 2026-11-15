import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const channels = [
  { name: "Organic search", base: 1200 },
  { name: "Paid social", base: 860 },
  { name: "Email", base: 540 },
  { name: "Referral", base: 310 },
]

export default function WideScrollableTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky start-0 z-10 bg-background">
              Channel
            </TableHead>
            {months.map((m) => (
              <TableHead key={m} className="text-right">
                {m}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {channels.map((channel) => (
            <TableRow key={channel.name}>
              <TableCell className="sticky start-0 z-10 bg-background font-medium">
                {channel.name}
              </TableCell>
              {months.map((m, i) => (
                <TableCell key={m} className="text-right tabular-nums">
                  {(channel.base + ((i * 97) % 400)).toLocaleString()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
