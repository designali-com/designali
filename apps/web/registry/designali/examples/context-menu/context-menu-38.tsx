import {
  ArrowLeftRight as ArrowLeftRightIcon,
  Cherry as CherryIcon,
  Copy as CopyIcon,
  GitBranchPlus as GitBranchPlusIcon,
  GitCommitHorizontal as GitCommitHorizontalIcon,
  GitCompare as GitCompareIcon,
  Undo2 as Undo2Icon,
} from "@designali/icons"

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
    message: "Add 40 new pricing blocks",
    author: "AI",
    time: "2h",
  },
  {
    sha: "7be03d1",
    message: "Fix dark mode tokens in templates",
    author: "AI",
    time: "5h",
  },
  {
    sha: "c9921aa",
    message: "Bump @designali/icons to v2",
    author: "AI",
    time: "1d",
  },
  {
    sha: "15e7f40",
    message: "Refactor landing page hero",
    author: "AI",
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
              <ContextMenuLabel className="font-sans">
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
