import {
  Package as PackageIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const items = [
  { sku: "TPL-PORTFOLIO", name: "Portfolio template launch seats", left: 4 },
  { sku: "TPL-AGENCY", name: "Design agency template seats", left: 7 },
  { sku: "KIT-BLOCKS", name: "Blocks early-bird licences", left: 2 },
]

export default function AlertLowStock() {
  return (
    <Alert variant="warning" className="max-w-md">
      <PackageIcon />
      <AlertTitle>3 Designali offers are almost sold out</AlertTitle>
      <AlertDescription>
        <table className="my-1 w-full">
          <tbody>
            {items.map((item) => (
              <tr key={item.sku} className="border-b last:border-0">
                <td className="py-1 pe-2 font-sans text-[10px]">{item.sku}</td>
                <td className="py-1 text-foreground">{item.name}</td>
                <td className="py-1 text-end font-medium text-foreground">
                  {item.left} left
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button size="xs" variant="outline" className="mt-1">
          Add more seats
        </Button>
      </AlertDescription>
    </Alert>
  )
}
