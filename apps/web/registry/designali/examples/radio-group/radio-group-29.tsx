import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const languages = [
  { value: "en", name: "English", native: "English" },
  { value: "es", name: "Spanish", native: "Español" },
  { value: "fr", name: "French", native: "Français" },
  { value: "de", name: "German", native: "Deutsch" },
  { value: "ja", name: "Japanese", native: "日本語" },
  { value: "pt", name: "Portuguese", native: "Português" },
]

export default function InterfaceLanguageList() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-sm font-medium">Interface language</p>
      <RadioGroup
        defaultValue="en"
        className="max-h-56 gap-0 overflow-y-auto border"
      >
        {languages.map((lang) => (
          <label
            key={lang.value}
            htmlFor={"lang-" + lang.value}
            className="flex cursor-pointer items-center gap-3 border-b px-3 py-2 last:border-b-0 hover:bg-muted/50"
          >
            <span className="w-7 font-mono text-xs text-muted-foreground uppercase">
              {lang.value}
            </span>
            <span className="flex-1 text-sm">
              {lang.native}
              <span className="ms-1.5 text-xs text-muted-foreground">
                {lang.name}
              </span>
            </span>
            <RadioGroupItem value={lang.value} id={"lang-" + lang.value} />
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
