import {
  Search as SearchIcon,
} from "@designali/icons"

import { Kbd } from "@workspace/ui/components/kbd"
import { Spinner } from "@workspace/ui/components/spinner"

export default function CommandSearchLoading() {
  return (
    <div className="w-full max-w-sm border bg-popover text-popover-foreground shadow-md">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <SearchIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">onboarding checklist</span>
        <Kbd>Esc</Kbd>
      </div>
      <div className="flex items-center gap-2 px-3 py-6 text-sm text-muted-foreground">
        <Spinner />
        Searching 2,300 UI examples...
      </div>
    </div>
  )
}
