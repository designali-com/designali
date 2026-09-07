"use client"
import { Analytics } from "@vercel/analytics/next"

import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { GoogleAnalytics } from "@next/third-parties/google"

import { ActiveThemeProvider } from "./active-theme"
import { ThemeProvider } from "./theme-provider"
import { LogoFilterProvider } from "../templates/(icons)/logos/logo-filter-context"
import { IconFilterProvider } from "../templates/(icons)/icons/icon-filter-context"
import { VectorFilterProvider } from "../templates/(icons)/vectors/vector-filter-context"

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
            <LogoFilterProvider>
              <IconFilterProvider>
                <VectorFilterProvider>
                  {children}
                  </VectorFilterProvider>
              </IconFilterProvider>
            </LogoFilterProvider>
          </TooltipProvider>
        </ActiveThemeProvider>
      </ThemeProvider>
      <GoogleAnalytics gaId="G-85BCJQ64HE" />
      <Analytics />
    </div>
  )
}
