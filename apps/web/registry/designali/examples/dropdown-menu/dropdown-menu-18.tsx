import {
  FileTextIcon,
  LanguagesIcon,
  LockIcon,
  ScissorsIcon,
  SparklesIcon,
  TextIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function PlanGatedMenuItems() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <SparklesIcon data-icon="inline-start" />
        AI actions
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Free</DropdownMenuLabel>
          <DropdownMenuItem>
            <TextIcon />
            Fix spelling and grammar
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ScissorsIcon />
            Make shorter
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            Pro
            <Badge variant="secondary">Upgrade</Badge>
          </DropdownMenuLabel>
          <DropdownMenuItem disabled>
            <LanguagesIcon />
            Translate document
            <LockIcon className="ms-auto" />
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <FileTextIcon />
            Summarize thread
            <LockIcon className="ms-auto" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
