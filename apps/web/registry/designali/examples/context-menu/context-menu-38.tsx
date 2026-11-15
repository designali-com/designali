import {
  ArrowLeftRightIcon,
  CherryIcon,
  CopyIcon,
  GitBranchPlusIcon,
  GitCommitHorizontalIcon,
  GitCompareIcon,
  Undo2Icon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const commits = [
  {
    sha: "a41f9c2",
    message: "Add usage-based billing tiers",
    author: "MC",
    time: "2h",
  },
  {
    sha: "7be03d1",
    message: "Fix race in webhook retries",
    author: "JR",
    time: "5h",
  },
  {
    sha: "c9921aa",
    message: "Bump date library to v4",
    author: "EB",
    time: "1d",
  },
  {
    sha: "15e7f40",
    message: "Refactor invoice PDF renderer",
    author: "PN",
    time: "2d",
  },
]

export default function GitCommitHistoryMenu() {
  return (
    <div className="relative flex w-full max-w-sm flex-col border">
      {commits.map((commit, index) => (
        <ContextMenu key={commit.sha}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
            <div className="flex flex-col items-center self-stretch">
              <span
                className={cn(
                  "w-px flex-1",
                  index === 0 ? "bg-transparent" : "bg-border"
                )}
              />
              <GitCommitHorizontalIcon className="size-4 rotate-90 text-muted-foreground" />
              <span
                className={cn(
                  "w-px flex-1",
                  index === commits.length - 1 ? "bg-transparent" : "bg-border"
                )}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate">{commit.message}</span>
              <span className="text-muted-foreground">
                {commit.author} · {commit.time} ago
              </span>
            </div>
            <code className="text-[11px] text-muted-foreground">
              {commit.sha}
            </code>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuLabel className="font-mono">
                {commit.sha}
              </ContextMenuLabel>
              <ContextMenuItem>
                <CopyIcon />
                Copy SHA
              </ContextMenuItem>
              <ContextMenuItem>
                <GitCompareIcon />
                Compare with working tree
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <GitBranchPlusIcon />
                Create branch from commit
              </ContextMenuItem>
              <ContextMenuItem>
                <CherryIcon />
                Cherry-pick
              </ContextMenuItem>
              <ContextMenuItem>
                <ArrowLeftRightIcon />
                Checkout commit
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <Undo2Icon />
                Revert commit
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
