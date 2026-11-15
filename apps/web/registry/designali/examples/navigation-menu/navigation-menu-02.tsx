import {
  BlocksIcon,
  ChartLineIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const features = [
  {
    title: "Analytics",
    description: "Dashboards that update in real time.",
    icon: ChartLineIcon,
  },
  {
    title: "Automations",
    description: "Trigger workflows from any event.",
    icon: WorkflowIcon,
  },
  {
    title: "Security",
    description: "SSO, audit logs and roles.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Integrations",
    description: "Connect the tools you already use.",
    icon: BlocksIcon,
  },
]

export default function SaasProductNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 sm:w-[28rem] sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.title}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center border bg-muted">
                      <f.icon />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="font-medium">{f.title}</span>
                      <span className="text-muted-foreground">
                        {f.description}
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
