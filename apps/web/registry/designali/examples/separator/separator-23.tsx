import {
  Check as CheckIcon,
  X as XIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

const before = [
  "Manual CSV uploads",
  "Weekly reconciliation",
  "3 tools to switch between",
]
const after = ["Live bank sync", "Daily auto-matching", "One shared ledger"]

export default function BeforeAfterComparison() {
  return (
    <div className="flex w-full max-w-md border p-4 text-sm">
      <div className="flex flex-1 flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase">
          Before
        </span>
        {before.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <XIcon className="size-3.5" />
            {item}
          </span>
        ))}
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex flex-1 flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase">
          After
        </span>
        {after.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <CheckIcon className="size-3.5 text-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
