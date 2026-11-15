"use client"

import * as React from "react"
import { LanguagesIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const languages = [
  { code: "en", english: "English", native: "English" },
  { code: "es", english: "Spanish", native: "Español" },
  { code: "fr", english: "French", native: "Français" },
  { code: "de", english: "German", native: "Deutsch" },
  { code: "ja", english: "Japanese", native: "日本語" },
  { code: "ar", english: "Arabic", native: "العربية" },
  { code: "hi", english: "Hindi", native: "हिन्दी" },
]

export default function LanguagePreference() {
  const [lang, setLang] = React.useState("fr")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center gap-2 text-sm">
        <LanguagesIcon className="size-4" />
        Interface language
      </div>
      <Command className="border">
        <CommandInput placeholder="Search languages..." />
        <CommandList className="max-h-56">
          <CommandEmpty>Language not available yet.</CommandEmpty>
          <CommandGroup>
            {languages.map((l) => (
              <CommandItem
                key={l.code}
                value={l.english}
                keywords={[l.native, l.code]}
                data-checked={l.code === lang}
                onSelect={() => setLang(l.code)}
              >
                <span className="w-6 font-mono text-[11px] text-muted-foreground uppercase">
                  {l.code}
                </span>
                <span>{l.native}</span>
                <span className="text-muted-foreground">{l.english}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
