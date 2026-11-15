import { LanguagesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function TranslationSideBySide() {
  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <Label htmlFor="tr-src" className="flex items-center gap-1">
          <LanguagesIcon className="size-3.5" />
          English
        </Label>
        <Textarea
          id="tr-src"
          readOnly
          className="resize-none bg-muted/40"
          value="Your order has shipped and will arrive within three days."
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tr-dst">Spanish</Label>
        <Textarea
          id="tr-dst"
          defaultValue="Tu pedido ha sido enviado y llegará en tres días."
        />
      </div>
      <div className="flex justify-end gap-2 sm:col-span-2">
        <Button variant="ghost" size="sm">
          Skip
        </Button>
        <Button size="sm">Approve</Button>
      </div>
    </div>
  )
}
