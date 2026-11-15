import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Ireland",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Norway",
  "Portugal",
  "Spain",
  "Sweden",
]

export default function CountryRadioList() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label className="text-xs">Shipping country</Label>
      <ScrollArea className="h-56 border">
        <RadioGroup defaultValue="Portugal" className="gap-0 p-1">
          {countries.map((c) => (
            <Label
              key={c}
              className="flex items-center gap-2 px-2 py-1.5 text-xs font-normal hover:bg-muted"
            >
              <RadioGroupItem value={c} />
              {c}
            </Label>
          ))}
        </RadioGroup>
      </ScrollArea>
    </div>
  )
}
