"use client"

import * as React from "react"
import { de, enUS, es, fr, ja } from "react-day-picker/locale"
import {
  Languages as LanguagesIcon,
} from "@designali/icons"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const locales = { enUS, es, fr, de, ja }
type LocaleKey = keyof typeof locales

const languages: { value: LocaleKey; label: string }[] = [
  { value: "enUS", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "ja", label: "日本語" },
]

export default function LocalizedCalendar() {
  const [lang, setLang] = React.useState<LocaleKey>("fr")
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())
  const locale = locales[lang]

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <LanguagesIcon className="size-4 text-muted-foreground" />
          Display language
        </span>
        <NativeSelect
          size="sm"
          value={lang}
          onChange={(e) => setLang(e.target.value as LocaleKey)}
          aria-label="Language"
        >
          {languages.map((l) => (
            <NativeSelectOption key={l.value} value={l.value}>
              {l.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar
        mode="single"
        locale={locale}
        selected={date}
        onSelect={setDate}
        className="self-center border"
      />
      <p className="text-center text-xs text-muted-foreground">
        {date
          ? date.toLocaleDateString(locale.code, { dateStyle: "full" })
          : "—"}
      </p>
    </div>
  )
}
