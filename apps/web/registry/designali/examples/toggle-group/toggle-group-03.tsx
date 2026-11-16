import {
  TextAlignCenter as AlignCenterIcon,
  TextAlignJustify as AlignJustifyIcon,
  TextAlignStart as AlignLeftIcon,
  TextAlignEnd as AlignRightIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function TextAlignmentToggleGroup() {
  return (
    <ToggleGroup variant="outline" spacing={0} defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustifyIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
