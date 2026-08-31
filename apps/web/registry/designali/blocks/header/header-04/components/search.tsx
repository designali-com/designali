"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  FilePlus2Icon,
  LayoutTemplateIcon,
  PaletteIcon,
  PenToolIcon,
  SearchIcon,
} from "lucide-react"

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

export function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => {
      document.removeEventListener("keydown", down)
    }
  }, [])

  return (
    <div className="">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 w-full max-w-xs items-center border border-input bg-background px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 lg:inline-flex"
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="-ms-1 me-3 text-muted-foreground/80"
            size={16}
            aria-hidden="true"
          />

          <span className="font-normal text-muted-foreground/70">
            Search design...
          </span>
        </span>

        <kbd className="ms-12 -me-1 inline-flex h-5 items-center border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
          ⌘K
        </kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type to search components, assets, or docs..." />

          <CommandList>
            <CommandEmpty>No matches found.</CommandEmpty>

            {/* Create */}
            <CommandGroup heading="Create">
              <CommandItem>
                <FilePlus2Icon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>New project</span>

                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>

              <CommandItem>
                <LayoutTemplateIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>New template</span>

                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>

              <CommandItem>
                <PenToolIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Start design</span>

                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {/* Navigate */}
            <CommandGroup heading="Navigate">
              <CommandItem>
                <ArrowUpRightIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Go to workspace</span>
              </CommandItem>

              <CommandItem>
                <ArrowUpRightIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Go to templates</span>
              </CommandItem>

              <CommandItem>
                <ArrowUpRightIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Go to documentation</span>
              </CommandItem>

              <CommandItem>
                <ArrowUpRightIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Go to blocks</span>
              </CommandItem>

              <CommandItem>
                <ArrowUpRightIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Go to icons</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {/* Themes */}
            <CommandGroup heading="Themes">
              <CommandItem>
                <PaletteIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />

                <span>Switch theme</span>

                <CommandShortcut>⌘⇧T</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
