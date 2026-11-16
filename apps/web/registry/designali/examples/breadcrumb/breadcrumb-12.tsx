"use client"

import * as React from "react"
import {
  Folder as FolderIcon,
} from "@designali/icons"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"

const tree: Record<string, string[]> = {
  Documents: ["Invoices", "Contracts"],
  Invoices: ["2025", "2026"],
  Contracts: ["Vendors", "Freelancers"],
  "2025": [],
  "2026": [],
  Vendors: [],
  Freelancers: [],
}

export default function InteractiveFolderBreadcrumb() {
  const [path, setPath] = React.useState(["Documents"])
  const current = path[path.length - 1]!
  const children = tree[current] ?? []

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((folder, index) => {
            const isLast = index === path.length - 1
            return (
              <React.Fragment key={folder}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{folder}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      render={<button type="button" />}
                      onClick={() => setPath(path.slice(0, index + 1))}
                    >
                      {folder}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-1">
        {children.length === 0 ? (
          <p className="py-4 text-center text-xs text-muted-foreground">
            This folder is empty
          </p>
        ) : (
          children.map((child) => (
            <Button
              key={child}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => setPath([...path, child])}
            >
              <FolderIcon data-icon="inline-start" />
              {child}
            </Button>
          ))
        )}
      </div>
    </div>
  )
}
