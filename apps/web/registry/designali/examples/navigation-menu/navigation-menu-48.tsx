import {
  ArrowRight as ArrowRightIcon,
  Bookmark as BookmarkIcon,
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

export default function EmptyStateMenuNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Browse
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <BookmarkIcon className="me-1.5 size-3.5" /> Saved
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-60 flex-col items-center gap-2 px-4 py-6 text-center">
              <span className="flex size-10 items-center justify-center bg-muted">
                <BookmarkIcon className="size-5 text-muted-foreground" />
              </span>
              <p className="text-sm font-medium">No saved items yet</p>
              <p className="text-xs text-muted-foreground">
                Bookmark Designali templates to compare them later.
              </p>
              <NavigationMenuLink href="#" className="mt-1 border px-3">
                Start browsing <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
