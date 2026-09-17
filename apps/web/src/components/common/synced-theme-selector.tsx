"use client"

import { useEffect } from "react"

import { useThemeConfig } from "./active-theme"
import { ThemePattern } from "./theme-selector"

export function ThemeSelectorPattern() {
  const { activeTheme } = useThemeConfig()

  useEffect(() => {
    const sendToIframes = () => {
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            { type: "THEME_CHANGE", theme: activeTheme },
            window.location.origin
          )
        } catch (e) {
          console.error("Failed to send theme to iframe", e)
        }
      })
    }

    sendToIframes()
    const timeout = setTimeout(sendToIframes, 100)

    return () => clearTimeout(timeout)
  }, [activeTheme])

  return (
    <div className="">
      <ThemePattern />
    </div>
  )
}
