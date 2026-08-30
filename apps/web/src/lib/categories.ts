 
import { gridPatterns } from "@/src/config/patterns/patterns"
 

export const PATTERN_CATEGORIES = [
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "mesh", label: "Mesh" },
  { id: "layered", label: "Layered" },
  { id: "lines", label: "Lines" },
  { id: "dots", label: "Dots" },
  { id: "abstract", label: "Abstract" },
  { id: "favourites", label: "Favourites" },
] as const

export const categories = PATTERN_CATEGORIES

export type CategoryId = (typeof PATTERN_CATEGORIES)[number]["id"]

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const

export type UnifiedCategory = {
  name: string
  slug: string
  hidden: boolean
  type: "block" | "page" | "icon" | "pattern"
  count: number
}
 