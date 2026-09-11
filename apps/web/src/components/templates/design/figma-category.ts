import {
    RectangleHorizontal,
    LayoutDashboard,
    PanelTop,
    BadgeDollarSign,
    UserRound,
    Layers,
  } from "lucide-react"
  
  export const figmaCategories = [
    {
      slug: "all",
      name: "All Designs",
      icon: Layers,
    },
    {
      slug: "hero",
      name: "Hero",
      icon: RectangleHorizontal,
    },
    {
      slug: "landing-page",
      name: "Landing Page",
      icon: PanelTop,
    },
    {
      slug: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      slug: "pricing",
      name: "Pricing",
      icon: BadgeDollarSign,
    },
    {
      slug: "about",
      name: "About",
      icon: UserRound,
    },
  ]
  
export type FigmaDesign = {
    nodeId: string
    name: string
    category: string
    description?: string
  }
  
  export const figmaDesigns: FigmaDesign[] = [
    {
      nodeId: "328-5115",
      name: "Hero 01",
      category: "hero",
      description: "Modern hero section design",
    },
    {
      nodeId: "341-5641",
      name: "Hero 02",
      category: "hero",
      description: "Alternative hero section",
    },
    {
      nodeId: "328-5027",
      name: "Dashboard 01",
      category: "dashboard",
      description: "Dashboard interface design",
    },
  ]