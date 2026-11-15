import { CopyIcon, EyeIcon, HistoryIcon, RotateCcwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const versions = [
  { id: "v12", label: "Current version", who: "You", when: "Just now" },
  {
    id: "v11",
    label: "Added pricing table",
    who: "Ines Duarte",
    when: "Today, 09:12",
  },
  {
    id: "v10",
    label: "Reworked intro",
    who: "Caleb Ford",
    when: "Yesterday, 17:40",
  },
]

export default function VersionHistoryMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <HistoryIcon data-icon="inline-start" />
        History
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Version history</DropdownMenuLabel>
          {versions.map((v, index) =>
            index === 0 ? (
              <DropdownMenuItem key={v.id} disabled>
                <span className="grid">
                  <span className="font-medium">{v.label}</span>
                  <span className="text-muted-foreground">
                    {v.who} · {v.when}
                  </span>
                </span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={v.id}>
                <DropdownMenuSubTrigger>
                  <span className="grid">
                    <span className="font-medium">{v.label}</span>
                    <span className="text-muted-foreground">
                      {v.who} · {v.when}
                    </span>
                  </span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <EyeIcon />
                    Preview
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCcwIcon />
                    Restore this version
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Make a copy
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
