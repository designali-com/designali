import {
  Briefcase as BriefcaseIcon,
  ChevronDown as ChevronDownIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const details = [
  { icon: MailIcon, label: "ali@designali.com" },
  { icon: GlobeIcon, label: "www.designali.com" },
  { icon: MapPinIcon, label: "Designali studio" },
  { icon: BriefcaseIcon, label: "Design & development" },
]

export default function ProfileCardDetails() {
  return (
    <Card className="w-full max-w-xs" size="sm">
      <Collapsible>
        <CardHeader className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 text-white">
              EV
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>Ali Imam</CardTitle>
            <CardDescription>Founder & Design Engineer</CardDescription>
          </div>
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Toggle details"
              >
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
        </CardHeader>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <CardContent>
            <ul className="mt-3 space-y-2 border-t pt-3 text-sm">
              {details.map((detail) => (
                <li
                  key={detail.label}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <detail.icon className="size-4" />
                  <span className="truncate">{detail.label}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
