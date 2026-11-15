"use client"

import * as React from "react"
import { WalletIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const presets = [10, 25, 50, 100]

export default function WalletTopUpSheet() {
  const [amount, setAmount] = React.useState("25")
  const value = Number(amount) || 0
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <WalletIcon data-icon="inline-start" />
        Add funds
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-sm">
        <SheetHeader className="items-center text-center">
          <div className="mx-auto mb-2 h-1 w-10 bg-muted-foreground/30" />
          <SheetTitle>Top up wallet</SheetTitle>
          <SheetDescription>Current balance: $12.40</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg font-semibold"
            />
          </InputGroup>
          <div className="grid grid-cols-4 gap-2">
            {presets.map((p) => (
              <Button
                key={p}
                variant={value === p ? "secondary" : "outline"}
                onClick={() => setAmount(String(p))}
              >
                ${p}
              </Button>
            ))}
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Processing fee</span>
            <span>${(value * 0.029).toFixed(2)}</span>
          </div>
        </div>
        <SheetFooter>
          <Button disabled={value < 5}>Add ${value.toFixed(2)}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
