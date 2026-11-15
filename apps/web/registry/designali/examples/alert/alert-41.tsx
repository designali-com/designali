import { PackageIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const items = [
  { sku: "MUG-SAGE-12", name: "Stoneware mug, sage", left: 4 },
  { sku: "TEE-BLK-M", name: "Heavyweight tee, M", left: 7 },
  { sku: "TOTE-NAT", name: "Canvas tote", left: 2 },
]

export default function AlertLowStock() {
  return (
    <Alert variant="warning" className="max-w-md">
      <PackageIcon />
      <AlertTitle>3 products are running low</AlertTitle>
      <AlertDescription>
        <table className="my-1 w-full">
          <tbody>
            {items.map((item) => (
              <tr key={item.sku} className="border-b last:border-0">
                <td className="py-1 pe-2 font-mono text-[10px]">{item.sku}</td>
                <td className="py-1 text-foreground">{item.name}</td>
                <td className="py-1 text-end font-medium text-foreground">
                  {item.left} left
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button size="xs" variant="outline" className="mt-1">
          Create purchase order
        </Button>
      </AlertDescription>
    </Alert>
  )
}
