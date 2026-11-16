import { Index } from "@/registry/__index__"

// Kept apart from lib/registry.ts: importing __index__ compiles every registry
// component, so only code that actually renders one should import this.
export function getRegistryComponent(name: string) {
  return Index[name]?.component
}
