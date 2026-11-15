"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

const path = [
  "Home",
  "Teams",
  "Design",
  "Research",
  "Interviews",
  "Round 2",
  "Session notes",
]
const MAX_ITEMS = 3

export default function ExpandableEllipsisBreadcrumb() {
  const [expanded, setExpanded] = React.useState(false)
  const collapsed = !expanded && path.length > MAX_ITEMS
  const visible = collapsed ? [path[0]!, ...path.slice(-2)] : path

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {visible.map((item, index) => {
          const isLast = index === visible.length - 1
          return (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
              {collapsed && index === 0 && (
                <>
                  <BreadcrumbItem>
                    <button
                      type="button"
                      aria-label="Show full path"
                      className="hover:text-foreground"
                      onClick={() => setExpanded(true)}
                    >
                      <BreadcrumbEllipsis />
                    </button>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
