import {
  Plus as PlusIcon,
  Upload as UploadIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function EmptyStateCtaButtons() {
  return (
    <Empty className="w-full max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UsersIcon />
        </EmptyMedia>
        <EmptyTitle>No clients yet</EmptyTitle>
        <EmptyDescription>
          Add your first Designali client or import a list from a CSV file.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            Add client
          </Button>
          <Button size="sm" variant="outline">
            <UploadIcon data-icon="inline-start" />
            Import
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
