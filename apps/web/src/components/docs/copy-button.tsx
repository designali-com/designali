"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { Check, Clipboard } from "lucide-react"

export function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string
  src?: string
}) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (!hasCopied) return

    const timeout = setTimeout(() => {
      setHasCopied(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [hasCopied])

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            data-slot="copy-button"
            size="icon"
            variant={variant}
            className={cn(
              "bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100",
              className
            )}
            onClick={() => {
              copyToClipboardWithMeta(value)
              setHasCopied(true)
            }}
            {...props}
          >
            <span className="sr-only">Copy</span>
            {hasCopied ? <Check /> : <Clipboard />}
          </Button>
        }
      />
      <TooltipContent>
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </TooltipContent>
    </Tooltip>
  )
}
