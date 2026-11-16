"use client"

import * as React from "react"
import {
  Archive as ArchiveIcon,
  ArrowDownToLine as ArrowDownToLineIcon,
  ArrowUpFromLine as ArrowUpFromLineIcon,
  GitBranch as GitBranchIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import {
  Menubar,
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

const branches = ["main", "feat/billing-portal", "fix/rate-limit", "chore/deps"]

export default function GitBranchMenubar() {
  const [branch, setBranch] = React.useState("feat/billing-portal")

  return (
    <Menubar className="w-full max-w-md">
      <MenubarMenu>
        <MenubarTrigger>Repository</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarItem>
              <ArrowDownToLineIcon /> Pull{" "}
              <MenubarShortcut>⇧⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ArrowUpFromLineIcon /> Push <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <RefreshCwIcon /> Fetch origin
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <ArchiveIcon /> Stash changes
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Branch</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarGroup>
            <MenubarLabel inset>Switch to</MenubarLabel>
            <MenubarRadioGroup value={branch} onValueChange={setBranch}>
              {branches.map((b) => (
                <MenubarRadioItem key={b} value={b} className="font-sans">
                  {b}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              New branch... <MenubarShortcut>⇧⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset disabled={branch === "main"}>
              Merge into main
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <span className="ms-auto flex min-w-0 items-center gap-1 pe-1 font-sans text-[11px] text-muted-foreground">
        <GitBranchIcon className="size-3 shrink-0" />
        <span className="truncate">{branch}</span>
      </span>
    </Menubar>
  )
}
