"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ChevronRightIcon,
  FolderIcon,
  FolderKanbanIcon,
  PlusIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const projects = ["Atlas Redesign", "Orbit API", "Harbor Mobile"]

export default function NestedCommandPages() {
  const [pages, setPages] = React.useState<string[]>([])
  const [search, setSearch] = React.useState("")
  const page = pages[pages.length - 1]

  const push = (next: string) => {
    setPages((current) => [...current, next])
    setSearch("")
  }

  return (
    <Command
      className="w-full max-w-sm border"
      onKeyDown={(event) => {
        if (event.key === "Backspace" && !search && pages.length) {
          event.preventDefault()
          setPages((current) => current.slice(0, -1))
        }
      }}
    >
      <div className="flex items-center gap-1 border-b px-2 py-1.5 text-[11px] text-muted-foreground">
        <span>Home</span>
        {pages.map((p) => (
          <React.Fragment key={p}>
            <ChevronRightIcon className="size-3" />
            <span className="text-foreground">{p}</span>
          </React.Fragment>
        ))}
      </div>
      <CommandInput
        value={search}
        onValueChange={setSearch}
        placeholder={page ? "Search in " + page + "..." : "Search..."}
      />
      <CommandList>
        <CommandEmpty>Nothing here.</CommandEmpty>
        {!page ? (
          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => push("Projects")}>
              <FolderIcon />
              <span>Projects</span>
              <ChevronRightIcon className="ms-auto" />
            </CommandItem>
            <CommandItem onSelect={() => push("Team")}>
              <UsersIcon />
              <span>Team</span>
              <ChevronRightIcon className="ms-auto" />
            </CommandItem>
          </CommandGroup>
        ) : null}
        {page === "Projects" ? (
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem key={project} onSelect={() => push(project)}>
                <FolderKanbanIcon />
                <span>{project}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : null}
        {page === "Team" ? (
          <CommandGroup heading="Team">
            <CommandItem>Invite member</CommandItem>
            <CommandItem>Manage roles</CommandItem>
          </CommandGroup>
        ) : null}
        {page && projects.includes(page) ? (
          <CommandGroup heading="Project actions">
            <CommandItem>
              <PlusIcon />
              <span>New issue</span>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              <span>Project settings</span>
            </CommandItem>
            <CommandItem>
              <ArchiveIcon />
              <span>Archive project</span>
            </CommandItem>
          </CommandGroup>
        ) : null}
      </CommandList>
    </Command>
  )
}
