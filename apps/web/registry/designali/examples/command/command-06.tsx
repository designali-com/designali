"use client"

import * as React from "react"
import { ChevronsUpDownIcon, FolderKanbanIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const projects = [
  { id: "atlas", name: "Atlas Redesign", team: "Design" },
  { id: "orbit", name: "Orbit API", team: "Platform" },
  { id: "harbor", name: "Harbor Mobile", team: "Mobile" },
  { id: "lumen", name: "Lumen Analytics", team: "Data" },
]

export default function ProjectSwitcherPopover() {
  const [open, setOpen] = React.useState(false)
  const [current, setCurrent] = React.useState("orbit")
  const active = projects.find((project) => project.id === current)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={<Button variant="outline" className="w-56 justify-between" />}
      >
        <span className="flex items-center gap-2 truncate">
          <FolderKanbanIcon />
          {active?.name}
        </span>
        <ChevronsUpDownIcon className="opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="start">
        <Command>
          <CommandInput placeholder="Find project..." />
          <CommandList>
            <CommandEmpty>No project found.</CommandEmpty>
            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.id}
                  value={project.name}
                  data-checked={project.id === current}
                  onSelect={() => {
                    setCurrent(project.id)
                    setOpen(false)
                  }}
                >
                  <div className="flex flex-col">
                    <span>{project.name}</span>
                    <span className="text-[11px] text-muted-foreground">
                      {project.team}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => setOpen(false)}>
                <PlusIcon />
                <span>Create project</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
