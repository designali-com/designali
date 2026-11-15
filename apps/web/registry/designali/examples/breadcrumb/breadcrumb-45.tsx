"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const data: Record<string, { label: string; value: number }[]> = {
  "All regions": [
    { label: "Europe", value: 412 },
    { label: "Americas", value: 538 },
    { label: "Asia Pacific", value: 297 },
  ],
  Europe: [
    { label: "Germany", value: 148 },
    { label: "France", value: 121 },
    { label: "Spain", value: 83 },
  ],
  Americas: [
    { label: "United States", value: 389 },
    { label: "Brazil", value: 92 },
  ],
  "Asia Pacific": [
    { label: "Japan", value: 164 },
    { label: "Australia", value: 133 },
  ],
}

export default function AnalyticsDrilldownBreadcrumb() {
  const [path, setPath] = React.useState(["All regions"])
  const rows = data[path[path.length - 1]!] ?? []
  const max = Math.max(...rows.map((row) => row.value), 1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((item, index) => (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<button type="button" />}
                    onClick={() => setPath(path.slice(0, index + 1))}
                  >
                    {item}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-2">
        {rows.length === 0 && (
          <p className="text-xs text-muted-foreground">
            No further breakdown available.
          </p>
        )}
        {rows.map((row) => (
          <button
            key={row.label}
            type="button"
            disabled={!data[row.label]}
            onClick={() => setPath([...path, row.label])}
            className="flex flex-col gap-1 text-left text-xs enabled:hover:opacity-80 disabled:cursor-default"
          >
            <span className="flex justify-between">
              <span>{row.label}</span>
              <span className="text-muted-foreground">
                {"$" + row.value + "k"}
              </span>
            </span>
            <span
              className="h-1.5 bg-primary"
              style={{ width: (row.value / max) * 100 + "%" }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
