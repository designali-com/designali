import { FolderIcon } from "lucide-react"

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
          title="Shared / Marketing / 2026 Campaigns / Spring Launch / Assets"
        >
          Shared / Marketing / 2026 Campaigns / Spring Launch / Assets
        </span>
      </Label>
      <Input id="rename-file" defaultValue="hero-banner-final-v3.fig" />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Rename</Button>
      </div>
    </div>
  )
}
