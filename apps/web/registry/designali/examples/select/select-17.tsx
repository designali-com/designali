import {
  Languages as LanguagesIcon,
} from "@designali/icons"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const languages = [
  { label: "English", value: "en", native: "English" },
  { label: "Spanish", value: "es", native: "Espanol" },
  { label: "French", value: "fr", native: "Francais" },
  { label: "German", value: "de", native: "Deutsch" },
  { label: "Japanese", value: "ja", native: "日本語" },
  { label: "Korean", value: "ko", native: "한국어" },
]

export default function LanguageSelect() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm justify-between">
      <FieldContent>
        <FieldLabel htmlFor="language">Language</FieldLabel>
        <FieldDescription>Applies to menus and emails.</FieldDescription>
      </FieldContent>
      <Select items={languages} defaultValue="en">
        <SelectTrigger id="language" className="w-36">
          <LanguagesIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
              <span className="ms-auto ps-3 text-muted-foreground">
                {item.native}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
