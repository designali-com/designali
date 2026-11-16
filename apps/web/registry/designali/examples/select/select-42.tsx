import {
  MapPin as MapPinIcon,
} from "@designali/icons"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const warehouses = [
  { label: "Rotterdam DC", value: "rtm", stock: 1240 },
  { label: "Leeds Hub", value: "lds", stock: 312 },
  { label: "Lyon Depot", value: "lyn", stock: 0 },
  { label: "Gdansk Port", value: "gdn", stock: 87 },
]

export default function WarehouseSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="warehouse">Fulfil from</FieldLabel>
      <Select items={warehouses} defaultValue="rtm">
        <SelectTrigger id="warehouse" className="w-full">
          <MapPinIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {warehouses.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.stock === 0}
            >
              {item.label}
              <span
                className={cn(
                  "ms-auto ps-4 tabular-nums",
                  item.stock < 100
                    ? "text-primary dark:text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.stock === 0 ? "Out of stock" : item.stock + " units"}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
