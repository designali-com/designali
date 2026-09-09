import { Building2, ChevronRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function CardSmall() {
  const workspaceName = "Designali Team"

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="size-4 text-muted-foreground" />
          {workspaceName}
        </CardTitle>
        <CardDescription>
          Manage members, projects, and permissions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Switch between active team workspaces.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Invite teammates and assign roles.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Access shared components and assets.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          Switch workspace
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          Create new workspace
        </Button>
      </CardFooter>
    </Card>
  )
}