import { source } from "@/src/lib/source"

import { Comps } from "./comp" 

export function ComponentsSection() {
  const pageTree = source.pageTree
  return (
    <div className="">
      <div className="relative flex h-full items-center justify-center overflow-hidden border-dotted border-b md:border-x">
        <Comps tree={pageTree} /> 
      </div>
    </div>
  )
}
