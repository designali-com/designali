/* eslint-disable react/jsx-key */
import { Plus, X } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

const items = [
  {
    id: "01",
    title: "Who am I?",
    content:
      "I’m Ali Imam — a designer and creative developer focused on building digital experiences that are minimal, meaningful, and timeless.",
  },
  {
    id: "02",
    title: "What do I design?",
    content:
      "I create clean, functional interfaces, brand systems, and digital products. My work blends simplicity with clarity and usability.",
  },
  {
    id: "03",
    title: "My design approach",
    content:
      "For me, design isn’t just visuals — it’s how something feels and works. I focus on clarity, detail, and storytelling in every project.",
  },
  {
    id: "04",
    title: "Beyond design",
    content:
      "I bridge design and development, turning ideas into interactive experiences with modern tools and technology.",
  },
  {
    id: "05",
    title: "What inspires me",
    content:
      "Minimalism, architecture, and everyday details. I believe great design is found in the small things we often overlook.",
  },
]

export default function Accordion02() {
  return (
    <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center">
      <Accordion defaultValue={["04"]} className="w-full space-y-2">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border last:border-b"
          >
            <AccordionTrigger className="m-1 cursor-pointer bg-primary/10 px-6 text-left hover:no-underline">
              <div className="flex w-full items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <div className="relative h-6 w-6 shrink-0">
                  <Plus
                    strokeWidth={2}
                    className="
                    absolute inset-0
                    h-6 w-6
                    rotate-0 opacity-100
                    transition-all duration-300
                    group-aria-expanded/accordion-trigger:rotate-45
                    group-aria-expanded/accordion-trigger:opacity-0
                    "
                  />

                  <X
                    strokeWidth={2}
                    className="
                    absolute inset-0
                    h-6 w-6
                    rotate-45 opacity-0
                    transition-all duration-300
                    group-aria-expanded/accordion-trigger:rotate-0
                    group-aria-expanded/accordion-trigger:opacity-100
                   "
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-6">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
