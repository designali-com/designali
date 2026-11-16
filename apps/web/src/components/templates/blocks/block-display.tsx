import { Index } from "@/registry/__index__"

import { BlockDisplayFrame } from "./block-display-frame"

// Looks the block up by name in the registry index, which makes the bundler
// compile every registry component. Prefer BlockDisplayFrame with a directly
// imported component when the block is known up front.
export async function BlockDisplay({ name }: { name: string }) {
  return <BlockDisplayFrame name={name} component={Index[name]?.component} />
}
