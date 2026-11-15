import { Button } from "@workspace/ui/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import { Spinner } from "@workspace/ui/components/spinner"

export default function EmptyStateLoading() {
  return (
    <Empty className="w-full max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Loading your projects</EmptyTitle>
        <EmptyDescription>
          Fetching the latest activity from 12 workspaces.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}
