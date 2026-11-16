"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
  Receipt as ReceiptIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const bill = 86.4
const tips = ["10", "15", "18", "20"]

export default function SplitBillDrawer() {
  const [tip, setTip] = React.useState<string[]>(["18"])
  const [people, setPeople] = React.useState(3)
  const tipAmount = bill * (Number(tip[0] ?? 0) / 100)
  const total = bill + tipAmount

  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>
        <ReceiptIcon data-icon="inline-start" />
        Split the bill
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Designali studio lunch</DrawerTitle>
            <DrawerDescription>
              Bill before tip: {"$" + bill.toFixed(2)}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Tip</p>
              <ToggleGroup
                variant="outline"
                value={tip}
                onValueChange={(value) => setTip(value.map(String))}
                className="grid w-full grid-cols-4"
              >
                {tips.map((item) => (
                  <ToggleGroupItem key={item} value={item}>
                    {item}%
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Split between</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label="Fewer people"
                  disabled={people <= 1}
                  onClick={() => setPeople(people - 1)}
                >
                  <MinusIcon />
                </Button>
                <span className="w-6 text-center tabular-nums">{people}</span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label="More people"
                  onClick={() => setPeople(people + 1)}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 border bg-muted/40 p-3 tabular-nums">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tip</span>
                <span>{"$" + tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span>{"$" + total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-heading text-base font-semibold">
                <span>Each pays</span>
                <span>{"$" + (total / people).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Request payments</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
