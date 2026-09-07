import { Marquee } from "@/registry/designali/ui/marquee"
import { Badge } from "@workspace/ui/components/badge"

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "Framer Motion", color: "bg-pink-500" },
  { name: "Radix UI", color: "bg-green-500" },
  { name: "Lucide Icons", color: "bg-orange-500" },
  { name: "shadcn/ui", color: "bg-purple-500" },
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
