import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link as LinkIcon,
  List as ListIcon,
  Quote as QuoteIcon,
  Underline as UnderlineIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const tools = [
  { label: "Bold", icon: BoldIcon },
  { label: "Italic", icon: ItalicIcon },
  { label: "Underline", icon: UnderlineIcon },
  { label: "Link", icon: LinkIcon },
  { label: "Bulleted list", icon: ListIcon },
  { label: "Quote", icon: QuoteIcon },
]

export default function EditorToolbarIconButtons() {
  return (
    <div className="flex items-center gap-1 border p-1">
      {tools.map((tool) => (
        <Button
          key={tool.label}
          variant="ghost"
          size="icon-sm"
          aria-label={tool.label}
          title={tool.label}
        >
          <tool.icon />
        </Button>
      ))}
    </div>
  )
}
