import {
  ExternalLink as ExternalLinkIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function AnchorLinkButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button nativeButton={false} render={<a href="#" />}>
        View dashboard
      </Button>
      <Button
        variant="outline"
        nativeButton={false}
        render={<a href="#" target="_blank" rel="noreferrer" />}
      >
        Status page
        <ExternalLinkIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
