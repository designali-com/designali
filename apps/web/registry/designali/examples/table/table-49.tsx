import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const cities = [
  { city: "Lisbon", temp: 17, rain: 112, sun: 6.1 },
  { city: "Oslo", temp: 2, rain: 74, sun: 1.2 },
  { city: "Nairobi", temp: 21, rain: 61, sun: 7.4 },
  { city: "Sapporo", temp: 1, rain: 104, sun: 2.9 },
]

export default function CaptionedDataTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableCaption className="mt-0 caption-top border-b px-2 py-2 text-start">
          <span className="font-medium text-foreground">
            November climate averages
          </span>
          <span className="block">
            Source: fictional weather service, 1995-2025
          </span>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">City</TableHead>
            <TableHead scope="col" className="text-right">
              Temp (°C)
            </TableHead>
            <TableHead scope="col" className="text-right">
              Rain (mm)
            </TableHead>
            <TableHead scope="col" className="text-right">
              Sun (h/day)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map((c) => (
            <TableRow key={c.city}>
              <TableHead scope="row" className="font-medium">
                {c.city}
              </TableHead>
              <TableCell className="text-right tabular-nums">
                {c.temp}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {c.rain}
              </TableCell>
              <TableCell className="text-right tabular-nums">{c.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
