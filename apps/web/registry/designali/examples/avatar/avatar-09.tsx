import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const people = [
  "Ali Imam",
  "Sara Designer",
  "Omar Developer",
  "Zara Motion",
  "Kabir Brand",
  "Nadia Client",
]

const tints = [
  "bg-primary/10 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  "bg-primary/10 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
]

function tintFor(name: string) {
  const sum = [...name].reduce((total, char) => total + char.charCodeAt(0), 0)
  return tints[sum % tints.length]
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function ColoredInitialsFallback() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {people.map((person) => (
        <Avatar key={person} size="lg" title={person}>
          <AvatarFallback className={cn("font-medium", tintFor(person))}>
            {initialsOf(person)}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}
