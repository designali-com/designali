import {
  Calendar as CalendarIcon,
  Eye as EyeIcon,
  ChartGantt as GanttChartIcon,
  Kanban as KanbanIcon,
  List as ListIcon,
  Table as TableIcon,
} from "@designali/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

export default function BorderedToolbarNav() {
  return (
    <NavigationMenu className="border">
      <NavigationMenuList className="divide-x">
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <ListIcon /> List
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            active
            className={navigationMenuTriggerStyle()}
          >
            <KanbanIcon /> Board
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <EyeIcon className="me-1.5 size-3.5" /> Views
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-48 flex-col gap-1">
              {[
                { label: "Timeline", icon: GanttChartIcon },
                { label: "Calendar", icon: CalendarIcon },
                { label: "Table", icon: TableIcon },
              ].map((v) => (
                <li key={v.label}>
                  <NavigationMenuLink href="#">
                    <v.icon /> {v.label}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
