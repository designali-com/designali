import {
  File as FileIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"

const files = [
  { name: "designali-roadmap.pdf", size: "2.4 MB" },
  { name: "designali-logo-v4.svg", size: "84 KB" },
  { name: "client-brief.docx", size: "312 KB" },
  { name: "template-pricing.xlsx", size: "1.1 MB" },
]

export default function BulkDeleteSelectedFiles() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border bg-muted/40 px-3 py-2">
      <span className="text-sm">{files.length} files selected</span>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" size="sm" />}>
          <Trash2Icon data-icon="inline-start" />
          Delete
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {files.length} files?</AlertDialogTitle>
            <AlertDialogDescription>
              These files will be permanently deleted for everyone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <ul className="divide-y border text-sm">
            {files.map((file) => (
              <li key={file.name} className="flex items-center gap-2 px-3 py-2">
                <FileIcon className="size-4 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground">
                  {file.size}
                </span>
              </li>
            ))}
          </ul>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Delete files
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
