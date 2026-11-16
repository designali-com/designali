import {
  Check as CheckIcon,
  CircleQuestionMark as CircleHelpIcon,
} from "@designali/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const features = [
  {
    name: "All Designali templates",
    help: "Every template, block and landing page on designali.com.",
  },
  {
    name: "SSO & SCIM",
    help: "SAML 2.0 single sign-on with automatic user provisioning.",
  },
  { name: "Audit log", help: "365 days of searchable workspace activity." },
  { name: "Priority support", help: "Replies within 4 business hours." },
]

export default function PricingFeatureHelpTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div>
          <p className="text-sm font-medium">Business</p>
          <p className="text-2xl font-semibold">
            $32
            <span className="text-sm font-normal text-muted-foreground">
              /seat
            </span>
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          {features.map((f) => (
            <li key={f.name} className="flex items-center gap-2">
              <CheckIcon className="size-4 text-primary" />
              <span className="flex-1">{f.name}</span>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      aria-label={"About " + f.name}
                      className="text-muted-foreground hover:text-foreground"
                    />
                  }
                >
                  <CircleHelpIcon className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-48">
                  {f.help}
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </TooltipProvider>
  )
}
