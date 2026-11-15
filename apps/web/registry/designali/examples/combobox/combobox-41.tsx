"use client"

import {
  BookOpenIcon,
  CreditCardIcon,
  PlugIcon,
  RocketIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

type Category = { name: string; count: number; icon: typeof BookOpenIcon }

const categories: Category[] = [
  { name: "Getting started", count: 12, icon: RocketIcon },
  { name: "Billing & payments", count: 18, icon: CreditCardIcon },
  { name: "Integrations", count: 24, icon: PlugIcon },
  { name: "Security & privacy", count: 9, icon: ShieldCheckIcon },
  { name: "Troubleshooting", count: 31, icon: WrenchIcon },
]

export default function HelpCenterCategoryCounts() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <BookOpenIcon className="size-4" />
        Browse articles
      </p>
      <Combobox items={categories} itemToStringLabel={(c: Category) => c.name}>
        <ComboboxInput placeholder="Choose a category" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No categories found.</ComboboxEmpty>
          <ComboboxList>
            {(c: Category) => (
              <ComboboxItem key={c.name} value={c}>
                <c.icon className="text-muted-foreground" />
                <span className="flex-1">{c.name}</span>
                <Badge
                  variant="secondary"
                  className="h-4 px-1.5 text-[10px] tabular-nums"
                >
                  {c.count}
                </Badge>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
