"use client"
import { Analytics } from "@vercel/analytics/next"

import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { GoogleAnalytics } from "@next/third-parties/google"

import { ActiveThemeProvider } from "./active-theme"
import { ThemeProvider } from "./theme-provider"
import { LogoFilterProvider } from "../templates/logos/logo-filter-context"

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
          <TooltipProvider>
            <LogoFilterProvider>{children}</LogoFilterProvider>
          </TooltipProvider>
        </ActiveThemeProvider>
      </ThemeProvider>
      <GoogleAnalytics gaId="G-85BCJQ64HE" />
      <Analytics />
    </div>
  )
}
