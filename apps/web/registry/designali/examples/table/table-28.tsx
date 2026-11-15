import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@workspace/ui/components/table"

const specs = [
  ["Dimensions", "38 × 26 × 14 cm"],
  ["Weight", "1.2 kg"],
  ["Material", "Recycled ripstop nylon"],
  ["Capacity", "24 liters"],
  ["Laptop sleeve", "Fits up to 16 in"],
  ["Warranty", "Lifetime"],
]

export default function KeyValueSpecTable() {
  return (
    <div className="w-full max-w-sm border">
      <Table>
        <TableCaption className="mb-3">
          Trailhead Daypack specifications
        </TableCaption>
        <TableBody>
          {specs.map(([label, value]) => (
            <TableRow key={label}>
              <TableHead
                scope="row"
                className="w-36 bg-muted/40 text-muted-foreground"
              >
                {label}
              </TableHead>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
