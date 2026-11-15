"use client"

import * as React from "react"
import { FileIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

export default function FileRenameInput() {
  const [name, setName] = React.useState("invoice-march-final")

  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-2">
      <FileIcon className="size-5 shrink-0 text-muted-foreground" />
      <InputGroup className="flex-1">
        <InputGroupInput
          aria-label="File name"
          value={name}
          autoFocus
          onFocus={(e) => e.target.select()}
          onChange={(e) => setName(e.target.value.replace(/[\\/:*?"<>|]/g, ""))}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.pdf</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Button size="sm" disabled={!name.trim()}>
        Rename
      </Button>
    </div>
  )
}
