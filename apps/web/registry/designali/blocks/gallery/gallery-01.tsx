"use client"
 
import * as React from "react"

const images = [
  { src: "/img/hero-1.jpg", alt: "Hero 1" },
  { src: "/img/chat-1-light.jpg", alt: "Chat UI" },
  { src: "/img/hero-2.jpg", alt: "Hero 2" },
  { src: "/img/dashboard-1-dark.jpg", alt: "Dashboard" },
  { src: "/img/login-1.jpg", alt: "Login Screen" },
]

export function HeroSection() {
  const [active, setActive] = React.useState(2)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-hidden border-x">

        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55%] opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(var(--primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--primary) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to bottom, transparent, rgba(0,0,0,.5))",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, rgba(0,0,0,.5))",
            }}
          />
        </div> 
        {/* Gallery */}
        <div
          className="relative z-10 mt-auto h-[780px] w-full overflow-hidden "
          onMouseEnter={() => {}}
        >
          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[18%] bg-gradient-to-r from-background via-background/80 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[18%] bg-gradient-to-l from-background via-background/80 to-transparent" />

          {/* Bottom Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-32 w-full bg-gradient-to-t from-background to-transparent" />

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5 md:gap-7">
            {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
              const index =
                (active + offset + images.length * 10) % images.length

              const distance = Math.abs(offset)

              return (
                <button
                  key={`${active}-${offset}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group relative shrink-0 outline-none"
                  style={{
                    width:
                      distance === 0
                        ? "clamp(220px, 28vw, 360px)"
                        : "clamp(130px, 18vw, 220px)",
                    height:
                      distance === 0
                        ? "clamp(300px, 38vw, 450px)"
                        : "clamp(190px, 25vw, 300px)",
                    opacity:
                      distance === 0
                        ? 1
                        : distance === 1
                          ? 0.72
                          : distance === 2
                            ? 0.35
                            : 0.12,
                    filter:
                      distance === 0
                        ? "none"
                        : distance === 1
                          ? "blur(0.5px)"
                          : distance === 2
                            ? "blur(2px)"
                            : "blur(5px)",
                    transform:
                      distance === 0
                        ? "scale(1)"
                        : distance === 1
                          ? "scale(.88)"
                          : "scale(.75)",
                    transition:
                      "all 700ms cubic-bezier(.22,1,.36,1)",
                  }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[22px] border bg-background p-1 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                     src={images[index]?.src ?? ""}
                     alt={images[index]?.alt ?? ""}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </div> 
      </div>
    </section>
  )
}