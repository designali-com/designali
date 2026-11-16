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
  "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
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
