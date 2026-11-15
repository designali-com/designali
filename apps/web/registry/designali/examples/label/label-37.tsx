import { SearchIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function VisuallyHiddenSearchLabel() {
  return (
    <div className="relative w-full max-w-sm">
      <Label htmlFor="site-search" className="sr-only">
        Search files
      </Label>
      <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        id="site-search"
        type="search"
        placeholder="Search files and folders"
        className="ps-8"
      />
    </div>
  )
}
