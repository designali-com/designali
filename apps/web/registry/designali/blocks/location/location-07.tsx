const hq = { city: "Designali", x: 270, y: 150 }

const offices = [
  { city: "Central America", x: 225, y: 215, team: 18 },
  { city: "South America", x: 340, y: 300, team: 26 },
  { city: "Europe", x: 470, y: 125, team: 41 },
  { city: "Africa", x: 510, y: 225, team: 12 },
  { city: "Middle East", x: 640, y: 190, team: 9 },
  { city: "South Asia", x: 705, y: 215, team: 55 },
  { city: "East Asia", x: 885, y: 160, team: 22 },
  { city: "Oceania", x: 905, y: 330, team: 14 },
]

// Very rough continent ellipses used to mask a dot grid.
const land = [
  { cx: 230, cy: 140, rx: 110, ry: 70 },
  { cx: 340, cy: 290, rx: 50, ry: 80 },
  { cx: 520, cy: 130, rx: 70, ry: 45 },
  { cx: 530, cy: 250, rx: 60, ry: 80 },
  { cx: 720, cy: 150, rx: 170, ry: 70 },
  { cx: 900, cy: 320, rx: 50, ry: 30 },
]

function isLand(x: number, y: number) {
  return land.some(
    (l) => ((x - l.cx) / l.rx) ** 2 + ((y - l.cy) / l.ry) ** 2 <= 1
  )
}

const dots: { x: number; y: number }[] = []
for (let x = 10; x < 1000; x += 14) {
  for (let y = 40; y < 400; y += 14) {
    if (isLand(x, y)) dots.push({ x, y })
  }
}

function arc(x: number, y: number) {
  const mx = (hq.x + x) / 2
  const my = Math.min(hq.y, y) - Math.abs(x - hq.x) * 0.25 - 20
  return `M${hq.x} ${hq.y} Q ${mx} ${my} ${x} ${y}`
}

export default function Location07() {
  const total = offices.reduce((sum, o) => sum + o.team, 0) + 120

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Remote by design
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            One studio, clients worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            Designali is a remote design and development studio with {total}+
            projects shipped for clients around the world.
          </p>
        </div>

        <div className="mt-12 border bg-muted/30">
          <svg viewBox="0 0 1000 420" className="h-auto w-full" role="img" aria-label="World map of Designali client regions">
            <g className="fill-foreground/15">
              {dots.map((d) => (
                <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r="2.6" />
              ))}
            </g>
            <g fill="none" className="stroke-primary/60" strokeWidth="1.5" strokeDasharray="4 4">
              {offices.map((o) => (
                <path key={o.city} d={arc(o.x, o.y)} />
              ))}
            </g>
            {offices.map((o) => (
              <g key={o.city}>
                <circle cx={o.x} cy={o.y} r="10" className="fill-primary/15" />
                <circle cx={o.x} cy={o.y} r="4.5" className="fill-primary" />
              </g>
            ))}
            <circle cx={hq.x} cy={hq.y} r="18" className="fill-primary/20" />
            <circle cx={hq.x} cy={hq.y} r="7" className="fill-primary stroke-background" strokeWidth="2" />
          </svg>
        </div>

        <ul className="grid grid-cols-2 border-x border-b sm:grid-cols-3 lg:grid-cols-9">
          <li className="border-e border-b bg-primary p-4 text-primary-foreground lg:border-b-0">
            <p className="text-sm font-medium">{hq.city}</p>
            <p className="text-xs opacity-80">Remote studio &middot; 120</p>
          </li>
          {offices.map((o) => (
            <li key={o.city} className="border-e border-b p-4 lg:border-b-0 lg:last:border-e-0">
              <p className="text-sm font-medium">{o.city}</p>
              <p className="text-xs text-muted-foreground">{o.team} projects</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
