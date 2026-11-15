import * as React from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"

const details = [
  { icon: MailIcon, text: "hello@larkstudio.co" },
  { icon: PhoneIcon, text: "+44 20 7946 0958" },
  { icon: MapPinIcon, text: "Bristol, UK" },
]

export default function ContactDetailsInline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <span className="text-sm font-medium">Lark Studio</span>
      <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:h-4 sm:flex-row sm:items-center sm:gap-3">
        {details.map((detail, index) => (
          <React.Fragment key={detail.text}>
            {index > 0 && (
              <Separator orientation="vertical" className="hidden sm:block" />
            )}
            <span className="flex items-center gap-1.5">
              <detail.icon className="size-3.5" />
              {detail.text}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
