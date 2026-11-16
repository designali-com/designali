"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
  Languages as LanguagesIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "de-DE", label: "Deutsch" },
  { value: "fr-FR", label: "Français" },
  { value: "ja-JP", label: "日本語" },
]

export default function LanguageRegionMenubar() {
  const [locale, setLocale] = React.useState("en-US")
  const [style, setStyle] = React.useState<"short" | "long">("long")

  const sample = new Intl.DateTimeFormat(locale, { dateStyle: style }).format(
    new Date(2026, 2, 14)
  )

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <LanguagesIcon className="me-1.5 size-3.5" /> Language
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={locale} onValueChange={setLocale}>
              {languages.map((lang) => (
                <MenubarRadioItem key={lang.value} value={lang.value}>
                  {lang.label}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <CalendarIcon className="me-1.5 size-3.5" /> Dates
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={style} onValueChange={setStyle}>
              <MenubarRadioItem value="short">Short</MenubarRadioItem>
              <MenubarRadioItem value="long">Long</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="border px-3 py-2 text-xs">
        <span className="text-muted-foreground">Preview: </span>
        {sample}
      </p>
    </div>
  )
}
