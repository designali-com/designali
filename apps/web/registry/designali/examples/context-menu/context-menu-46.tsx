"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
  Heart as HeartIcon,
  Share2 as Share2Icon,
  ShoppingCart as ShoppingCartIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function ProductCardQuickMenu() {
  const [wishlisted, setWishlisted] = React.useState(false)
  const [compare, setCompare] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-56 flex-col gap-2 border p-2">
        <div className="relative aspect-4/3 bg-linear-to-br from-orange-200 to-rose-300">
          {wishlisted ? (
            <HeartIcon className="absolute end-2 top-2 size-4 fill-rose-500 text-rose-500" />
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5 px-1 text-xs">
          <span className="font-medium">Designali Templates Pro</span>
          <span className="text-muted-foreground">$118.00 · 24 templates</span>
          {compare ? (
            <span className="text-[11px] text-primary">Added to compare</span>
          ) : null}
        </div>
        <span className="px-1 text-[11px] text-muted-foreground">
          <span className="hidden pointer-fine:inline">Right-click</span>
          <span className="hidden pointer-coarse:inline">Long press</span> for
          options
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <EyeIcon />
            Quick view
          </ContextMenuItem>
          <ContextMenuItem>
            <ShoppingCartIcon />
            Add to cart
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem
            checked={wishlisted}
            onCheckedChange={setWishlisted}
          >
            Wishlist
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={compare}
            onCheckedChange={setCompare}
          >
            Compare
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Share2Icon />
            Share product
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
