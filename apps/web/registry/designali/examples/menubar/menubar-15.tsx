"use client"

import * as React from "react"
import { ArchiveIcon, PlusIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const cards = [
  { title: "Refresh onboarding emails", label: "Design" },
  { title: "Fix webhook retries", label: "Backend" },
  { title: "Audit color contrast", label: "Design" },
  { title: "Add CSV import", label: "Frontend" },
]

const labels = ["Design", "Backend", "Frontend"]

export default function KanbanBoardMenubar() {
  const [visible, setVisible] = React.useState<string[]>(labels)

  const toggle = (label: string, checked: boolean) =>
    setVisible((prev) =>
      checked ? [...prev, label] : prev.filter((l) => l !== label)
    )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Board</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Add column
              </MenubarItem>
              <MenubarItem>
                <ArchiveIcon /> Archived cards
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Filter</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel inset>Labels</MenubarLabel>
              {labels.map((label) => (
                <MenubarCheckboxItem
                  key={label}
                  checked={visible.includes(label)}
                  onCheckedChange={(checked) => toggle(label, checked)}
                  closeOnClick={false}
                >
                  {label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset onClick={() => setVisible(labels)}>
                Reset filters
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col gap-2 border bg-muted/40 p-2">
        <p className="text-xs font-medium text-muted-foreground">In progress</p>
        {cards
          .filter((card) => visible.includes(card.label))
          .map((card) => (
            <div
              key={card.title}
              className="flex items-center justify-between gap-2 border bg-background p-2 text-xs"
            >
              <span className="truncate">{card.title}</span>
              <Badge variant="outline">{card.label}</Badge>
            </div>
          ))}
        {visible.length === 0 && (
          <p className="p-2 text-center text-xs text-muted-foreground">
            No cards match the filters.
          </p>
        )}
      </div>
    </div>
  )
}
