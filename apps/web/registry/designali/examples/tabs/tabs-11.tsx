"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const commands = {
  npm: "npm install @acme/charts",
  pnpm: "pnpm add @acme/charts",
  yarn: "yarn add @acme/charts",
  bun: "bun add @acme/charts",
}

export default function PackageManagerTabs() {
  const [copied, setCopied] = React.useState(false)
  const [manager, setManager] = React.useState<keyof typeof commands>("npm")

  return (
    <Tabs
      value={manager}
      onValueChange={(v) => {
        setManager(v as keyof typeof commands)
        setCopied(false)
      }}
      className="w-full max-w-md gap-0 border"
    >
      <div className="flex items-center justify-between border-b bg-muted/40 pe-1">
        <TabsList variant="line" className="h-9">
          {Object.keys(commands).map((key) => (
            <TabsTrigger key={key} value={key} className="font-mono">
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Copy command"
          onClick={() => {
            void navigator.clipboard?.writeText(commands[manager])
            setCopied(true)
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>
      {Object.entries(commands).map(([key, cmd]) => (
        <TabsContent key={key} value={key} className="px-3 py-3 font-mono">
          <span className="text-muted-foreground">$ </span>
          {cmd}
        </TabsContent>
      ))}
    </Tabs>
  )
}
