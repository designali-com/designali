import * as React from "react"
import {
  Mail as MailIcon,
  AtSign as AtSignIcon,
  Globe as GlobeIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

const details = [
  { icon: MailIcon, text: "hello@designali.com" },
  { icon: GlobeIcon, text: "www.designali.com" },
  { icon: AtSignIcon, text: "@designali_com" },
]

export default function ContactDetailsInline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <span className="text-sm font-medium">Designali</span>
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
