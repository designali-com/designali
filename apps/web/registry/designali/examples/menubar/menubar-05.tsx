"use client"

import * as React from "react"
import { ChartColumnIcon, SigmaIcon } from "lucide-react"

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
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const formats: Record<string, string> = {
  number: "1,284.50",
  currency: "$1,284.50",
  percent: "128,450%",
  scientific: "1.28E+03",
}

export default function SpreadsheetMenubar() {
  const [format, setFormat] = React.useState("currency")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>Rows</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Insert 1 row above</MenubarItem>
                    <MenubarItem>Insert 1 row below</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Columns</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Insert 1 column left</MenubarItem>
                    <MenubarItem>Insert 1 column right</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <SigmaIcon /> Function
              </MenubarItem>
              <MenubarItem>
                <ChartColumnIcon /> Chart
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel>Number format</MenubarLabel>
              <MenubarRadioGroup value={format} onValueChange={setFormat}>
                <MenubarRadioItem value="number">Number</MenubarRadioItem>
                <MenubarRadioItem value="currency">Currency</MenubarRadioItem>
                <MenubarRadioItem value="percent">Percent</MenubarRadioItem>
                <MenubarRadioItem value="scientific">
                  Scientific
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Data</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Sort sheet A to Z</MenubarItem>
              <MenubarItem>Create a filter</MenubarItem>
              <MenubarItem>Data validation</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="grid grid-cols-[3rem_1fr] border text-xs">
        <div className="border-e bg-muted px-2 py-1.5 font-medium text-muted-foreground">
          B4
        </div>
        <div className="px-2 py-1.5 text-end font-mono tabular-nums">
          {formats[format]}
        </div>
      </div>
    </div>
  )
}
