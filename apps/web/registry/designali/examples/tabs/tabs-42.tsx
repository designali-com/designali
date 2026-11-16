import {
  House as HouseIcon,
  Search as SearchIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const tabs = [
  { value: "home", label: "Home", icon: HouseIcon },
  { value: "search", label: "Search", icon: SearchIcon },
  { value: "orders", label: "Downloads", icon: ShoppingBagIcon },
  { value: "profile", label: "Profile", icon: UserIcon },
]

export default function MobileBottomTabBar() {
  return (
    <Tabs
      defaultValue="home"
      className="h-80 w-full max-w-[280px] gap-0 border"
    >
      {tabs.map((t) => (
        <TabsContent
          key={t.value}
          value={t.value}
          className="flex items-center justify-center text-sm text-muted-foreground"
        >
          {t.label} screen
        </TabsContent>
      ))}
      <TabsList className="order-last h-14 w-full border-t">
        {tabs.map((t) => (
          <TabsTrigger
            key={t.value}
            value={t.value}
            className="h-full flex-col gap-0.5 text-[10px]"
          >
            <t.icon className="size-5" />
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
