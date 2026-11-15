import { FolderGit2Icon, GitForkIcon, StarIcon } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function HoverOpenPopover() {
  return (
    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
      The fix landed in{" "}
      <Popover>
        <PopoverTrigger
          openOnHover
          delay={250}
          render={
            <a
              href="#"
              className="font-medium text-foreground underline underline-offset-2"
            />
          }
        >
          northwind/ledger
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="flex items-center gap-2">
            <FolderGit2Icon className="size-4" />
            <PopoverTitle>northwind/ledger</PopoverTitle>
          </div>
          <PopoverDescription>
            Double-entry accounting service for invoices and payouts.
          </PopoverDescription>
          <div className="flex gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <StarIcon className="size-3" /> 1.2k
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="size-3" /> 86
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-sky-500" /> TypeScript
            </span>
          </div>
        </PopoverContent>
      </Popover>{" "}
      yesterday and ships with the next release.
    </p>
  )
}
