import { ChevronDownIcon, GitMergeIcon } from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"

export default function SplitButtonSeparator() {
  return (
    <div className="inline-flex h-8 items-stretch bg-primary text-primary-foreground">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 text-xs font-medium hover:bg-primary-foreground/10"
      >
        <GitMergeIcon className="size-3.5" />
        Merge pull request
      </button>
      <Separator
        orientation="vertical"
        className="my-1.5 bg-primary-foreground/30"
      />
      <button
        type="button"
        aria-label="More merge options"
        className="flex items-center px-2 hover:bg-primary-foreground/10"
      >
        <ChevronDownIcon className="size-3.5" />
      </button>
    </div>
  )
}
