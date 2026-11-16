"use client"

import * as React from "react"
import {
  Bookmark as BookmarkIcon,
  Hash as HashIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const initialCart = [
  {
    id: "tee",
    name: "Designali Templates Pro",
    price: 28,
    qty: 2,
    swatch: "from-muted to-muted-foreground",
  },
  {
    id: "cap",
    name: "Icons Pro license",
    price: 22,
    qty: 1,
    swatch: "from-chart-1 to-chart-2",
  },
]

export default function CartLineItemMenu() {
  const [cart, setCart] = React.useState(initialCart)
  const [saved, setSaved] = React.useState<string[]>([])
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {cart.map((item) => (
        <ContextMenu key={item.id}>
          <ContextMenuTrigger className="flex items-center gap-3 border-b p-3 text-xs data-popup-open:bg-muted">
            <div className={cn("size-12 bg-linear-to-br", item.swatch)} />
            <div className="flex flex-1 flex-col">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground">Qty {item.qty}</span>
            </div>
            <span className="tabular-nums">
              ${(item.price * item.qty).toFixed(2)}
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-44">
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <HashIcon />
                Quantity
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-24">
                <ContextMenuRadioGroup
                  value={String(item.qty)}
                  onValueChange={(qty) =>
                    setCart((list) =>
                      list.map((c) =>
                        c.id === item.id ? { ...c, qty: Number(qty) } : c
                      )
                    )
                  }
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <ContextMenuRadioItem key={n} value={String(n)}>
                      {n}
                    </ContextMenuRadioItem>
                  ))}
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => {
                  setSaved((s) => [...s, item.name])
                  setCart((list) => list.filter((c) => c.id !== item.id))
                }}
              >
                <BookmarkIcon />
                Save for later
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() =>
                  setCart((list) => list.filter((c) => c.id !== item.id))
                }
              >
                <TrashIcon />
                Remove
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      <div className="flex items-center justify-between p-3 text-xs">
        <span className="text-muted-foreground">
          {saved.length ? saved.length + " saved for later" : "Subtotal"}
        </span>
        <span className="font-semibold tabular-nums">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
