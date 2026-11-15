"use client"

import * as React from "react"
import { FileIcon, FolderIcon, FolderPlusIcon, UploadIcon } from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const files = [
  { name: "budget-2026.xlsx", size: 48, modified: 3 },
  { name: "brand-guide.pdf", size: 2210, modified: 12 },
  { name: ".env.local", size: 1, modified: 1, hidden: true },
  { name: "invoices", size: 940, modified: 6 },
  { name: "roadmap.md", size: 6, modified: 9 },
]

export default function FileManagerSortMenubar() {
  const [sortBy, setSortBy] = React.useState("name")
  const [direction, setDirection] = React.useState("asc")
  const [showHidden, setShowHidden] = React.useState(false)

  const list = files
    .filter((f) => showHidden || !f.hidden)
    .sort((a, b) => {
      const result =
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : sortBy === "size"
            ? a.size - b.size
            : a.modified - b.modified
      return direction === "asc" ? result : -result
    })

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <FolderPlusIcon /> New folder{" "}
                <MenubarShortcut>⇧⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <UploadIcon /> Upload files
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Sort by</MenubarLabel>
              <MenubarRadioGroup value={sortBy} onValueChange={setSortBy}>
                <MenubarRadioItem value="name">Name</MenubarRadioItem>
                <MenubarRadioItem value="modified">
                  Date modified
                </MenubarRadioItem>
                <MenubarRadioItem value="size">Size</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarRadioGroup value={direction} onValueChange={setDirection}>
              <MenubarRadioItem value="asc">Ascending</MenubarRadioItem>
              <MenubarRadioItem value="desc">Descending</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={showHidden}
                onCheckedChange={setShowHidden}
              >
                Show hidden files <MenubarShortcut>⇧⌘.</MenubarShortcut>
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ul className="divide-y border text-xs">
        {list.map((file) => (
          <li key={file.name} className="flex items-center gap-2 px-3 py-2">
            {file.name.includes(".") && !file.name.startsWith(".") ? (
              <FileIcon className="size-4 text-muted-foreground" />
            ) : (
              <FolderIcon className="size-4 text-muted-foreground" />
            )}
            <span className="flex-1 truncate">{file.name}</span>
            <span className="text-muted-foreground tabular-nums">
              {file.size} KB
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
