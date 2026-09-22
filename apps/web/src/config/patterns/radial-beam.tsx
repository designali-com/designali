import type { Pattern } from "@/src/types/pattern"

export const radialBeamPatterns: Pattern[] = [
  {
    id: "beam-01",
    name: "Classic Manga Burst",
    category: "radial-beam",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-conic-gradient(
                  from 0deg at 50% 50%,
                  var(--primary) 0deg 15deg,
                  transparent 15deg 30deg
                )
              `,
            }}
          />
        </div>
      )
    },
  }, 
  {
    id: "beam-02",
    name: "Manga Action Burst",
    category: "radial-beam",
    render: function () {
      const totalRays = 16
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -350 1000 700" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <polygon points="0,0 -35,-800 0,-180 35,-800" fill="var(--primary)" />
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-03",
    name: "Manga Concentration Lines",
    category: "radial-beam",
    render: function () {
      const totalRays = 36
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -350 1000 700" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                const widthOffset = (i % 3 === 0) ? 6 : (i % 2 === 0 ? 4 : 2)
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <polygon points={`0,0 -${widthOffset},-800 0,-200 ${widthOffset},-800`} fill="var(--primary)" />
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-04",
    name: "Vintage Sunburst Badge",
    category: "radial-beam",
    render: function () {
      const totalRays = 48
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute w-[400px] h-[400px]" viewBox="-400 -400 800 800">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                const innerRadius = 50
                const outerRadius = i % 2 === 0 ? 400 : 300
                return (
                  <line key={i} x1="0" y1={-innerRadius} x2="0" y2={-outerRadius} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-05",
    name: "Manga Blur Burst",
    category: "radial-beam",
    render: function () {
      const totalRays = 48
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute w-[400px] h-[400px]" viewBox="-400 -400 800 800">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                const innerRadius = 200
                const outerRadius = i % 2 === 0 ? 400 : 300
                return (
                  <line key={i} x1="0" y1={-innerRadius} x2="0" y2={-outerRadius} stroke="var(--primary)" strokeWidth="10" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-06",
    name: "Hypnotic Spiral Vortex",
    category: "radial-beam",
    render: function () {
      const numArms = 12
      const arms = Array.from({ length: numArms })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {arms.map((_, i) => {
                const angleOffset = (i * 360) / numArms
                return (
                  <g key={i} transform={`rotate(${angleOffset})`}>
                    <path d="M 0 0 C 80 40, 180 120, 250 350 C 300 450, 400 600, 600 800 L 800 800 L 800 600 C 600 450, 450 300, 350 200 C 200 100, 100 40, 0 0 Z" fill="var(--primary)" />
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-07",
    name: "Cyber Neon Laser Beams",
    category: "radial-beam",
    render: function () {
      const totalRays = 24
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="0" x2="0" y2="-600" stroke="var(--primary)" strokeWidth={i % 2 === 0 ? "6" : "2"} strokeDasharray={i % 3 === 0 ? "20, 10" : "none"} transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-08",
    name: "Halftone Dot Burst",
    category: "radial-beam",
    render: function () {
      const rings = [100, 180, 260, 340]
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rings.map((r, ringIdx) => {
                const count = 12 + ringIdx * 8
                return Array.from({ length: count }).map((_, i) => {
                  const angle = (i * 360) / count
                  return (
                    <circle key={`${ringIdx}-${i}`} cx="0" cy={-r} r={3 + ringIdx * 1.5} fill="var(--primary)" transform={`rotate(${angle})`} />
                  )
                })
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-09",
    name: "Sharp Geometric Starburst",
    category: "radial-beam",
    render: function () {
      const totalRays = 8
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,0 -40,-700 0,-50 40,-700" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-10",
    name: "Minimalist Ray Grid",
    category: "radial-beam",
    render: function () {
      const totalRays = 32
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-100" x2="0" y2="-500" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.7" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-11",
    name: "Subtle Soft Radiance",
    category: "radial-beam",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div className="absolute inset-0" style={{ background: `repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg 5deg, transparent 5deg 20deg)`, opacity: 0.3 }} />
        </div>
      )
    },
  },
  {
    id: "beam-12",
    name: "Dense Action Waves",
    category: "radial-beam",
    render: function () {
      const totalRays = 60
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -350 1000 700" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-80" x2="0" y2="-700" stroke="var(--primary)" strokeWidth="2" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-13",
    name: "Comic Speed Lines Heavy",
    category: "radial-beam",
    render: function () {
      const totalRays = 20
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -350 1000 700" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,0 -20,-900 0,-100 20,-900" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-14",
    name: "Retro Sunburst Thin",
    category: "radial-beam",
    render: function () {
      const totalRays = 72
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute w-[450px] h-[450px]" viewBox="-400 -400 800 800">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="0" x2="0" y2="-400" stroke="var(--primary)" strokeWidth="1" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-15",
    name: "Abstract Tri-Sector",
    category: "radial-beam",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div className="absolute inset-0" style={{ background: `conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg 120deg, transparent 120deg 240deg, var(--primary) 240deg 360deg)` }} />
        </div>
      )
    },
  },
  {
    id: "beam-16",
    name: "Dashed Concentric Ring Burst",
    category: "radial-beam",
    render: function () {
      const totalRays = 30
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-150" x2="0" y2="-600" stroke="var(--primary)" strokeWidth="4" strokeDasharray="15, 15" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-17",
    name: "Spiked Neon Pulsar",
    category: "radial-beam",
    render: function () {
      const totalRays = 12
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,0 -12,-700 0,-300 12,-700" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-18",
    name: "Smooth Gradient Fan",
    category: "radial-beam",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div className="absolute inset-0" style={{ background: `repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg 45deg, transparent 45deg 90deg)` }} />
        </div>
      )
    },
  },
  {
    id: "beam-19",
    name: "Ethereal Star Dust",
    category: "radial-beam",
    render: function () {
      const totalRays = 50
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <circle key={i} cx="0" cy={-(150 + (i % 5) * 40)} r="2" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-20",
    name: "Crosshatch Radial Blast",
    category: "radial-beam",
    render: function () {
      const totalRays = 24
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <line x1="0" y1="-50" x2="0" y2="-500" stroke="var(--primary)" strokeWidth="3" />
                    <line x1="10" y1="-200" x2="10" y2="-450" stroke="var(--primary)" strokeWidth="1" />
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-21",
    name: "Bold Comic Impact",
    category: "radial-beam",
    render: function () {
      const totalRays = 10
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -350 1000 700" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,0 -50,-800 0,-150 50,-800" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-22",
    name: "Sharp Arcane Web",
    category: "radial-beam",
    render: function () {
      const totalRays = 16
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-50" x2="0" y2="-700" stroke="var(--primary)" strokeWidth="2" strokeDasharray="30, 10, 5, 10" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-23",
    name: "Monochrome Ray Matrix",
    category: "radial-beam",
    render: function () {
      const totalRays = 40
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-100" x2="0" y2="-450" stroke="var(--primary)" strokeWidth={i % 4 === 0 ? "5" : "1"} transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-24",
    name: "Prismatic Angular Burst",
    category: "radial-beam",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div className="absolute inset-0" style={{ background: `repeating-conic-gradient(from 0deg at 50% 50%, var(--primary) 0deg 10deg, transparent 10deg 20deg, var(--primary) 20deg 25deg, transparent 25deg 40deg)` }} />
        </div>
      )
    },
  },
  {
    id: "beam-25",
    name: "Retro Arcade Sun",
    category: "radial-beam",
    render: function () {
      const totalRays = 16
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute w-[500px] h-[500px]" viewBox="-400 -400 800 800">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,-180 -25,-400 25,-400" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-26",
    name: "Pulsating Core Rays",
    category: "radial-beam",
    render: function () {
      const totalRays = 28
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-250" x2="0" y2="-650" stroke="var(--primary)" strokeWidth="4" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-27",
    name: "Fine Silk Threads",
    category: "radial-beam",
    render: function () {
      const totalRays = 90
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="-50" x2="0" y2="-500" stroke="var(--primary)" strokeWidth="0.75" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-28",
    name: "Stepped Comic Segments",
    category: "radial-beam",
    render: function () {
      const totalRays = 18
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <g key={i} transform={`rotate(${angle})`}>
                    <line x1="0" y1="-100" x2="0" y2="-250" stroke="var(--primary)" strokeWidth="8" />
                    <line x1="0" y1="-300" x2="0" y2="-500" stroke="var(--primary)" strokeWidth="4" />
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-29",
    name: "Cosmic Radar sweep",
    category: "radial-beam",
    render: function () {
      const totalRays = 12
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <line key={i} x1="0" y1="0" x2="0" y2="-500" stroke="var(--primary)" strokeWidth="2" strokeDasharray="10, 20, 30, 40" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
  {
    id: "beam-30",
    name: "Ultimate Radial Crown",
    category: "radial-beam",
    render: function () {
      const totalRays = 36
      const rays = Array.from({ length: totalRays })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid slice">
            <g>
              {rays.map((_, i) => {
                const angle = (i * 360) / totalRays
                return (
                  <polygon key={i} points="0,-120 -8,-500 8,-500" fill="var(--primary)" transform={`rotate(${angle})`} />
                )
              })}
            </g>
          </svg>
        </div>
      )
    },
  },
]