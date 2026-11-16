import {
  Check as CheckIcon,
  Globe as GlobeIcon,
} from "@designali/icons"

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
        <span className="text-sm font-medium">designali.com</span>
      </div>
      {records.map((record) => (
        <div
          key={record.type}
          className="flex items-center gap-3 px-4 py-2.5 text-sm"
        >
          <Badge variant="outline" className="w-14 justify-center font-sans">
            {record.type}
          </Badge>
          <span className="flex-1 font-sans text-xs">{record.host}</span>
          {record.state === "verified" ? (
            <span className="flex items-center gap-1 text-xs text-primary dark:text-primary">
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
