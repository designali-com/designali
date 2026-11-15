import { Bike, Car, CircleParking, TrainFront } from "lucide-react"

const routes = [
  {
    icon: TrainFront,
    title: "By train",
    detail:
      "Take the U2 to Rosenthaler Platz. The venue is a four minute walk north along Weinbergsweg.",
  },
  {
    icon: Car,
    title: "By car",
    detail:
      "Exit the A100 at Prenzlauer Berg and follow signs for Mitte. Allow extra time on weekday mornings.",
  },
  {
    icon: CircleParking,
    title: "Parking",
    detail:
      "Underground parking at Brunnenstraße 7, open 24 hours. Attendees get 50% off with their badge.",
  },
  {
    icon: Bike,
    title: "By bike",
    detail:
      "Covered racks for 120 bikes at the main entrance, plus a free repair stand courtesy of our hosts.",
  },
]

export default function Location04() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b pb-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Venue &middot; 14 &ndash; 15 May
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Kraftwerk Hall
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-2 md:items-end md:text-end">
            <p className="text-lg">Köpenicker Str. 70, 10179 Berlin</p>
            <p className="font-mono text-xs text-muted-foreground">
              52.5112° N, 13.4197° E
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
