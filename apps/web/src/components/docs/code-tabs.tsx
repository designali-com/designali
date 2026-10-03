"use client"

import * as React from "react"
import { Tabs } from "@workspace/ui/components/tabs"
import { useConfig } from "@/src/hooks/use-config"

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()

  const installationType = React.useMemo(() => {
    // Safely access installationType using optional chaining
    return config?.installationType || "cli"
  }, [config])

  return (
    <Tabs
      className="relative mt-6 w-full"
      onValueChange={(value) =>
        // Safely spread config, falling back to an empty object if undefined
        setConfig({ ...(config || {}), installationType: value as "cli" | "manual" })
      }
      value={installationType}
    >
      {children}
    </Tabs>
  )
}