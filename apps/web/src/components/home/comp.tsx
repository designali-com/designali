"use client"

import Link from "next/link"
import { source } from "@/src/lib/source"

import { Badge } from "@workspace/ui/components/badge"

export function Comps({ tree }: { tree: typeof source.pageTree }) {
  return (
    <div>
      <div className="no-scrollbar py-3">
        {tree.children.map((group) => (
          <div key={group.$id} className="flex flex-wrap justify-center gap-2">
            {group.type === "folder" &&
              group.children.map((item) => {
                if (
                  item.type !== "page" ||
                  !item.url.includes("/components/")
                ) {
                  return null
                }

                return (
                  <Badge
                    key={item.url}
                    className="duration-200 hover:bg-foreground hover:text-background"
                    variant="secondary"
                    render={<Link href={item.url} className="block" />}
                  > 
                    {item.name}
                  </Badge>
                )
              })}
          </div>
        ))}
      </div>
    </div>
  )
}
