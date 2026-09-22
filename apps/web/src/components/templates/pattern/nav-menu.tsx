import {
  Layers,
  Sparkles,
  Grid,
  Layers as LayersIcon,
  Activity,
  Maximize2,
  Shapes,
  CircleDot,
  BarChart, 
} from "lucide-react"

export const patternCategories = [
  {
    slug: "all",
    name: "All Patterns",
    icon: Layers,
  },
  {
    slug: "radial-beam",
    name: "Radial Beam",
    icon: CircleDot,
  },
  {
    slug: "vertical-bar",
    name: "Vertical Bar",
    icon: BarChart,
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