import {
  Check as CheckIcon,
} from "@designali/icons"

import { Spinner } from "@workspace/ui/components/spinner"
import { cn } from "@workspace/ui/lib/utils"

const lines = [
  { text: "Resolved 1,248 packages", ok: true },
  { text: "Compiled 342 modules in 8.2s", ok: true },
  { text: "Linted 0 errors, 2 warnings", ok: true },
  { text: "Generating static pages (18/64)", ok: false },
]

export default function BuildLogTerminal() {
  return (
    <div className="w-full max-w-md bg-foreground p-4 font-sans text-xs text-muted-foreground">
      <div className="mb-2 text-muted-foreground">$ pnpm build</div>
      {lines.map((line) => (
        <div key={line.text} className="flex items-center gap-2 py-0.5">
          {line.ok ? (
            <CheckIcon className="size-3 text-primary" />
          ) : (
            <Spinner className="size-3 text-primary" />
          )}
          <span className={cn(!line.ok && "text-background")}>{line.text}</span>
        </div>
      ))}
    </div>
  )
}
