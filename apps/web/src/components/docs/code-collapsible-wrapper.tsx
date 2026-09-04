"use client"

import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn("group/collapsible relative w-full min-w-0", className)}
      {...props}
    >
      <div className="relative w-full min-w-0">
        <CollapsibleContent
          className={cn(
            "relative w-full min-w-0 border transition-all duration-300",
            !isOpened && "max-h-[360px] overflow-hidden"
          )}
        >
          <div
            className={cn(
              "w-full min-w-0",
              isOpened && "max-h-[300px] overflow-y-auto md:max-h-[500px]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>

        {!isOpened && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-10 items-end justify-center bg-gradient-to-t from-background via-background/80 to-transparent pb-3">
            <CollapsibleTrigger className="pointer-events-auto">
              <Button
                variant="secondary"
                size="sm"
                className="h-8 border shadow-sm"
              >
                Expand Code
              </Button>
            </CollapsibleTrigger>
          </div>
        )}

        {isOpened && (
          <div className="flex justify-center border-border/40 bg-background/50 py-2">
            <CollapsibleTrigger>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-muted-foreground"
              >
                Collapse Code
              </Button>
            </CollapsibleTrigger>
          </div>
        )}
      </div>
    </Collapsible>
  )
}
