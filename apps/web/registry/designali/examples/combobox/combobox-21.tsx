"use client"

import * as React from "react"
import { HashIcon, PlusIcon } from "lucide-react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"

type Tag = { value: string; creatable?: boolean }

export default function CreatableTagInput() {
  const anchor = useComboboxAnchor()
  const [tags, setTags] = React.useState<Tag[]>([
    { value: "urgent" },
    { value: "q4" },
    { value: "customer" },
  ])
  const [selected, setSelected] = React.useState<Tag[]>([])
  const [query, setQuery] = React.useState("")

  const trimmed = query.trim()
  const exists = tags.some(
    (tag) => tag.value.toLowerCase() === trimmed.toLowerCase()
  )
  const items =
    trimmed && !exists ? [...tags, { value: trimmed, creatable: true }] : tags

  return (
    <div className="w-full max-w-xs">
      <Combobox
        multiple
        items={items}
        value={selected}
        inputValue={query}
        onInputValueChange={setQuery}
        itemToStringLabel={(tag: Tag) => tag.value}
        isItemEqualToValue={(a, b) => a.value === b.value}
        onValueChange={(next) => {
          const created = next.find((tag) => tag.creatable)
          if (created) {
            const tag = { value: created.value }
            setTags((prev) => [...prev, tag])
            setSelected([...next.filter((t) => !t.creatable), tag])
          } else {
            setSelected(next)
          }
          setQuery("")
        }}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: Tag[]) => (
              <React.Fragment>
                {values.map((tag) => (
                  <ComboboxChip key={tag.value}>#{tag.value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add or create tags" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxList>
            {(tag: Tag) => (
              <ComboboxItem
                key={tag.value + (tag.creatable ? "-new" : "")}
                value={tag}
              >
                {tag.creatable ? (
                  <>
                    <PlusIcon />
                    Create &quot;{tag.value}&quot;
                  </>
                ) : (
                  <>
                    <HashIcon className="text-muted-foreground" />
                    {tag.value}
                  </>
                )}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
