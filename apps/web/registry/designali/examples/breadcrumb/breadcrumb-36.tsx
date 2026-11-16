"use client"

import * as React from "react"
import {
  RefreshCw as RefreshCwIcon,
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
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LoadingSkeletonBreadcrumb() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          {loading ? (
            <>
              <BreadcrumbItem>
                <Skeleton className="h-3 w-14" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-3 w-20" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-3 w-24" />
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Clients</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Dalim Fonts</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Brand identity</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <Button variant="outline" size="xs" onClick={() => setLoading(!loading)}>
        <RefreshCwIcon data-icon="inline-start" />
        {loading ? "Finish loading" : "Reload"}
      </Button>
    </div>
  )
}
