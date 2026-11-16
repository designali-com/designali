"use client"

import {
  Folder as FolderIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@workspace/ui/components/combobox"

const projects = [
  "designali.com refresh",
  "Templates v2",
  "Brand identity",
  "Icons library",
  "Dalim UI",
]

export default function MoveToProjectButton() {
  return (
    <Combobox items={projects} defaultValue="Templates v2">
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            className="w-56 justify-between font-normal"
          />
        }
      >
        <span className="flex items-center gap-2 truncate">
          <FolderIcon className="text-muted-foreground" />
          <ComboboxValue placeholder="Move to project" />
        </span>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search projects" />
        <ComboboxEmpty>No projects found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
