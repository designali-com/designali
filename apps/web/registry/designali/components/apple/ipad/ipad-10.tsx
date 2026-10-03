import { IPad } from "@/registry/designali/ui/apple/ipad"

export function IPadDashboardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <IPad
        variant="ipad-pro"
        color="black"
        size="lg"
        orientation="landscape"
      >
        <div className="h-full bg-background p-5">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Overview
            </p>

            <h2 className="text-2xl font-semibold">
              Dashboard
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">
                Revenue
              </p>
              <p className="mt-2 text-xl font-semibold">
                $24.8K
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">
                Users
              </p>
              <p className="mt-2 text-xl font-semibold">
                18.2K
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">
                Growth
              </p>
              <p className="mt-2 text-xl font-semibold">
                +24%
              </p>
            </div>
          </div>
        </div>
      </IPad>
    </div>
  )
}