import {
  Folder as FolderIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function TruncatedPathLabel() {
  return (
    <div className="grid w-full max-w-[16rem] gap-2 border p-3">
      <Label htmlFor="rename-file" className="min-w-0">
        <FolderIcon className="size-3.5 shrink-0 text-muted-foreground" />
        <span
          className="truncate text-muted-foreground"
          title="Shared / Designali / 2026 Projects / Brand Identity / Assets"
        >
          Shared / Designali / 2026 Projects / Brand Identity / Assets
        </span>
      </Label>
      <Input id="rename-file" defaultValue="designali-hero-final-v3.fig" />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Rename</Button>
      </div>
    </div>
  )
}
