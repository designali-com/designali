import {
  Download as DownloadIcon,
  Ellipsis as EllipsisIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  FileVideoCamera as FileVideoIcon,
  Folder as FolderIcon,
  Pencil as PencilIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  { name: "Brand assets", kind: "folder", size: "—", modified: "Nov 14" },
  {
    name: "designali-brand-guidelines.pdf",
    kind: "pdf",
    size: "8.2 MB",
    modified: "Nov 13",
  },
  {
    name: "project-estimates-2027.xlsx",
    kind: "sheet",
    size: "412 KB",
    modified: "Nov 9",
  },
  {
    name: "designali-showreel.mp4",
    kind: "video",
    size: "96.4 MB",
    modified: "Oct 30",
  },
]

const icons = {
  folder: FolderIcon,
  pdf: FileTextIcon,
  sheet: FileSpreadsheetIcon,
  video: FileVideoIcon,
}

export default function FileManagerTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Modified</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => {
            const Icon = icons[file.kind as keyof typeof icons]
            return (
              <TableRow key={file.name}>
                <TableCell>
                  <span className="flex items-center gap-2 font-medium">
                    <Icon
                      className={cn(
                        "size-4",
                        file.kind === "folder"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                    {file.name}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {file.size}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {file.modified}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          aria-label={"Actions for " + file.name}
                        />
                      }
                    >
                      <EllipsisIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <DownloadIcon />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PencilIcon />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <Trash2Icon />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
