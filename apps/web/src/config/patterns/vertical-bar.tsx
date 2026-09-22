import type { Pattern } from "@/src/types/pattern"

export const verticalBarPatterns: Pattern[] = [
  {
    id: "vbar-01",
    name: "Classic Striped Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 20px,
                  transparent 20px,
                  transparent 40px
                )
              `,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-02",
    name: "Thin Fine Pinstripes",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 2px,
                  transparent 2px,
                  transparent 15px
                )
              `,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-03",
    name: "Wide Neon Pillars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 60px,
                  transparent 60px,
                  transparent 120px
                )
              `,
              opacity: 0.15,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-04",
    name: "Dashed Vertical Grid",
    category: "vertical-bar",
    render: function () {
      const totalBars = 20
      const bars = Array.from({ length: totalBars })
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex justify-around">
          {bars.map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-full"
              style={{
                backgroundImage: `linear-gradient(to bottom, var(--primary) 40%, transparent 40%)`,
                backgroundSize: `100% 30px`,
              }}
            />
          ))}
        </div>
      )
    },
  },
  {
    id: "vbar-05",
    name: "Gradient Fade Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 15px,
                  transparent 15px,
                  transparent 30px
                )
              `,
              maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-06",
    name: "Code Editor Guides",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 1px,
                  transparent 1px,
                  transparent 48px
                )
              `,
              opacity: 0.4,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-07",
    name: "Dual Width Alternating Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  var(--primary) 0px, var(--primary) 10px,
                  transparent 10px, transparent 25px,
                  var(--primary) 25px, var(--primary) 45px,
                  transparent 45px, transparent 60px
                )
              `,
              backgroundSize: "60px 100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-08",
    name: "SVG Equalizer Bars",
    category: "vertical-bar",
    render: function () {
      const totalBars = 35
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-between px-4">
          {Array.from({ length: totalBars }).map((_, i) => {
            const heights = [40, 70, 30, 90, 50, 80, 60, 20, 100]
            const h = heights[i % heights.length]
            return (
              <div 
                key={i} 
                className="w-2 rounded-t-sm"
                style={{ 
                  height: `${h}%`, 
                  backgroundColor: "var(--primary)",
                  opacity: 0.8
                }} 
              />
            )
          })}
        </div>
      )
    },
  },
  {
    id: "vbar-09",
    name: "Neon Glow Pillars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 4px,
                  transparent 4px,
                  transparent 40px
                )
              `,
              boxShadow: "inset 0 0 20px var(--primary)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-10",
    name: "Diagonal Shaded Vertical Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 10px,
                  transparent 10px,
                  transparent 20px
                )
              `,
              opacity: 0.25,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-11",
    name: "Minimalist Center Pillar",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex justify-center">
          <div className="w-12 h-full bg-[var(--primary)] opacity-20 blur-sm" />
        </div>
      )
    },
  },
  {
    id: "vbar-12",
    name: "Thick Partition Columns",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 80px,
                  transparent 80px,
                  transparent 160px
                )
              `,
              opacity: 0.08,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-13",
    name: "Gradient Masked Pinstripes",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 3px,
                  transparent 3px,
                  transparent 25px
                )
              `,
              maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-14",
    name: "Subtle Bar Texture",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 1px,
                  transparent 1px,
                  transparent 8px
                )
              `,
              opacity: 0.15,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-15",
    name: "Dotted Vertical Streams",
    category: "vertical-bar",
    render: function () {
      const totalLines = 15
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex justify-around">
          {Array.from({ length: totalLines }).map((_, i) => (
            <div 
              key={i} 
              className="w-[2px] h-full"
              style={{
                backgroundImage: `linear-gradient(to bottom, var(--primary) 50%, transparent 50%)`,
                backgroundSize: `100% 12px`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
      )
    },
  },
  {
    id: "vbar-16",
    name: "Asymmetric Heavy Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  var(--primary) 0px, var(--primary) 35px,
                  transparent 35px, transparent 50px,
                  var(--primary) 50px, var(--primary) 55px,
                  transparent 55px, transparent 100px
                )
              `,
              backgroundSize: "100px 100%",
              opacity: 0.2,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-17",
    name: "Cyber Terminal Lines",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 2px,
                  transparent 2px,
                  transparent 20px
                )
              `,
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-18",
    name: "Architectural Grid Columns",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 1px,
                  transparent 1px,
                  transparent 100px
                )
              `,
              opacity: 0.35,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-19",
    name: "Vibrant Multi-Step Bars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0deg,
                  var(--primary) 10deg,
                  transparent 10deg,
                  transparent 30deg,
                  var(--primary) 30deg,
                  var(--primary) 35deg,
                  transparent 35deg,
                  transparent 50deg
                )
              `,
              opacity: 0.3,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-20",
    name: "Soft Glow Pinstripes",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 3px,
                  transparent 3px,
                  transparent 40px
                )
              `,
              filter: "drop-shadow(0 0 8px var(--primary))",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-21",
    name: "High-Frequency Bar Code",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 1px,
                  transparent 1px,
                  transparent 5px
                )
              `,
              opacity: 0.25,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-22",
    name: "Center Split Vertical Bar",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background flex justify-center items-center">
          <div className="w-8 h-full bg-[var(--primary)] opacity-40 blur-md" />
          <div className="absolute w-2 h-full bg-[var(--primary)]" />
        </div>
      )
    },
  },
  {
    id: "vbar-23",
    name: "Faded Edge Columns",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 25px,
                  transparent 25px,
                  transparent 50px
                )
              `,
              maskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-24",
    name: "Rhythmic Vertical Intervals",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 12px,
                  transparent 12px,
                  transparent 36px
                )
              `,
              opacity: 0.5,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-25",
    name: "Matrix Code Rain Columns",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 2px,
                  transparent 2px,
                  transparent 14px
                )
              `,
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              opacity: 0.6,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-26",
    name: "Wide Panel Blinds",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 50px,
                  transparent 50px,
                  transparent 100px
                )
              `,
              opacity: 0.12,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-27",
    name: "Double Stripe Columns",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  var(--primary) 0px, var(--primary) 4px,
                  transparent 4px, transparent 8px,
                  var(--primary) 8px, var(--primary) 12px,
                  transparent 12px, transparent 35px
                )
              `,
              backgroundSize: "35px 100%",
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-28",
    name: "Subtle Vertical Ruled Lines",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 1px,
                  transparent 1px,
                  transparent 30px
                )
              `,
              opacity: 0.2,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-29",
    name: "Bold Structural Pillars",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 18px,
                  transparent 18px,
                  transparent 75px
                )
              `,
              opacity: 0.4,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "vbar-30",
    name: "Minimalist Vertical Accent",
    category: "vertical-bar",
    render: function () {
      return (
        <div className="absolute inset-0 overflow-hidden bg-background">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  var(--primary) 0px,
                  var(--primary) 2px,
                  transparent 2px,
                  transparent 60px
                )
              `,
              opacity: 0.5,
            }}
          />
        </div>
      )
    },
  },
]