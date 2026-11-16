"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Link as LinkIcon,
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

export default function DocsCopyLinkBreadcrumb() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border px-3 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Guides</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Webhooks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button
        variant="ghost"
        size="xs"
        onClick={() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? (
          <CheckIcon data-icon="inline-start" />
        ) : (
          <LinkIcon data-icon="inline-start" />
        )}
        {copied ? "Copied" : "Copy link"}
      </Button>
    </div>
  )
}
