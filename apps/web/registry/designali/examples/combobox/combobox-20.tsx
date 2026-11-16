"use client"

import * as React from "react"
import {
  Users as UsersIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { InputGroupAddon } from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"

const directory = [
  "Ali Imam",
  "Amir · Designer",
  "Bella · Client",
  "Chris · Developer",
  "Dana · Motion Designer",
  "Eli · Brand Designer",
  "Farah · Client",
  "Gia · Designer",
]

export default function AsyncUserSearch() {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState(false)

  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  const search = (next: string) => {
    setQuery(next)
    if (timer.current) clearTimeout(timer.current)
    if (!next) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    timer.current = setTimeout(() => {
      setResults(
        directory.filter((name) =>
          name.toLowerCase().includes(next.toLowerCase())
        )
      )
      setLoading(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={results}
        filter={null}
        inputValue={query}
        onInputValueChange={search}
      >
        <ComboboxInput
          placeholder="Search the directory"
          className="w-full"
          showTrigger={false}
        >
          <InputGroupAddon align="inline-end">
            {loading ? <Spinner /> : <UsersIcon />}
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>
            {loading
              ? "Searching..."
              : query
                ? "No people match " + JSON.stringify(query)
                : "Start typing a name"}
          </ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
