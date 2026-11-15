import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const sections = [
  [
    "What we collect",
    "Account details, usage events, and the content you create in your workspace.",
  ],
  [
    "How we use it",
    "To provide the service, prevent abuse, and improve features you rely on.",
  ],
  [
    "Who we share with",
    "Only subprocessors listed on our trust page, under strict agreements.",
  ],
  [
    "Retention",
    "We keep data while your account is active and delete it 30 days after closure.",
  ],
  [
    "Your rights",
    "Access, correct, export, or delete your data at any time from settings.",
  ],
  [
    "Contact",
    "Email privacy@fieldnote.app with any questions about this policy.",
  ],
]

export default function DialogScrollableBody() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Read privacy policy
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-md">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Privacy policy</DialogTitle>
          <DialogDescription>Last updated November 1, 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72">
          <div className="flex flex-col gap-4 p-4">
            {sections.map(([title, body]) => (
              <section key={title} className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">{title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </section>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter className="border-t p-4">
          <DialogClose render={<Button />}>I understand</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
