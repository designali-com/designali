import {
  RectangleHorizontal,
  LayoutDashboard,
  PanelTop,
  BadgeDollarSign,
  UserRound,
  Layers,
  LayoutPanelTop,
  PanelsTopBottom,
  LogIn,
  MessageCircle,
  CircleHelp,
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
    slug: "section",
    name: "Sections",
    icon: LayoutPanelTop,
  },
  {
    slug: "footer",
    name: "Footer",
    icon: PanelsTopBottom,
  },
  {
    slug: "login",
    name: "Login",
    icon: LogIn,
  },
  {
    slug: "chat",
    name: "Chat",
    icon: MessageCircle,
  },
  {
    slug: "faq",
    name: "FAQ",
    icon: CircleHelp,
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
    // Hero
    {
      nodeId: "1:14",
      name: "Hero 01",
      category: "hero",
      description: "Modern hero section design",
    },
    {
      nodeId: "5:13",
      name: "Hero 02",
      category: "hero",
      description: "Alternative hero section",
    },
    {
      nodeId: "33:5091",
      name: "Hero 03",
      category: "hero",
      description: "Modern website hero section",
    },
    {
      nodeId: "41-11498",
      name: "Hero 04",
      category: "hero",
      description: "Modern website hero section",
    },
  
    // Dashboard
    {
      nodeId: "36-5303",
      name: "Dashboard 01",
      category: "section",
      description: "Dashboard interface design",
    },
    {
      nodeId: "33-3510",
      name: "Dashboard 02",
      category: "dashboard",
      description: "Dashboard interface design",
    },
  
    // Sections
    {
      nodeId: "36-7987",
      name: "Section 01",
      category: "section",
      description: "Website content section",
    },
    {
      nodeId: "36-8534",
      name: "Section 02",
      category: "section",
      description: "Website content section",
    },
    {
      nodeId: "33-2139",
      name: "Section 03",
      category: "section",
      description: "Website content section",
    },
    {
      nodeId: "36-8813",
      name: "Section 04",
      category: "section",
      description: "Website content section",
    },
    {
      nodeId: "36-9373",
      name: "Section 05",
      category: "section",
      description: "Website content section",
    },
    {
      nodeId: "41-11218",
      name: "Section 06",
      category: "section",
      description: "Website content section",
    },
  
    // Footer
    {
      nodeId: "36-5843",
      name: "Footer 01",
      category: "footer",
      description: "Website footer design",
    },
    {
      nodeId: "36-9646",
      name: "Footer 02",
      category: "footer",
      description: "Website footer design",
    },
    {
      nodeId: "41-11185",
      name: "Footer 03",
      category: "footer",
      description: "Website footer design",
    },
  
    // Login
    {
      nodeId: "33-3720",
      name: "Login 01",
      category: "login",
      description: "Login page design",
    },
  
    // Chat
    {
      nodeId: "33-4952",
      name: "Chat 01",
      category: "chat",
      description: "Chat interface design",
    },
    {
      nodeId: "36-10879",
      name: "Chat 02",
      category: "chat",
      description: "Chat interface design",
    },
    {
      nodeId: "41-11818",
      name: "Chat 03",
      category: "chat",
      description: "Chat interface design",
    },
  
    // FAQ
    {
      nodeId: "36-11049",
      name: "FAQ 01",
      category: "faq",
      description: "Frequently asked questions section",
    },
    {
      nodeId: "41-11737",
      name: "FAQ 02",
      category: "faq",
      description: "Frequently asked questions section",
    },
  ]