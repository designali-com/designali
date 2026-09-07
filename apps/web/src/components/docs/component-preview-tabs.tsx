"use client"

import * as React from "react"
import { Loader, RotateCcw } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  component,
  source,
  name,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  component: React.ReactNode
  source: React.ReactNode
  name: string
}) {
  const [tab, setTab] = React.useState("preview")
  const [key, setKey] = React.useState(0)

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <div className="flex justify-between items-end">
        <Tabs onValueChange={setTab} value={tab}>
          <div className="flex items-center justify-between">
            {!hideCode && (
              <TabsList variant={"line"}>
                <TabsTrigger value="preview">Preview</TabsTrigger>

                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            )}
          </div>
        </Tabs>
        <p className="text-sm pr-2 text-primary">
          {name}
        </p>
      </div>

      <div className="relative w-full border border-dotted" data-tab={tab}>
        {/* Preview */}
        <div
          className="invisible data-[active=true]:visible"
          data-active={tab === "preview"}
          key={key}
        >
          <div
            className={cn(
              "flex min-h-[450px] w-full overflow-y-auto p-10",
              "max-sm:px-6",

              align === "center" && "items-center justify-center",
              align === "start" && "items-start justify-start",
              align === "end" && "items-end justify-end"
            )}
          >
            <div
              data-slot="preview"
              className={cn(
                "w-full min-w-0",
                align === "center" && "flex justify-center",
                align === "start" && "flex justify-start",
                align === "end" && "flex justify-end"
              )}
            >
              <div className="absolute top-2 right-2 z-20 flex gap-2">
                <Button
                  onClick={() => setKey((prev) => prev + 1)}
                  className="flex items-center px-3 py-1 hover:rotate-45 hover:bg-transparent"
                  variant="ghost"
                  size="icon"
                >
                  <RotateCcw size={16} />
                </Button>
              </div>

              <React.Suspense
                fallback={
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Loader className="mr-2 size-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {component}
              </React.Suspense>
            </div>
          </div>
        </div>

        {/* Code */}
        <div
          className={cn(
            "absolute inset-0 hidden overflow-auto data-[active=true]:block",
            "**:[figure]:m-0!",
            "**:[pre]:h-full"
          )}
          data-active={tab === "code"}
          data-slot="code"
        >
          {source}
        </div>
      </div>
    </div>
  )
}
