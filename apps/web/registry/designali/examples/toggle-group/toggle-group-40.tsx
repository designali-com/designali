import {
  TextAlignCenter as AlignCenterIcon,
  TextAlignStart as AlignLeftIcon,
  Bold as BoldIcon,
  Code as CodeIcon,
  Heading1 as Heading1Icon,
  Heading2 as Heading2Icon,
  Italic as ItalicIcon,
  Link as LinkIcon,
  Pilcrow as PilcrowIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function EditorToolbarToggleGroups() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-1 border p-1">
      <ToggleGroup size="sm" defaultValue={["p"]}>
        <ToggleGroupItem value="h1" aria-label="Heading 1">
          <Heading1Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="h2" aria-label="Heading 2">
          <Heading2Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="p" aria-label="Paragraph">
          <PilcrowIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <ToggleGroup multiple size="sm">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="code" aria-label="Inline code">
          <CodeIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="link" aria-label="Link">
          <LinkIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <ToggleGroup size="sm" defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
