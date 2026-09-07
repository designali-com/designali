import {
  ClaudeAI,
  Cursor,
  Github,
  GoogleWordmark,
  Grok,
  OpenAI,
  Replicate,
} from "@designali/logos"

import { Marquee } from "@/registry/designali/ui/marquee"
import { Badge } from "@workspace/ui/components/badge"

const technologies = [
  { name: "chat", image: "/img/chat-1-light.jpg" },
  { name: "dashboard", image: "/img/dashboard-1-dark.jpg" },
  { name: "hero1", image: "/img/hero-1.jpg" },
  { name: "login", image: "/img/login-1.jpg" },
  { name: "hero2", image: "/img/hero-2.jpg" },
]


export default function DemoOne() {
  return (
    <div className="flex h-80 w-full items-center justify-center overflow-hidden border">
      <main className="w-full space-y-12">
        <Marquee>
          {technologies.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="py-2">
              <img
                className="mx-auto h-60 border object-contain w-auto"
                src={tech.image}
                alt={tech.name}
              />
            </div>
          ))}
        </Marquee>
      </main>
    </div>
  )
}
