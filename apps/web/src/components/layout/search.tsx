"use client"

import * as React from "react"

import {
  ArrowUpRight,
  SearchIcon,
  icons,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command"

import {
  data,
  uiCategories,
  registryCategories,
  templateCategories,
} from "@/registry/registry-categories"

export function Search() {
  const [open, setOpen] = React.useState(false)

  /**
   * ⌘ K / Ctrl K
   */
  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener("keydown", down)

    return () => {
      document.removeEventListener("keydown", down)
    }
  }, [])

  /**
   * Visible items
   */
  const visibleUI = uiCategories.filter(
    (item) => !item.hidden
  )

  const visibleRegistry = registryCategories.filter(
    (item) => !item.hidden
  )

  const visibleTemplates = templateCategories.filter(
    (item) => !item.hidden
  )

  /**
   * Dynamic Lucide icon
   */
  const getIcon = (iconName: string) => {
    return (
      icons[iconName as keyof typeof icons] ??
      SearchIcon
    )
  }

  /**
   * Navigation
   */
  const navigation = data.navMain

  return (
    <div className="flex flex-col gap-4 md:flex">
      {/* Search Button */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => setOpen(true)}
        className="relative h-7 w-full justify-between pl-3 w-32 md:w-48 lg:w-64"
      >
        <span className="inline-flex text-muted-foreground">
          Search...
        </span>

        <div className="flex items-center gap-1">
          <SearchIcon className="size-3.5" />

          <kbd className="pointer-events-none hidden h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            <span className="text-xs">⌘</span>
            K
          </kbd>
        </div>
      </Button>

      {/* Search Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <Command>
          <CommandInput
            placeholder="Search everything..."
          />

          <CommandList>
            <CommandEmpty>
              No results found.
            </CommandEmpty>

            {/* =========================
                NAVIGATION
            ========================= */}
            <CommandGroup heading="Navigation">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <CommandItem
                    key={`nav-${item.url}`}
                    value={`navigation ${item.title} ${item.url}`}
                    onSelect={() => {
                      window.location.href = item.url
                      setOpen(false)
                    }}
                    className="cursor-pointer"
                  >
                     
                      <Icon className="size-4 shrink-0" />

                      <span>{item.title}</span>
                     
                    <CommandShortcut>
                      <ArrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>

            <CommandSeparator />

            {/* =========================
                UI COMPONENTS
            ========================= */}
            <CommandGroup heading="UI Components">
              {visibleUI.map((item) => {
                const Icon = getIcon(item.iconName)

                return (
                  <CommandItem
                    key={`ui-${item.slug}`}
                    value={`ui ${item.name} ${item.slug} ${item.description}`}
                    onSelect={() => {
                      window.location.href = `/ui/${item.slug}`
                      setOpen(false)
                    }}
                    className="cursor-pointer w-full"
                  >
                    {/* LEFT ICON */}
                    <Icon className="size-4 shrink-0" />

                    <span>{item.name}</span>

                    <CommandShortcut>
                      <ArrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>

            <CommandSeparator />

            {/* =========================
                BLOCKS
            ========================= */}
            <CommandGroup heading="Blocks">
              {visibleRegistry.map((item) => {
                const Icon = getIcon(item.iconName)

                return (
                  <CommandItem
                    key={`block-${item.slug}`}
                    value={`block ${item.name} ${item.slug} ${item.description}`}
                    onSelect={() => {
                      window.location.href = `/blocks/${item.slug}`
                      setOpen(false)
                    }}
                    className="cursor-pointer w-full"
                  >
                    {/* LEFT ICON */}
                    <Icon className="size-4 shrink-0" />

                    <span>{item.name}</span>

                    <CommandShortcut>
                      <ArrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>

            <CommandSeparator />

            {/* =========================
                TEMPLATES
            ========================= */}
            <CommandGroup heading="Templates">
              {visibleTemplates.map((item) => {
                const Icon = getIcon(item.iconName)

                return (
                  <CommandItem
                    key={`template-${item.slug}`}
                    value={`template ${item.name} ${item.slug} ${item.description}`}
                    onSelect={() => {
                      window.location.href = `/templates/${item.slug}`
                      setOpen(false)
                    }}
                    className="cursor-pointer w-full"
                  >
                    {/* LEFT ICON */}
                    <Icon className="size-4 shrink-0" />

                    <span>{item.name}</span>

                    <CommandShortcut>
                      <ArrowUpRight />
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}