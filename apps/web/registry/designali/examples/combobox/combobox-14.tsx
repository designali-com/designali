"use client"

import { FolderIcon } from "lucide-react"

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
  "Website refresh",
  "Mobile app v2",
  "Brand guidelines",
  "Customer portal",
  "Internal tools",
]

export default function MoveToProjectButton() {
  return (
    <Combobox items={projects} defaultValue="Mobile app v2">
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
