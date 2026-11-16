import {
  Check as CheckIcon,
  Info as InfoIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const features = [
  {
    name: "All templates",
    detail:
      "Every Designali template, block and landing page, with future updates.",
  },
  {
    name: "4000+ icons",
    detail:
      "The full @designali/icons set plus @designali/logos for React.",
  },
  {
    name: "Figma files",
    detail: "Source design files for every block, ready to customize.",
  },
]

export default function PricingFeatureHoverCard() {
  return (
    <div className="w-full max-w-xs border p-4">
      <p className="text-sm font-medium">Team plan</p>
      <p className="mb-3 text-2xl font-semibold">
        $18
        <span className="text-sm font-normal text-muted-foreground">
          /seat/mo
        </span>
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {features.map((f) => (
          <li key={f.name} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-emerald-600" />
            <span className="flex-1">{f.name}</span>
            <HoverCard>
              <HoverCardTrigger
                delay={100}
                render={
                  <button
                    type="button"
                    aria-label={"About " + f.name}
                    className="text-muted-foreground hover:text-foreground"
                  />
                }
              >
                <InfoIcon className="size-3.5" />
              </HoverCardTrigger>
              <HoverCardContent side="right" className="w-56">
                {f.detail}
              </HoverCardContent>
            </HoverCard>
          </li>
        ))}
      </ul>
    </div>
  )
}
