"use client"

import {
  Languages as LanguagesIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { InputGroupAddon } from "@workspace/ui/components/input-group"

type Language = { code: string; english: string; native: string }

const languages: Language[] = [
  { code: "en", english: "English", native: "English" },
  { code: "es", english: "Spanish", native: "Español" },
  { code: "de", english: "German", native: "Deutsch" },
  { code: "ja", english: "Japanese", native: "日本語" },
  { code: "pt", english: "Portuguese", native: "Português" },
  { code: "ar", english: "Arabic", native: "العربية" },
]

export default function LanguageNativeNames() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="language">Language</FieldLabel>
      <Combobox
        items={languages}
        defaultValue={languages[0]}
        itemToStringLabel={(l: Language) => l.native}
        itemToStringValue={(l: Language) => l.code}
        filter={(l: Language, query: string) =>
          (l.english + " " + l.native)
            .toLowerCase()
            .includes(query.toLowerCase())
        }
      >
        <ComboboxInput id="language" className="w-full">
          <InputGroupAddon>
            <LanguagesIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No languages found.</ComboboxEmpty>
          <ComboboxList>
            {(l: Language) => (
              <ComboboxItem key={l.code} value={l}>
                <span className="flex-1">{l.native}</span>
                <span className="text-[11px] text-muted-foreground">
                  {l.english}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>Search by English or native name.</FieldDescription>
    </Field>
  )
}
