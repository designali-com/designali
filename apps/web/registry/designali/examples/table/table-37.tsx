import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const hours = ["8a", "10a", "12p", "2p", "4p", "6p"]
const week = [
  { day: "Mon", values: [2, 5, 8, 6, 4, 1] },
  { day: "Tue", values: [3, 7, 9, 8, 5, 2] },
  { day: "Wed", values: [1, 4, 6, 9, 7, 3] },
  { day: "Thu", values: [2, 6, 7, 5, 4, 2] },
  { day: "Fri", values: [1, 3, 5, 4, 2, 0] },
]

export default function HeatmapCellsTable() {
  return (
    <div className="w-full max-w-md border">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12" />
            {hours.map((h) => (
              <TableHead
                key={h}
                className="px-1 text-center text-muted-foreground"
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {week.map((row) => (
            <TableRow key={row.day} className="border-0 hover:bg-transparent">
              <TableCell className="py-0.5 font-medium">{row.day}</TableCell>
              {row.values.map((v, i) => (
                <TableCell key={hours[i]} className="p-0.5">
                  <div
                    className="flex h-7 items-center justify-center bg-primary text-[10px] text-primary-foreground tabular-nums"
                    style={{ opacity: 0.1 + v / 10 }}
                    title={row.day + " " + hours[i] + ": " + v + " sessions"}
                  >
                    {v}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
