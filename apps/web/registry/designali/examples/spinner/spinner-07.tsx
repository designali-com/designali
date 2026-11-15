import { Badge } from "@workspace/ui/components/badge"
import { Spinner } from "@workspace/ui/components/spinner"

export default function BadgeStatusSpinners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>
        <Spinner />
        Deploying
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Indexing 2,140 files
      </Badge>
      <Badge variant="destructive">
        <Spinner />
        Rolling back
      </Badge>
    </div>
  )
}
