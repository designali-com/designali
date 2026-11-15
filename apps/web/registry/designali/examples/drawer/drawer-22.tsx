"use client"

import * as React from "react"
import {
  BriefcaseIcon,
  PlaneIcon,
  PlusIcon,
  ShapesIcon,
  UtensilsIcon,
} from "lucide-react"

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
import { Input } from "@workspace/ui/components/input"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const categories = [
  { value: "food", label: "Food", icon: UtensilsIcon },
  { value: "travel", label: "Travel", icon: PlaneIcon },
  { value: "office", label: "Office", icon: BriefcaseIcon },
  { value: "other", label: "Other", icon: ShapesIcon },
]

export default function QuickAddExpenseDrawer() {
  const [amount, setAmount] = React.useState("")
  const [category, setCategory] = React.useState<string[]>(["food"])

  return (
    <Drawer onOpenChange={(open) => !open && setAmount("")}>
      <DrawerTrigger
        render={
          <Button
            size="icon-lg"
            className="rounded-full"
            aria-label="Add expense"
          />
        }
      >
        <PlusIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>New expense</DrawerTitle>
            <DrawerDescription>
              Charged to Team Offsite budget
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center gap-4 p-4">
            <label className="flex items-baseline gap-1 font-heading text-4xl font-semibold">
              <span className="text-muted-foreground">$</span>
              <input
                inputMode="decimal"
                placeholder="0.00"
                value={amount}
                onChange={(event) =>
                  setAmount(event.target.value.replace(/[^0-9.]/g, ""))
                }
                className="w-40 bg-transparent text-center tabular-nums outline-none placeholder:text-muted-foreground/50"
                aria-label="Amount"
              />
            </label>
            <ToggleGroup
              variant="outline"
              value={category}
              onValueChange={(value) =>
                value.length && setCategory(value.map(String))
              }
              className="grid w-full grid-cols-4"
            >
              {categories.map((item) => (
                <ToggleGroupItem
                  key={item.value}
                  value={item.value}
                  className="h-14 flex-col gap-1"
                >
                  <item.icon />
                  {item.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <Input
              placeholder="Note (e.g. Team lunch at Basil)"
              aria-label="Note"
            />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={!Number(amount)} />}>
              Add expense
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
