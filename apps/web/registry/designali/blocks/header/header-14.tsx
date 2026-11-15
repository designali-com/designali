"use client"

import { useState } from "react"
import { ChevronDown, Heart, Menu, Phone, Search, ShoppingBag, Truck, User, X } from "lucide-react"

const categories = ["New in", "Women", "Men", "Home", "Outdoor", "Sale"]

export default function Header14() {
  const [open, setOpen] = useState(false)
  const [cart] = useState(3)

  return (
    <section className="w-full bg-background">
      <div className="bg-muted text-xs text-muted-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-6">
          <p className="flex items-center gap-2 truncate">
            <Truck className="size-3.5 shrink-0" />
            Free shipping on orders over $75. Returns within 60 days.
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <a href="#" className="flex items-center gap-1.5 hover:text-foreground">
              <Phone className="size-3.5" />
              1-800-555-0142
            </a>
            <a href="#" className="hover:text-foreground">
              Store locator
            </a>
            <button type="button" className="flex items-center gap-1 hover:text-foreground">
              USD
              <ChevronDown className="size-3" />
            </button>
          </div>
        </div>
      </div>

      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="-ms-2 flex size-9 items-center justify-center lg:hidden"
          >
            <Menu className="size-5" />
          </button>
          <a href="#" className="font-serif text-2xl tracking-tight">
            Fieldhouse
          </a>
          <nav className="ms-8 hidden gap-6 text-sm lg:flex">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className={
                  category === "Sale"
                    ? "text-red-600 hover:underline dark:text-red-400"
                    : "hover:underline underline-offset-8"
                }
              >
                {category}
              </a>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-1">
            <label className="hidden h-9 w-56 items-center gap-2 border px-3 text-sm md:flex">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search products"
                className="w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button type="button" aria-label="Search" className="flex size-9 items-center justify-center md:hidden">
              <Search className="size-5" />
            </button>
            <a href="#" aria-label="Account" className="hidden size-9 items-center justify-center sm:flex">
              <User className="size-5" />
            </a>
            <a href="#" aria-label="Wishlist" className="hidden size-9 items-center justify-center sm:flex">
              <Heart className="size-5" />
            </a>
            <a href="#" aria-label={`Cart, ${cart} items`} className="relative flex size-9 items-center justify-center">
              <ShoppingBag className="size-5" />
              <span className="absolute end-0 top-0 flex size-4 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                {cart}
              </span>
            </a>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40"
          />
          <div className="relative flex h-full w-[85%] max-w-sm flex-col bg-background">
            <div className="flex h-16 items-center justify-between border-b px-6">
              <span className="font-serif text-xl">Fieldhouse</span>
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className={
                    category === "Sale"
                      ? "border-b py-4 text-red-600 dark:text-red-400"
                      : "border-b py-4"
                  }
                >
                  {category}
                </a>
              ))}
            </nav>
            <div className="mt-auto space-y-3 border-t px-6 py-6 text-sm text-muted-foreground">
              <a href="#" className="flex items-center gap-3">
                <User className="size-4" /> Sign in or create account
              </a>
              <a href="#" className="flex items-center gap-3">
                <Heart className="size-4" /> Wishlist
              </a>
              <a href="#" className="flex items-center gap-3">
                <Phone className="size-4" /> 1-800-555-0142
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
