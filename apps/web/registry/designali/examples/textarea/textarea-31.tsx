import {
  Languages as LanguagesIcon,
} from "@designali/icons"

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
          value="Your Designali template is ready to download from your account."
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tr-dst">Spanish</Label>
        <Textarea
          id="tr-dst"
          defaultValue="Tu plantilla de Designali está lista para descargar desde tu cuenta."
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
