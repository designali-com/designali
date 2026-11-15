import { FileTextIcon, LockIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"

const files = [
  {
    name: "Brand guidelines.pdf",
    size: "4.2 MB",
    shared: ["KL", "PO", "RA", "TS", "UV"],
  },
  { name: "Launch budget.xlsx", size: "860 KB", shared: ["KL", "PO"] },
  { name: "Interview notes.docx", size: "120 KB", shared: [] as string[] },
]

export default function SharedFileAccessRow() {
  return (
    <div className="w-full max-w-md divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-center gap-3 p-3">
          <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{file.size}</p>
          </div>
          {file.shared.length === 0 ? (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <LockIcon className="size-3" /> Only you
            </span>
          ) : (
            <AvatarGroup>
              {file.shared.slice(0, 3).map((value) => (
                <Avatar key={value} size="sm">
                  <AvatarFallback>{value}</AvatarFallback>
                </Avatar>
              ))}
              {file.shared.length > 3 && (
                <AvatarGroupCount>+{file.shared.length - 3}</AvatarGroupCount>
              )}
            </AvatarGroup>
          )}
        </div>
      ))}
    </div>
  )
}
