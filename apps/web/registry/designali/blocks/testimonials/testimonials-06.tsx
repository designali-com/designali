const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "3,200+", label: "Teams onboarded" },
  { value: "97%", label: "Would recommend" },
]

export default function Testimonials06() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="flex flex-col justify-between border-b border-border p-8 md:p-12 lg:border-r lg:border-b-0">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Case study &middot; Atlas Freight
            </p>
            <blockquote className="mt-8 text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              &ldquo;We rolled out a single design language across 14 internal
              tools in one quarter. Support tickets about confusing UI dropped
              by half.&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div
                className="size-14 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--chart-1), var(--chart-3))",
                }}
              />
              <div>
                <p className="font-medium">Jonas Lindqvist</p>
                <p className="text-sm text-muted-foreground">
                  Director of Product, Atlas Freight
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 divide-y divide-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-end justify-between p-8 md:px-12"
              >
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-4xl font-semibold tracking-tighter md:text-5xl">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
