"use client"

import { useState } from "react"
import { ChevronRight, Folder, FolderOpen, HardDrive, MoreHorizontal } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const path = ["Shared drive", "Clients", "Bramble Foods", "2025 rebrand", "Packaging", "Final exports"]

const folders = ["Cartons", "Labels", "Shipping boxes", "Mockups"]

export default function Navigation19() {
  const [depth, setDepth] = useState(path.length - 1)
  const [expanded, setExpanded] = useState(false)

  const visible = path.slice(0, depth + 1)
  const collapse = !expanded && visible.length > 3
  const hidden = collapse ? visible.slice(1, -2) : []

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border">
          <nav aria-label="Folder path" className="flex items-center gap-1 border-b bg-muted/40 px-3 py-2 text-sm">
            <ol className="flex min-w-0 flex-1 items-center gap-1">
              {visible.map((segment, index) => {
                if (collapse && index > 0 && index < visible.length - 2) {
                  if (index !== 1) return null
                  return (
                    <li key="collapsed" className="relative flex items-center gap-1">
                      <button
                        type="button"
                        aria-label={`Show ${hidden.length} hidden folders`}
                        onClick={() => setExpanded(true)}
                        className="flex h-7 items-center px-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                      <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
                    </li>
                  )
                }
                const last = index === visible.length - 1
                return (
                  <li key={segment} className="flex min-w-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setDepth(index)
                        setExpanded(false)
                      }}
                      aria-current={last ? "page" : undefined}
                      className={cn(
                        "flex h-7 min-w-0 items-center gap-1.5 px-1.5 hover:bg-muted",
                        last ? "font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {index === 0 && <HardDrive className="size-4 shrink-0" />}
                      <span className="truncate">{segment}</span>
                    </button>
                    {!last && <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />}
                  </li>
                )
              })}
            </ol>
            {expanded && (
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="shrink-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Collapse
              </button>
            )}
          </nav>

          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <FolderOpen className="size-6 shrink-0" />
              <h2 className="truncate text-lg font-semibold">{visible[visible.length - 1]}</h2>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">Level {depth + 1}</span>
          </div>

          <ul className="grid gap-px border-t bg-border sm:grid-cols-2 lg:grid-cols-4">
            {(depth < path.length - 1 ? [path[depth + 1], ...folders.slice(1)] : folders).map((folder, index) => (
              <li key={folder} className="bg-background">
                <button
                  type="button"
                  onClick={() => {
                    if (index === 0 && depth < path.length - 1) setDepth(depth + 1)
                  }}
                  className="flex w-full items-center gap-3 p-4 text-start text-sm hover:bg-muted/50"
                >
                  <Folder className="size-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 flex-1 truncate">{folder}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">{(index + 2) * 7}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Middle segments collapse into an overflow button when the path gets deep. Click any segment to jump back.
        </p>
      </div>
    </section>
  )
}
