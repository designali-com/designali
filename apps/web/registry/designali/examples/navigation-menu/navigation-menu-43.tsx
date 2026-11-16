import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

function DemoMenu({ label }: { label: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex w-44 flex-col gap-1">
          {["Designali Overview", "Pricing", "Docs"].map((link) => (
            <li key={link}>
              <NavigationMenuLink href="#">{link}</NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default function InstantOpenNav() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] text-muted-foreground">
          delay 0 · closeDelay 400
        </span>
        <NavigationMenu delay={0} closeDelay={400}>
          <NavigationMenuList>
            <DemoMenu label="Templates" />
            <DemoMenu label="Blocks" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] text-muted-foreground">
          Default timing
        </span>
        <NavigationMenu>
          <NavigationMenuList>
            <DemoMenu label="Icons" />
            <DemoMenu label="Logos" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
