import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"

const columns = [
  "Invoice",
  "Customer",
  "Email",
  "Plan",
  "Amount",
  "Status",
  "Issued",
  "Due",
]
const rows = Array.from({ length: 12 }, (_, i) => [
  "INV-" + (2040 + i),
  ["Kai", "Rosa", "Omar", "Lena"][i % 4],
  ["kai", "rosa", "omar", "lena"][i % 4] + "@example.com",
  ["Pro", "Team", "Starter"][i % 3],
  "$" + (49 + i * 12) + ".00",
  ["Paid", "Pending", "Overdue"][i % 3],
  "Oct " + (i + 1),
  "Nov " + (i + 1),
])

export default function WideDataTable() {
  return (
    <ScrollArea className="h-72 w-full max-w-md border">
      <table className="w-max min-w-full text-xs">
        <thead className="sticky top-0 z-10 bg-muted">
          <tr>
            {columns.map((c) => (
              <th
                key={c}
                className="px-3 py-2 text-left font-medium whitespace-nowrap"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t">
              {row.map((cell, i) => (
                <td key={i} className="px-3 py-2 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
