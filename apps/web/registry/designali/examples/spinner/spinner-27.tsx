import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@workspace/ui/components/button-group"
import { Spinner } from "@workspace/ui/components/spinner"

export default function SplitButtonLoading() {
  return (
    <ButtonGroup>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Publishing
      </Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More publish options" disabled>
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}
