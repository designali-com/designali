import {
  ArrowRight as ArrowRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LinkButtonNavigating() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Button
        variant="link"
        className="px-0"
        nativeButton={false}
        render={<a href="#" />}
      >
        <Spinner data-icon="inline-start" />
        Opening Designali docs
      </Button>
      <Button
        variant="link"
        className="px-0 text-muted-foreground"
        nativeButton={false}
        render={<a href="#" />}
      >
        View changelog
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
