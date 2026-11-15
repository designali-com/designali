"use client"

import * as React from "react"
import { CheckIcon, LanguagesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "fr", name: "French", native: "Français" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "ja", name: "Japanese", native: "日本語" },
  { code: "ko", name: "Korean", native: "한국어" },
  { code: "ar", name: "Arabic", native: "العربية" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
]

export default function LanguagePickerDrawer() {
  const [lang, setLang] = React.useState("en")
  const current = languages.find((item) => item.code === lang)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="ghost" />}>
        <LanguagesIcon data-icon="inline-start" />
        {current?.native}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>App language</DrawerTitle>
            <DrawerDescription>Changes apply immediately.</DrawerDescription>
          </DrawerHeader>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-2 pb-4">
            {languages.map((item) => (
              <DrawerClose
                key={item.code}
                render={<button type="button" />}
                onClick={() => setLang(item.code)}
                className="flex items-center gap-3 px-3 py-2.5 text-start hover:bg-muted"
              >
                <span className="flex-1">
                  <span className="block font-medium">{item.native}</span>
                  <span className="block text-muted-foreground">
                    {item.name}
                  </span>
                </span>
                {item.code === lang && <CheckIcon className="size-4" />}
              </DrawerClose>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
