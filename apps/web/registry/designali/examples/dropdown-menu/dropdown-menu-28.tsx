"use client"

import * as React from "react"
import {
  LogOutIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  StarIcon,
  UserPlusIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ProjectCardMenu() {
  const [favorite, setFavorite] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="size-8 bg-gradient-to-br from-fuchsia-500 to-orange-400" />
          <div>
            <p className="flex items-center gap-1 text-xs font-medium">
              Mobile checkout
              {favorite && (
                <StarIcon className="size-3 fill-amber-400 text-amber-400" />
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              12 tasks · 4 members
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Project menu"
              />
            }
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => setFavorite(!favorite)}>
              <StarIcon />
              {favorite ? "Remove favorite" : "Add to favorites"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Project settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlusIcon />
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Leave project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-1.5 bg-muted">
        <div className="h-full w-2/3 bg-primary" />
      </div>
      <p className="text-xs text-muted-foreground">68% complete · Due Nov 28</p>
    </div>
  )
}
