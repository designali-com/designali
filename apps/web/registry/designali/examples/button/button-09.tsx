import {
  Check as CheckIcon,
  Save as SaveIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LoadingButtonStates() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save changes
      </Button>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving...
      </Button>
      <Button variant="secondary">
        <CheckIcon data-icon="inline-start" />
        Saved
      </Button>
    </div>
  )
}
