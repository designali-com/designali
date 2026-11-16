"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

const languages = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Rust",
  "SQL",
  "Bash",
  "JSON",
]

export default function CodeLanguageToolbar() {
  const [lang, setLang] = React.useState<string | null>("TypeScript")
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-2 py-1">
        <span className="flex-1 font-sans text-xs text-muted-foreground">
          snippet-01
        </span>
        <Combobox items={languages} value={lang} onValueChange={setLang}>
          <ComboboxInput className="h-6 w-32 text-xs" aria-label="Language" />
          <ComboboxContent>
            <ComboboxEmpty>Unknown language.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Button variant="ghost" size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </Button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-xs leading-5">
        {lang === "Python"
          ? "def greet(name):\n    return f'Hello, {name}'"
          : "export const greet = (name: string) =>\n  'Hello, ' + name"}
      </pre>
    </div>
  )
}
