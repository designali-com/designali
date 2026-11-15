import * as React from "react"
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  UnderlineIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const groups = [
  [
    { label: "Bold", icon: BoldIcon },
    { label: "Italic", icon: ItalicIcon },
    { label: "Underline", icon: UnderlineIcon },
  ],
  [
    { label: "Bulleted list", icon: ListIcon },
    { label: "Numbered list", icon: ListOrderedIcon },
  ],
  [
    { label: "Link", icon: LinkIcon },
    { label: "Code", icon: CodeIcon },
  ],
]

export default function EditorToolbarGroups() {
  return (
    <div className="flex h-10 items-center gap-1 border p-1">
      {groups.map((group, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Separator orientation="vertical" className="mx-1 my-1" />
          )}
          {group.map((tool) => (
            <Button
              key={tool.label}
              variant="ghost"
              size="icon-sm"
              aria-label={tool.label}
            >
              <tool.icon />
            </Button>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
