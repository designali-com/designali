import {
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Send as SendIcon,
  Star as StarIcon,
} from "@designali/icons"

import { Spinner } from "@workspace/ui/components/spinner"
import { cn } from "@workspace/ui/lib/utils"

const folders = [
  { label: "Inbox", icon: InboxIcon, count: null },
  { label: "Starred", icon: StarIcon, count: 4 },
  { label: "Sent", icon: SendIcon, count: 0 },
  { label: "Archive", icon: ArchiveIcon, count: null },
]

export default function SidebarCountsLoading() {
  return (
    <nav className="flex w-full max-w-[220px] flex-col gap-0.5 border p-2">
      {folders.map((folder, i) => (
        <a
          key={folder.label}
          href="#"
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted",
            i === 0 && "bg-muted font-medium"
          )}
        >
          <folder.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{folder.label}</span>
          {folder.count === null ? (
            <Spinner className="size-3 text-muted-foreground" />
          ) : folder.count > 0 ? (
            <span className="text-xs text-muted-foreground tabular-nums">
              {folder.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}
