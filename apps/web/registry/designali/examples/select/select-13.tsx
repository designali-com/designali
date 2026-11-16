import {
  CreditCard as CreditCardIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const methods = [
  { label: "Visa ending 4242", value: "visa", brand: "VISA", expires: "08/27" },
  {
    label: "Mastercard ending 1881",
    value: "mc",
    brand: "MC",
    expires: "02/26",
  },
  { label: "Amex ending 0005", value: "amex", brand: "AMEX", expires: "11/28" },
]

export default function PaymentMethodSelect() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Pay with</span>
        <Button variant="link" size="xs">
          <PlusIcon data-icon="inline-start" />
          Add card
        </Button>
      </div>
      <Select items={methods} defaultValue="visa">
        <SelectTrigger className="h-10 w-full" aria-label="Payment method">
          <CreditCardIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {methods.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex h-5 w-9 items-center justify-center border bg-muted text-[9px] font-semibold">
                {item.brand}
              </span>
              {item.label}
              <span className="ms-auto ps-4 text-muted-foreground">
                {item.expires}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="w-full">Pay $128.00</Button>
    </div>
  )
}
