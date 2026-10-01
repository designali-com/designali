import { IMac } from "@/registry/designali/ui/apple/imac" 

const colors = [
  "blue",
  "green",
  "pink",
  "silver",
  "yellow",
  "orange",
  "purple",
] as const;

export function IMacColorsDemo() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 xl:grid-cols-3">
      {colors.map((color) => (
        <IMac key={color} size="sm" color={color}>
          <div className="flex h-full items-center justify-center bg-background">
            <p className="text-sm font-medium capitalize">{color} iMac</p>
          </div>
        </IMac>
      ))}
    </div>
  );
}