import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const quarters = ["Q1", "Q2", "Q3", "Q4"]
const regions = [
  { name: "North America", values: [412, 455, 498, 530] },
  { name: "Europe", values: [301, 322, 340, 365] },
  { name: "Asia Pacific", values: [190, 228, 260, 301] },
]

export default function BorderedGridTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table className="[&_td]:border-e [&_td:last-child]:border-e-0 [&_th]:border-e [&_th:last-child]:border-e-0">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Region ($K)</TableHead>
            {quarters.map((q) => (
              <TableHead key={q} className="text-right">
                {q}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {regions.map((region) => (
            <TableRow key={region.name}>
              <TableCell className="font-medium">{region.name}</TableCell>
              {region.values.map((v, i) => (
                <TableCell
                  key={quarters[i]}
                  className="text-right tabular-nums"
                >
                  {v}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            {quarters.map((q, i) => (
              <TableCell key={q} className="text-right tabular-nums">
                {regions.reduce((s, r) => s + r.values[i]!, 0)}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
