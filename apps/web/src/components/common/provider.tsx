"use client"
import { Analytics } from "@vercel/analytics/next"

import { TooltipProvider } from "@workspace/ui/components/tooltip"

import { ActiveThemeProvider } from "./active-theme"
import { ThemeProvider } from "./theme-provider"

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ActiveThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ActiveThemeProvider>
      </ThemeProvider>
      <Analytics />
    </div>
  )
}
