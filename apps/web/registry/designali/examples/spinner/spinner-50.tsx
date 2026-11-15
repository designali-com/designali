import { CheckIcon, GlobeIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Spinner } from "@workspace/ui/components/spinner"

const records = [
  { type: "TXT", host: "_verify", state: "verified" },
  { type: "CNAME", host: "www", state: "checking" },
  { type: "MX", host: "@", state: "checking" },
]

export default function VerifyingDomainStatus() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <GlobeIcon className="size-4" />
        <span className="text-sm font-medium">mail.fernwood.app</span>
      </div>
      {records.map((record) => (
        <div
          key={record.type}
          className="flex items-center gap-3 px-4 py-2.5 text-sm"
        >
          <Badge variant="outline" className="w-14 justify-center font-mono">
            {record.type}
          </Badge>
          <span className="flex-1 font-mono text-xs">{record.host}</span>
          {record.state === "verified" ? (
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
              <CheckIcon className="size-3.5" />
              Verified
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Spinner className="size-3" />
              Propagating
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
