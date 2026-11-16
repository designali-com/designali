import {
  Bookmark as BookmarkIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}