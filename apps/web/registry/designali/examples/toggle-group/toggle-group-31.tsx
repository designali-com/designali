import {
  CreditCard as CreditCardIcon,
  Landmark as LandmarkIcon,
  Wallet as WalletIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const methods = [
  { value: "card", label: "Card", icon: CreditCardIcon },
  { value: "bank", label: "Bank", icon: LandmarkIcon },
  { value: "wallet", label: "Wallet", icon: WalletIcon },
]

export default function PaymentMethodToggleGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-sm font-medium">Payment method</span>
      <ToggleGroup
        variant="outline"
        spacing={2}
        defaultValue={["card"]}
        className="grid w-full grid-cols-3"
      >
        {methods.map((m) => (
          <ToggleGroupItem
            key={m.value}
            value={m.value}
            className="h-16 flex-col gap-1.5"
          >
            <m.icon className="size-5" />
            {m.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
