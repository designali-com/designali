import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const changes = [
  { tag: "New", text: "460+ blocks and 240 landing pages" },
  { tag: "Improved", text: "Icon search on designali.com is faster" },
  { tag: "Fixed", text: "Pricing blocks now respect dark mode" },
]

export default function ReleaseNotesTopSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SparklesIcon data-icon="inline-start" />
        What&apos;s new
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mx-auto w-full max-w-2xl">
          <SheetHeader>
            <Badge variant="secondary" className="mb-1">
              Version 2.8
            </Badge>
            <SheetTitle>Released this week</SheetTitle>
            <SheetDescription>
              Here&apos;s what changed since your last visit.
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-2 px-4">
            {changes.map((change) => (
              <li key={change.text} className="flex items-center gap-2">
                <Badge variant="outline" className="w-20">
                  {change.tag}
                </Badge>
                {change.text}
              </li>
            ))}
          </ul>
          <SheetFooter className="flex-row justify-end">
            <Button variant="link" nativeButton={false} render={<a href="#" />}>
              Read the changelog
            </Button>
            <SheetClose render={<Button />}>Got it</SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
