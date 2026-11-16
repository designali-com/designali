import {
  ArrowUpRight as ArrowUpRightIcon,
  Ellipsis as EllipsisIcon,
  ExternalLink as ExternalLinkIcon,
  GitBranch as GitBranchIcon,
  GitCommitHorizontal as GitCommitHorizontalIcon,
  RotateCcw as RotateCcwIcon,
  ScrollText as ScrollTextIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function DeploymentCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          designali-web
        </CardTitle>
        <CardDescription>Production · deployed 12 minutes ago</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Deployment actions"
                />
              }
            >
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <ExternalLinkIcon />
                Visit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ScrollTextIcon />
                View logs
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <RotateCcwIcon />
                Roll back
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <span className="flex items-center gap-2">
          <GitBranchIcon className="size-3.5" /> main
        </span>
        <span className="flex items-center gap-2">
          <GitCommitHorizontalIcon className="size-3.5" />
          <code className="font-mono text-foreground">a91f3c2</code> feat: add
          new pricing blocks
        </span>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="outline">Ready · 48s build</Badge>
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={<a href="#" />}
        >
          Open
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  )
}
