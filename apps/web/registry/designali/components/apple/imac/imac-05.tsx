import { IMac } from "@/registry/designali/ui/apple/imac"

export function IMacSizesDemo() {
  return (
    <div className="flex flex-col items-center gap-12 p-8">
      <IMac size="lg" color="silver">
        <div className="h-full bg-muted/30 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Analytics</h2>
              <p className="text-sm text-muted-foreground">
                Overview of your performance
              </p>
            </div>

            <button className="rounded-md border bg-background px-3 py-2 text-sm">
              This month
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              ["Revenue", "$24,890"],
              ["Customers", "1,284"],
              ["Growth", "+18.4%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border bg-background p-4"
              >
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 h-52 rounded-xl border bg-background p-5">
            <div className="flex h-full items-end gap-3">
              {[35, 50, 42, 65, 55, 78, 68, 90, 75, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-primary/70"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </IMac>
    </div>
  );
}