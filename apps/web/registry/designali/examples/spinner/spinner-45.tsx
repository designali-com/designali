import { CheckIcon } from "lucide-react"

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
    <div className="w-full max-w-md bg-zinc-950 p-4 font-mono text-xs text-zinc-300">
      <div className="mb-2 text-zinc-500">$ pnpm build</div>
      {lines.map((line) => (
        <div key={line.text} className="flex items-center gap-2 py-0.5">
          {line.ok ? (
            <CheckIcon className="size-3 text-emerald-400" />
          ) : (
            <Spinner className="size-3 text-sky-400" />
          )}
          <span className={cn(!line.ok && "text-zinc-100")}>{line.text}</span>
        </div>
      ))}
    </div>
  )
}
