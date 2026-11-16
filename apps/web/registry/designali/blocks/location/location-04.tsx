import {
  Calendar,
  Globe,
  Mail,
  Video,
} from "@designali/icons"

const routes = [
  {
    icon: Globe,
    title: "Join online",
    detail:
      "Designali Live streams from designali.com. Sign in with your free account to join from anywhere.",
  },
  {
    icon: Video,
    title: "Watch live",
    detail:
      "Ali Imam walks through brand, UI/UX and Next.js builds in real time, with live Q&A after each session.",
  },
  {
    icon: Calendar,
    title: "Add to calendar",
    detail:
      "Sessions are scheduled across time zones. Add them to your calendar and get a reminder before each one.",
  },
  {
    icon: Mail,
    title: "Get the recording",
    detail:
      "Missed a session? Recordings and source files land in your inbox from hello@designali.com.",
  },
]

export default function Location04() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b pb-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Online event &middot; 14 &ndash; 15 May
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Designali Live
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-2 md:items-end md:text-end">
            <p className="text-lg">Online · Remote, worldwide</p>
            <p className="font-mono text-xs text-muted-foreground">
              designali.com
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route, index) => (
            <div
              key={route.title}
              className="space-y-4 border-b py-8 sm:pe-8 lg:border-b-0 lg:border-e lg:px-8 lg:first:ps-0 lg:last:border-e-0"
            >
              <div className="flex items-center justify-between">
                <route.icon className="size-5" />
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-medium">{route.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {route.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
