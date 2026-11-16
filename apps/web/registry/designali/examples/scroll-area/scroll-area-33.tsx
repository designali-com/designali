import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const contacts = [
  "Aiko",
  "Ali Imam",
  "Ben",
  "Bianca",
  "Carlos",
  "Chloe",
  "Dev",
  "Dina",
  "Elif",
  "Emil",
  "Farah",
  "Felix",
  "Gia",
  "Hana",
  "Hugo",
]

export default function StickyAlphabetContacts() {
  const groups = contacts.reduce<Record<string, string[]>>((acc, name) => {
    const key = name[0]!
    ;(acc[key] ??= []).push(name)
    return acc
  }, {})

  return (
    <ScrollArea className="h-72 w-full max-w-xs border">
      {Object.entries(groups).map(([letter, names]) => (
        <div key={letter}>
          <div className="sticky top-0 z-10 border-b bg-muted px-3 py-1 text-[11px] font-semibold">
            {letter}
          </div>
          {names.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-2 text-xs"
            >
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">
                  {name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {name}
            </div>
          ))}
        </div>
      ))}
    </ScrollArea>
  )
}
