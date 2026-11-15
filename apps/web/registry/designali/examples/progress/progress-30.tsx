import { ChevronRightIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Progress, ProgressLabel } from "@workspace/ui/components/progress"

const missing = [
  "Add a profile photo",
  "Write a short bio",
  "Verify phone number",
]

export default function ProfileCompleteness() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={65} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm font-medium">
          Your profile is 65% complete
        </ProgressLabel>
      </Progress>
      <ul className="flex flex-col gap-1">
        {missing.map((item) => (
          <li key={item}>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <PlusIcon className="size-3.5" />
                {item}
              </span>
              <ChevronRightIcon className="size-3.5 text-muted-foreground" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
