import { CircleCheckIcon, FileIcon, RotateCwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Spinner } from "@workspace/ui/components/spinner"

const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", state: "done" },
  { name: "hero-video.mp4", size: "86.1 MB", state: "uploading" },
  { name: "pricing-table.xlsx", size: "312 KB", state: "uploading" },
  { name: "logo-final.sketch", size: "18.4 MB", state: "failed" },
]

export default function FileUploadQueue() {
  return (
    <ItemGroup className="w-full max-w-sm border">
      {files.map((file) => (
        <Item key={file.name} size="sm">
          <ItemMedia variant="icon">
            <FileIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="truncate">{file.name}</ItemTitle>
            <ItemDescription>
              {file.state === "failed" ? "Upload failed" : file.size}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            {file.state === "uploading" && (
              <Spinner className="text-muted-foreground" />
            )}
            {file.state === "done" && (
              <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
            )}
            {file.state === "failed" && (
              <Button variant="ghost" size="icon-xs" aria-label="Retry upload">
                <RotateCwIcon />
              </Button>
            )}
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
