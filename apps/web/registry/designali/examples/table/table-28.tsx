import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@workspace/ui/components/table"

const specs = [
  ["Framework", "Next.js"],
  ["Language", "TypeScript"],
  ["Styling", "Tailwind CSS"],
  ["Design files", "Figma"],
  ["Icons", "@designali/icons"],
  ["Deploy", "Vercel"],
]

export default function KeyValueSpecTable() {
  return (
    <div className="w-full max-w-sm border">
      <Table>
        <TableCaption className="mb-3">
          Designali portfolio template specifications
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
