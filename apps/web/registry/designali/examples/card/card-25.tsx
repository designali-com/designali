import {
  Funnel as FilterIcon,
  FolderOpen as FolderOpenIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function EmptyProjectsCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Projects</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" disabled>
            <FilterIcon data-icon="inline-start" />
            Filter
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Empty className="py-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Projects group your Designali blocks, icons and Figma files. Create
              one or start from a template.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button size="sm">
              <PlusIcon data-icon="inline-start" />
              New project
            </Button>
            <Button size="sm" variant="outline">
              Browse templates
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
