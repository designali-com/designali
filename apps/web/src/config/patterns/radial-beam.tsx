import type { Pattern } from "@/src/types/pattern"
 

export const radialBeamPatterns: Pattern[] = [ 
 
  {
    id: "burst-d02",
    name: "Wide Compass",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(79, 70, 229, 0.5) 0deg, transparent 10deg,
                transparent 35deg, rgba(79, 70, 229, 0.3) 45deg, transparent 55deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.45) 15%, transparent 42%),
              radial-gradient(circle at 50% 50%, #0c0a1d 0%, transparent 4%),
              radial-gradient(circle at 50% 50%, #eef2ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(2px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(99, 102, 241, 0.8) 0deg, transparent 10deg,
                transparent 35deg, rgba(99, 102, 241, 0.45) 45deg, transparent 55deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.55) 15%, transparent 44%),
              radial-gradient(circle at 50% 50%, #03020a 0%, transparent 4%),
              radial-gradient(circle at 50% 50%, #09090b 0%, #000000 100%)
            `,
              filter: "blur(2px)",
            }}
          />
        </>
      )
    },
  },

  // 3. Corner Flare — off-center burst, like a sun peeking from top-right
  {
    id: "burst-d03",
    name: "Corner Flare",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 90deg at 82% 18%,
                transparent 0deg, rgba(79, 70, 229, 0.45) 2deg, transparent 8deg,
                transparent 20deg, rgba(79, 70, 229, 0.25) 22deg, transparent 30deg
              ),
              radial-gradient(circle at 82% 18%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.5) 12%, transparent 55%),
              radial-gradient(circle at 82% 18%, #0c0a1d 0%, transparent 3%),
              radial-gradient(circle at 82% 18%, #eef2ff 0%, #dbeafe 60%, #c7d2fe 100%)
            `,
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 90deg at 82% 18%,
                transparent 0deg, rgba(99, 102, 241, 0.75) 2deg, transparent 8deg,
                transparent 20deg, rgba(99, 102, 241, 0.45) 22deg, transparent 30deg
              ),
              radial-gradient(circle at 82% 18%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.6) 12%, transparent 58%),
              radial-gradient(circle at 82% 18%, #03020a 0%, transparent 3%),
              radial-gradient(circle at 82% 18%, #05050a 0%, #000000 70%)
            `,
              filter: "blur(1px)",
            }}
          />
        </>
      )
    },
  },

  // 4. Double Star — two overlapping burst centers (binary star)
  {
    id: "burst-d04",
    name: "Double Star",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 10deg at 35% 45%,
                transparent 0deg, rgba(79, 70, 229, 0.4) 2deg, transparent 8deg,
                transparent 30deg, rgba(79, 70, 229, 0.2) 32deg, transparent 42deg
              ),
              repeating-conic-gradient(from 25deg at 68% 62%,
                transparent 0deg, rgba(67, 56, 202, 0.4) 2deg, transparent 8deg,
                transparent 30deg, rgba(67, 56, 202, 0.2) 32deg, transparent 42deg
              ),
              radial-gradient(circle at 35% 45%, rgba(224, 231, 255, 0.9) 0%, rgba(79, 70, 229, 0.35) 9%, transparent 30%),
              radial-gradient(circle at 68% 62%, rgba(224, 231, 255, 0.9) 0%, rgba(67, 56, 202, 0.35) 9%, transparent 30%),
              radial-gradient(circle at 45% 55%, #f5f3ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 10deg at 35% 45%,
                transparent 0deg, rgba(99, 102, 241, 0.75) 2deg, transparent 8deg,
                transparent 30deg, rgba(99, 102, 241, 0.35) 32deg, transparent 42deg
              ),
              repeating-conic-gradient(from 25deg at 68% 62%,
                transparent 0deg, rgba(129, 140, 248, 0.75) 2deg, transparent 8deg,
                transparent 30deg, rgba(129, 140, 248, 0.35) 32deg, transparent 42deg
              ),
              radial-gradient(circle at 35% 45%, rgba(224, 231, 255, 0.9) 0%, rgba(99, 102, 241, 0.45) 9%, transparent 32%),
              radial-gradient(circle at 68% 62%, rgba(224, 231, 255, 0.9) 0%, rgba(129, 140, 248, 0.45) 9%, transparent 32%),
              radial-gradient(circle at 45% 55%, #05050f 0%, #000000 100%)
            `,
              filter: "blur(1px)",
            }}
          />
        </>
      )
    },
  },

  // 5. Lens Cross — 4 dominant beams in a plus shape, camera-flare style
  {
    id: "burst-d05",
    name: "Lens Cross",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(79, 70, 229, 0.45) 0deg, transparent 4deg,
                transparent 86deg, rgba(79, 70, 229, 0.45) 90deg, transparent 94deg,
                transparent 176deg, rgba(79, 70, 229, 0.45) 180deg, transparent 184deg,
                transparent 266deg, rgba(79, 70, 229, 0.45) 270deg, transparent 274deg
              ),
              repeating-conic-gradient(from 8deg at 50% 50%,
                transparent 0deg, rgba(79, 70, 229, 0.12) 3deg, transparent 15deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.5) 10%, transparent 30%),
              radial-gradient(circle at 50% 50%, #0c0a1d 0%, transparent 3%),
              radial-gradient(circle at 50% 50%, #eef2ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(0.6px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(99, 102, 241, 0.8) 0deg, transparent 4deg,
                transparent 86deg, rgba(99, 102, 241, 0.8) 90deg, transparent 94deg,
                transparent 176deg, rgba(99, 102, 241, 0.8) 180deg, transparent 184deg,
                transparent 266deg, rgba(99, 102, 241, 0.8) 270deg, transparent 274deg
              ),
              repeating-conic-gradient(from 8deg at 50% 50%,
                transparent 0deg, rgba(99, 102, 241, 0.18) 3deg, transparent 15deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.6) 10%, transparent 32%),
              radial-gradient(circle at 50% 50%, #03020a 0%, transparent 3%),
              radial-gradient(circle at 50% 50%, #09090b 0%, #000000 100%)
            `,
              filter: "blur(0.6px)",
            }}
          />
        </>
      )
    },
  },

  // 6. Spiral Burst — layered rotated conic gradients give a twisted feel
  {
    id: "burst-d06",
    name: "Spiral Burst",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                transparent 0deg, rgba(79, 70, 229, 0.35) 2deg, transparent 12deg
              ),
              repeating-conic-gradient(from 30deg at 50% 50%,
                transparent 0deg, rgba(79, 70, 229, 0.25) 2deg, transparent 12deg
              ),
              repeating-conic-gradient(from 60deg at 50% 50%,
                transparent 0deg, rgba(79, 70, 229, 0.18) 2deg, transparent 12deg
              ),
              conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(79,70,229,0.1) 180deg, transparent 360deg),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.45) 12%, transparent 40%),
              radial-gradient(circle at 50% 50%, #0c0a1d 0%, transparent 5%),
              radial-gradient(circle at 50% 50%, #eef2ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(2px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                transparent 0deg, rgba(99, 102, 241, 0.65) 2deg, transparent 12deg
              ),
              repeating-conic-gradient(from 30deg at 50% 50%,
                transparent 0deg, rgba(99, 102, 241, 0.45) 2deg, transparent 12deg
              ),
              repeating-conic-gradient(from 60deg at 50% 50%,
                transparent 0deg, rgba(99, 102, 241, 0.35) 2deg, transparent 12deg
              ),
              conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99,102,241,0.15) 180deg, transparent 360deg),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.55) 12%, transparent 42%),
              radial-gradient(circle at 50% 50%, #03020a 0%, transparent 5%),
              radial-gradient(circle at 50% 50%, #09090b 0%, #000000 100%)
            `,
              filter: "blur(2px)",
            }}
          />
        </>
      )
    },
  },

  // 7. Shockwave Rings — rays + concentric expanding rings, radar/pulse feel
  {
    id: "burst-d07",
    name: "Shockwave Rings",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                transparent 0deg, rgba(79, 70, 229, 0.3) 2deg, transparent 15deg
              ),
              repeating-radial-gradient(circle at 50% 50%,
                transparent 0%, transparent 12%, rgba(79, 70, 229, 0.22) 13%, transparent 15%,
                transparent 24%, rgba(79, 70, 229, 0.15) 25%, transparent 27%,
                transparent 36%, rgba(79, 70, 229, 0.1) 37%, transparent 39%
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.45) 10%, transparent 30%),
              radial-gradient(circle at 50% 50%, #0c0a1d 0%, transparent 5%),
              radial-gradient(circle at 50% 50%, #eef2ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(0.8px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                transparent 0deg, rgba(99, 102, 241, 0.55) 2deg, transparent 15deg
              ),
              repeating-radial-gradient(circle at 50% 50%,
                transparent 0%, transparent 12%, rgba(99, 102, 241, 0.3) 13%, transparent 15%,
                transparent 24%, rgba(99, 102, 241, 0.2) 25%, transparent 27%,
                transparent 36%, rgba(99, 102, 241, 0.12) 37%, transparent 39%
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.55) 10%, transparent 32%),
              radial-gradient(circle at 50% 50%, #03020a 0%, transparent 5%),
              radial-gradient(circle at 50% 50%, #09090b 0%, #000000 100%)
            `,
              filter: "blur(0.8px)",
            }}
          />
        </>
      )
    },
  },

  // 8. Vertical Pillar — a single dominant light shaft, no radiating rays
  {
    id: "burst-d08",
    name: "Vertical Pillar",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              linear-gradient(90deg, transparent 44%, rgba(79, 70, 229, 0.45) 50%, transparent 56%),
              linear-gradient(90deg, transparent 40%, rgba(79, 70, 229, 0.2) 50%, transparent 60%),
              radial-gradient(ellipse 30% 40% at 50% 100%, rgba(224, 231, 255, 0.9) 0%, rgba(79, 70, 229, 0.35) 40%, transparent 75%),
              radial-gradient(circle at 50% 100%, #f5f3ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(3px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              linear-gradient(90deg, transparent 44%, rgba(99, 102, 241, 0.7) 50%, transparent 56%),
              linear-gradient(90deg, transparent 40%, rgba(99, 102, 241, 0.3) 50%, transparent 60%),
              radial-gradient(ellipse 30% 40% at 50% 100%, rgba(224, 231, 255, 0.9) 0%, rgba(99, 102, 241, 0.45) 40%, transparent 78%),
              radial-gradient(circle at 50% 100%, #03020a 0%, #000000 100%)
            `,
              filter: "blur(3px)",
            }}
          />
        </>
      )
    },
  },

  // 9. Scattered Sparks — 3 small stars scattered at different points
  {
    id: "burst-d09",
    name: "Scattered Sparks",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 5deg at 25% 30%, transparent 0deg, rgba(79, 70, 229, 0.4) 2deg, transparent 6deg, transparent 40deg, rgba(79, 70, 229, 0.2) 42deg, transparent 48deg),
              repeating-conic-gradient(from 20deg at 72% 22%, transparent 0deg, rgba(79, 70, 229, 0.35) 2deg, transparent 6deg, transparent 40deg, rgba(79, 70, 229, 0.18) 42deg, transparent 48deg),
              repeating-conic-gradient(from 35deg at 55% 75%, transparent 0deg, rgba(79, 70, 229, 0.38) 2deg, transparent 6deg, transparent 40deg, rgba(79, 70, 229, 0.2) 42deg, transparent 48deg),
              radial-gradient(circle at 25% 30%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.35) 6%, transparent 20%),
              radial-gradient(circle at 72% 22%, rgba(224, 231, 255, 0.9) 0%, rgba(79, 70, 229, 0.3) 5%, transparent 18%),
              radial-gradient(circle at 55% 75%, rgba(224, 231, 255, 0.9) 0%, rgba(79, 70, 229, 0.3) 5%, transparent 18%),
              radial-gradient(circle at 50% 50%, #f5f3ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(0.8px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 5deg at 25% 30%, transparent 0deg, rgba(99, 102, 241, 0.7) 2deg, transparent 6deg, transparent 40deg, rgba(99, 102, 241, 0.4) 42deg, transparent 48deg),
              repeating-conic-gradient(from 20deg at 72% 22%, transparent 0deg, rgba(99, 102, 241, 0.6) 2deg, transparent 6deg, transparent 40deg, rgba(99, 102, 241, 0.35) 42deg, transparent 48deg),
              repeating-conic-gradient(from 35deg at 55% 75%, transparent 0deg, rgba(99, 102, 241, 0.65) 2deg, transparent 6deg, transparent 40deg, rgba(99, 102, 241, 0.38) 42deg, transparent 48deg),
              radial-gradient(circle at 25% 30%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.45) 6%, transparent 22%),
              radial-gradient(circle at 72% 22%, rgba(224, 231, 255, 0.9) 0%, rgba(99, 102, 241, 0.4) 5%, transparent 20%),
              radial-gradient(circle at 55% 75%, rgba(224, 231, 255, 0.9) 0%, rgba(99, 102, 241, 0.4) 5%, transparent 20%),
              radial-gradient(circle at 50% 50%, #03020a 0%, #000000 100%)
            `,
              filter: "blur(0.8px)",
            }}
          />
        </>
      )
    },
  },

  // 10. Soft Nebula — few, wide, heavily-blurred rays with a big dreamy core
  {
    id: "burst-d10",
    name: "Soft Nebula",
    category: "radial-beam",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(79, 70, 229, 0.25) 0deg, transparent 25deg,
                transparent 65deg, rgba(79, 70, 229, 0.15) 90deg, transparent 115deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(79, 70, 229, 0.38) 22%, transparent 60%),
              radial-gradient(circle at 50% 50%, #f5f3ff 0%, #e0e7ff 100%)
            `,
              filter: "blur(10px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                rgba(99, 102, 241, 0.5) 0deg, transparent 25deg,
                transparent 65deg, rgba(99, 102, 241, 0.3) 90deg, transparent 115deg
              ),
              radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.95) 0%, rgba(99, 102, 241, 0.48) 22%, transparent 62%),
              radial-gradient(circle at 50% 50%, #03020a 0%, #000000 100%)
            `,
              filter: "blur(10px)",
            }}
          />
        </>
      )
    },
  },
]