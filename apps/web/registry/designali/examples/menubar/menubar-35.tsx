"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  Download as DownloadIcon,
  FileImage as FileImageIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ExportProgressMenubar() {
  const [status, setStatus] = React.useState<"idle" | "running" | "done">(
    "idle"
  )

  const run = (format: string) => {
    setStatus("running")
    window.setTimeout(() => setStatus("done"), 1600)
    return format
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Report</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Refresh data</MenubarItem>
              <MenubarItem>Schedule email</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled={status === "running"}>
          <MenubarTrigger className="gap-1.5">
            {status === "running" ? (
              <Spinner className="size-3" />
            ) : (
              <DownloadIcon className="size-3.5" />
            )}
            {status === "running" ? "Exporting..." : "Export"}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem onClick={() => run("pdf")}>
                <FileTextIcon /> PDF report
              </MenubarItem>
              <MenubarItem onClick={() => run("csv")}>
                <FileSpreadsheetIcon /> CSV data
              </MenubarItem>
              <MenubarItem onClick={() => run("png")}>
                <FileImageIcon /> Chart images
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {status === "done" && (
        <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <CircleCheckIcon className="size-3.5" /> Export ready to download
        </p>
      )}
    </div>
  )
}
