import { Input } from "@workspace/ui/components/input"

const fields = [
  { id: "fl-first", label: "First name", value: "Talia" },
  { id: "fl-last", label: "Last name", value: "" },
]

export default function FloatingLabelInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {fields.map((f) => (
        <div key={f.id} className="relative">
          <Input
            id={f.id}
            placeholder=" "
            defaultValue={f.value}
            className="peer h-11 pt-4"
          />
          <label
            htmlFor={f.id}
            className="pointer-events-none absolute start-2.5 top-1.5 text-[10px] text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-foreground"
          >
            {f.label}
          </label>
        </div>
      ))}
    </div>
  )
}
