"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  GitMerge as GitMergeIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const strategies = {
  merge: "Create merge commit",
  squash: "Squash and merge",
  rebase: "Rebase and merge",
}

export default function MergeSplitButton() {
  const [strategy, setStrategy] = React.useState("squash")

  return (
    <ButtonGroup>
      <Button>
        <GitMergeIcon data-icon="inline-start" />
        {strategies[strategy as keyof typeof strategies]}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              size="icon"
              className="h-10 border-l-primary-foreground/20"
              aria-label="Choose merge strategy"
            />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuRadioGroup value={strategy} onValueChange={setStrategy}>
            {Object.entries(strategies).map(([value, label]) => (
              <DropdownMenuRadioItem key={value} value={value}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
