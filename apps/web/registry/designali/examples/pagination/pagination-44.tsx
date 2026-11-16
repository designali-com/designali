"use client"

import * as React from "react"
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  FileArchive as FileArchiveIcon,
  FileMusic as FileAudioIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  FileVideoCamera as FileVideoIcon,
  Folder as FolderIcon,
} from "@designali/icons"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const files = [
  { name: "designali-brand-guidelines.pdf", size: "4.2 MB", icon: FileTextIcon },
  { name: "project-estimate.xlsx", size: "860 KB", icon: FileSpreadsheetIcon },
  { name: "colorful-spheres.mp4", size: "38 MB", icon: FileVideoIcon },
  { name: "designali-logos.zip", size: "12 MB", icon: FileArchiveIcon },
  { name: "client-kickoff-notes.md", size: "14 KB", icon: FileTextIcon },
  { name: "icon-usage.csv", size: "220 KB", icon: FileSpreadsheetIcon },
  { name: "showreel-voiceover.wav", size: "9.1 MB", icon: FileAudioIcon },
  { name: "designali-press-kit.zip", size: "26 MB", icon: FileArchiveIcon },
]

const PAGE_SIZE = 4

export default function FileManagerPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(files.length / PAGE_SIZE)
  const rows = files.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-1.5 border-b px-3 py-2 text-xs text-muted-foreground">
        <FolderIcon className="size-3.5" /> Designali{" "}
        <ChevronRightIcon className="size-3" />
        <span className="text-foreground">Brand assets</span>
      </div>
      <ul className="flex flex-col divide-y">
        {rows.map((file) => (
          <li
            key={file.name}
            className="flex items-center gap-2 px-3 py-2 text-xs"
          >
            <file.icon className="size-4 text-muted-foreground" />
            <span className="flex-1 truncate">{file.name}</span>
            <span className="text-muted-foreground">{file.size}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t px-3 py-1.5">
        <span className="text-xs text-muted-foreground">
          {files.length} items
        </span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Previous page"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              >
                <ChevronLeftIcon />
              </PaginationLink>
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  size="icon-sm"
                  isActive={p === page}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Next page"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.min(pageCount, p + 1))
                }}
              >
                <ChevronRightIcon />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
