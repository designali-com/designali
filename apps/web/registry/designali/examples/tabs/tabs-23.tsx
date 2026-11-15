"use client"

import * as React from "react"
import { FileCodeIcon, XIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const initial = ["index.ts", "router.ts", "styles.css", "README.md"]

export default function CloseableEditorTabs() {
  const [files, setFiles] = React.useState(initial)
  const [active, setActive] = React.useState("router.ts")

  function close(name: string) {
    const next = files.filter((f) => f !== name)
    setFiles(next)
    if (active === name && next.length)
      setActive(next[Math.max(0, files.indexOf(name) - 1)]!)
  }

  if (!files.length) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-2 border p-6 text-xs text-muted-foreground">
        All files closed.
        <Button
          size="xs"
          variant="outline"
          onClick={() => {
            setFiles(initial)
            setActive(initial[0]!)
          }}
        >
          Reopen files
        </Button>
      </div>
    )
  }

  return (
    <Tabs
      value={active}
      onValueChange={(v) => setActive(v as string)}
      className="w-full max-w-md gap-0 border"
    >
      <TabsList className="h-8 w-full justify-start overflow-x-auto p-0">
        {files.map((f) => (
          <div key={f} className="group flex h-full items-center border-e">
            <TabsTrigger value={f} className="flex-none px-2.5 font-mono">
              <FileCodeIcon data-icon="inline-start" />
              {f}
            </TabsTrigger>
            <button
              type="button"
              aria-label={"Close " + f}
              onClick={() => close(f)}
              className="me-1 p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <XIcon className="size-3" />
            </button>
          </div>
        ))}
      </TabsList>
      {files.map((f) => (
        <TabsContent
          key={f}
          value={f}
          className="p-3 font-mono text-muted-foreground"
        >
          {"// " + f + " — 42 lines"}
        </TabsContent>
      ))}
    </Tabs>
  )
}
