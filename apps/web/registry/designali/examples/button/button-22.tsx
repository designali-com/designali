import {
  Search as SearchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function ShortcutHintButton() {
  return (
    <Button
      variant="outline"
      className="w-full max-w-xs justify-start text-muted-foreground"
    >
      <SearchIcon data-icon="inline-start" />
      <span className="flex-1 text-left">Search Designali docs...</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  )
}
