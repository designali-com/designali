import { Marquee } from "@/registry/designali/ui/marquee"
import { Badge } from "@workspace/ui/components/badge"

const technologies = [
  { name: "Designali Blocks", color: "bg-primary" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-chart-2" },
  { name: "Tailwind CSS", color: "bg-primary" },
  { name: "Figma", color: "bg-primary" },
  { name: "Vercel", color: "bg-primary" },
  { name: "@designali/icons", color: "bg-primary" },
  { name: "@designali/logos", color: "bg-primary" },
]

export default function DemoOne() {
  return (
    <div className="flex h-80 w-full items-center justify-center overflow-hidden border">
      <main className="flex flex-col gap-2">
        <Marquee speed={"slow"}>
          {technologies.map((tech, index) => (
            <Badge key={index} className={`${tech.color} px-4 py-1 text-white`}>
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee speed={"normal"}>
          {technologies.map((tech, index) => (
            <Badge key={index} className={`${tech.color} px-4 py-1 text-white`}>
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee speed={"fast"}>
          {technologies.map((tech, index) => (
            <Badge key={index} className={`${tech.color} px-4 py-1 text-white`}>
              {tech.name}
            </Badge>
          ))}
        </Marquee>
        <Marquee speed={6}>
          {technologies.map((tech, index) => (
            <Badge key={index} className={`${tech.color} px-4 py-1 text-white`}>
              {tech.name}
            </Badge>
          ))}
        </Marquee>
      </main>
    </div>
  )
}
