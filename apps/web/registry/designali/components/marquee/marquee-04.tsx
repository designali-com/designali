import { Marquee } from "@/registry/designali/ui/marquee"
import { Badge } from "@workspace/ui/components/badge"

const technologies = [
  { name: "Designali Blocks", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Tailwind CSS", color: "bg-cyan-500" },
  { name: "Figma", color: "bg-pink-500" },
  { name: "Vercel", color: "bg-green-500" },
  { name: "@designali/icons", color: "bg-orange-500" },
  { name: "@designali/logos", color: "bg-purple-500" },
]

export default function DemoOne() {
  return (
    <div className="flex h-80 w-full items-center justify-center overflow-hidden border">
      <main className="">
        <Marquee autoFill speed="fast" pauseOnHover reverse>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} px-4 py-2 text-white last:mr-2`}
            >
              {tech.name}
            </Badge>
          ))}
        </Marquee>
      </main>
    </div>
  )
}
