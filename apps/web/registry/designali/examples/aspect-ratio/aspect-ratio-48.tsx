import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function LaptopScreenMockup() {
  return (
    <Macbook variant="macbook-pro" size="sm" color="silver">
      <AspectRatio ratio={16 / 10} className="bg-background">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-[auto_1fr] gap-1.5 p-2">
          {[
            { label: "Template sales", value: "$48k" },
            { label: "Block installs", value: "1,204" },
            { label: "Conversion", value: "3.2%" },
          ].map((stat) => (
            <div key={stat.label} className="border p-1.5">
              <p className="truncate text-[8px] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold">{stat.value}</p>
            </div>
          ))}
          <div className="col-span-3 flex items-end gap-1 border p-1.5">
            {[40, 65, 50, 80, 60, 90, 75].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/70"
                style={{ height: height + "%" }}
              />
            ))}
          </div>
        </div>
      </AspectRatio>
    </Macbook>
  )
}
