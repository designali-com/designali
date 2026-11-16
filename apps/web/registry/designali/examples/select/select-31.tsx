"use client"

import * as React from "react"
import {
  FileArchive as FileArchiveIcon,
  FileImage as FileImageIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  Files as FilesIcon,
} from "@designali/icons"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const types = [
  { label: "All files", value: "all", icon: FilesIcon },
  { label: "Documents", value: "doc", icon: FileTextIcon },
  { label: "Images", value: "image", icon: FileImageIcon },
  { label: "Spreadsheets", value: "sheet", icon: FileSpreadsheetIcon },
  { label: "Archives", value: "zip", icon: FileArchiveIcon },
]

const files = [
  { name: "Designali brand guidelines.pdf", type: "doc", size: "4.2 MB" },
  { name: "Hero banner.png", type: "image", size: "1.8 MB" },
  { name: "Project estimate.xlsx", type: "sheet", size: "320 KB" },
  { name: "Designali logos.zip", type: "zip", size: "86 MB" },
  { name: "Meeting notes.docx", type: "doc", size: "44 KB" },
]

export default function FileTypeFilterSelect() {
  const [type, setType] = React.useState<string | null>("all")
  const visible = files.filter((file) => type === "all" || file.type === type)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Select items={types} value={type} onValueChange={setType}>
        <SelectTrigger className="w-44" aria-label="File type">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {types.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className="text-muted-foreground" />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ul className="divide-y border text-sm">
        {visible.map((file) => (
          <li
            key={file.name}
            className="flex items-center justify-between gap-2 px-3 py-2"
          >
            <span className="truncate">{file.name}</span>
            <span className="shrink-0 text-xs text-muted-foreground">
              {file.size}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
