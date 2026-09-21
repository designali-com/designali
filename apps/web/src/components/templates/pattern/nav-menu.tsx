import {
  Layers,
  Sparkles,
  Grid,
  Layers as LayersIcon,
  Activity,
  Maximize2,
  Shapes, 
} from "lucide-react"

export const patternCategories = [
  {
    slug: "all",
    name: "All Patterns",
    icon: Layers,
  },
   
  {
    slug: "gradients",
    name: "Gradients",
    icon: Sparkles,
  },
  {
    slug: "mesh",
    name: "Mesh",
    icon: Grid,
  },
  {
    slug: "layered",
    name: "Layered",
    icon: LayersIcon,
  },
  {
    slug: "lines",
    name: "Lines",
    icon: Activity,
  },
  {
    slug: "dots",
    name: "Dots",
    icon: Maximize2,
  },
  {
    slug: "abstract",
    name: "Abstract",
    icon: Shapes,
  }
]