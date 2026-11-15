"use client"

import * as React from "react"
import { FileTextIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const files = ["contract-draft.pdf", "brand-guide.pdf", "invoice-1182.pdf"]

export default function SelectAllIndeterminateLabel() {
  const [selected, setSelected] = React.useState<string[]>(["brand-guide.pdf"])
  const all = selected.length === files.length
  const some = selected.length > 0 && !all

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-2 border-b pb-3">
        <Checkbox
          id="files-all"
          checked={all}
          indeterminate={some}
          onCheckedChange={(checked) => setSelected(checked ? files : [])}
        />
        <Label htmlFor="files-all" className="font-medium">
          Select all
          <span className="font-normal text-muted-foreground">
            ({selected.length} of {files.length})
          </span>
        </Label>
      </div>
      {files.map((file) => (
        <div key={file} className="flex items-center gap-2 ps-4">
          <Checkbox
            id={"file-" + file}
            checked={selected.includes(file)}
            onCheckedChange={(checked) =>
              setSelected(
                checked
                  ? [...selected, file]
                  : selected.filter((f) => f !== file)
              )
            }
          />
          <Label htmlFor={"file-" + file}>
            <FileTextIcon className="size-3.5 text-muted-foreground" />
            {file}
          </Label>
        </div>
      ))}
    </div>
  )
}
