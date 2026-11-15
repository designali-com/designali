import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function SearchShortcutInput() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search docs, issues, people..." />
      <InputGroupAddon align="inline-end">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroup>
  )
}
