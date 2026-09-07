import {
  AppWindow,
  Blocks,
  BookOpen,
  Component,
  DollarSign,
  FileText,
  Frame,
  Triangle,
  Image,
  LayoutGrid,
  LayoutTemplate,
  Shapes,
} from "lucide-react"

export const navLinks = [
  { name: "Templates", href: "/templates" },
  { name: "Blocks", href: "/blocks" },
  { name: "Illustration", href: "/illustration" },
  { name: "Components", href: "/docs" },
  { name: "Icons", href: "/icons" },
]

export const data = {
  navMain: [
    {
      title: "Templates",
      url: "/templates",
      icon: AppWindow,
    },
    {
      title: "Blocks",
      url: "/blocks",
      icon: Blocks,
    },
    {
      title: "Landing",
      url: "/landing",
      icon: LayoutTemplate,
    },
    {
      title: "Patterns",
      url: "/patterns",
      icon: Shapes,
    },
    {
      title: "Illustrations",
      url: "/illustrations",
      icon: Image,
    },
    {
      title: "Icons",
      url: "/icons",
      icon: FileText,
    },
    {
      title: "Logos",
      url: "/logos",
      icon: Frame,
    },
    {
      title: "Vectors",
      url: "/vectors",
      icon: Triangle,
    },
    {
      title: "UI Designs",
      url: "/ui",
      icon: LayoutGrid,
    },
    {
      title: "Components",
      url: "/docs/components/bento",
      icon: Component,
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: DollarSign,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: BookOpen,
    },
  ],
}

export const uiCategories: {
  name: string
  slug: string
  description: string
  iconName: string
  hidden: boolean
}[] = [
  {
    name: "Accordion",
    slug: "accordion",
    description:
      "A vertically stacked set of interactive headings that reveal or hide content.",
    iconName: "List",
    hidden: false,
  },
  {
    name: "Alert",
    slug: "alert",
    description:
      "Displays a callout message that draws attention to important information.",
    iconName: "CircleAlert",
    hidden: false,
  },
  {
    name: "Alert Dialog",
    slug: "alert-dialog",
    description:
      "A modal dialog that interrupts the user with important information or actions.",
    iconName: "TriangleAlert",
    hidden: false,
  },
  {
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    description: "Displays content within a fixed aspect ratio container.",
    iconName: "Ratio",
    hidden: false,
  },
  {
    name: "Avatar",
    slug: "avatar",
    description:
      "An image element with a fallback for representing users or entities.",
    iconName: "CircleUser",
    hidden: false,
  },
  {
    name: "Badge",
    slug: "badge",
    description:
      "Small status indicators for labels, categories, and metadata.",
    iconName: "Badge",
    hidden: false,
  },
  {
    name: "Breadcrumb",
    slug: "breadcrumb",
    description:
      "Displays the user's current location within a navigational hierarchy.",
    iconName: "ChevronRight",
    hidden: false,
  },
  {
    name: "Button",
    slug: "button",
    description:
      "Interactive buttons for actions, navigation, forms, and user interactions.",
    iconName: "Square",
    hidden: false,
  },
  {
    name: "Calendar",
    slug: "calendar",
    description: "A date picker component for selecting and navigating dates.",
    iconName: "Calendar",
    hidden: false,
  },
  {
    name: "Card",
    slug: "card",
    description:
      "A flexible container for grouping related content and actions.",
    iconName: "CreditCard",
    hidden: false,
  },
  {
    name: "Carousel",
    slug: "carousel",
    description:
      "A slideshow component for displaying content in a horizontal sequence.",
    iconName: "GalleryHorizontal",
    hidden: false,
  },
  {
    name: "Chart",
    slug: "chart",
    description:
      "Composable chart components for visualizing data and analytics.",
    iconName: "ChartNoAxesCombined",
    hidden: false,
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description:
      "A control that allows users to select one or multiple options.",
    iconName: "SquareCheck",
    hidden: false,
  },
  {
    name: "Collapsible",
    slug: "collapsible",
    description: "An interactive component that expands and collapses content.",
    iconName: "PanelTop",
    hidden: false,
  },
  {
    name: "Combobox",
    slug: "combobox",
    description:
      "A searchable select control for choosing from a list of options.",
    iconName: "ChevronsUpDown",
    hidden: false,
  },
  {
    name: "Command",
    slug: "command",
    description: "A command menu for searching and executing actions quickly.",
    iconName: "Command",
    hidden: false,
  },
  {
    name: "Context Menu",
    slug: "context-menu",
    description:
      "A menu that appears in response to a user interaction such as right-clicking.",
    iconName: "MousePointerClick",
    hidden: false,
  },
  {
    name: "Dialog",
    slug: "dialog",
    description: "A modal window for displaying content and user actions.",
    iconName: "SquareArrowOutUpRight",
    hidden: false,
  },
  {
    name: "Drawer",
    slug: "drawer",
    description: "A panel that slides in from the edge of the screen.",
    iconName: "PanelLeft",
    hidden: false,
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "A menu that displays a list of actions or options.",
    iconName: "ChevronDown",
    hidden: false,
  },
  {
    name: "Form",
    slug: "form",
    description:
      "Form components with validation and accessible input handling.",
    iconName: "ClipboardList",
    hidden: false,
  },
  {
    name: "Hover Card",
    slug: "hover-card",
    description: "A card that appears when the user hovers over an element.",
    iconName: "SquareMousePointer",
    hidden: false,
  },
  {
    name: "Input",
    slug: "input",
    description: "A text input field for collecting user information.",
    iconName: "TextCursorInput",
    hidden: false,
  },
  {
    name: "Input OTP",
    slug: "input-otp",
    description: "A one-time password input for verification codes.",
    iconName: "KeyRound",
    hidden: false,
  },
  {
    name: "Label",
    slug: "label",
    description: "An accessible label for form controls and input elements.",
    iconName: "Tag",
    hidden: false,
  },
  {
    name: "Menubar",
    slug: "menubar",
    description:
      "A horizontal menu bar for navigation and application actions.",
    iconName: "Menu",
    hidden: false,
  },
  {
    name: "Navigation Menu",
    slug: "navigation-menu",
    description:
      "A navigational menu with support for nested and structured content.",
    iconName: "Navigation",
    hidden: false,
  },
  {
    name: "Pagination",
    slug: "pagination",
    description: "Controls for navigating between pages of content.",
    iconName: "ChevronsLeftRight",
    hidden: false,
  },
  {
    name: "Popover",
    slug: "popover",
    description: "A floating panel for displaying contextual content.",
    iconName: "MessageSquare",
    hidden: false,
  },
  {
    name: "Progress",
    slug: "progress",
    description: "Displays the progress of an operation or task.",
    iconName: "Loader",
    hidden: false,
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    description: "A group of mutually exclusive radio options.",
    iconName: "CircleDot",
    hidden: false,
  },
  {
    name: "Resizable",
    slug: "resizable",
    description: "Resizable panels for creating flexible application layouts.",
    iconName: "PanelLeft",
    hidden: false,
  },
  {
    name: "Scroll Area",
    slug: "scroll-area",
    description: "A custom scrollable container with consistent styling.",
    iconName: "ScrollText",
    hidden: false,
  },
  {
    name: "Select",
    slug: "select",
    description: "A dropdown control for selecting an option from a list.",
    iconName: "ListFilter",
    hidden: false,
  },
  {
    name: "Separator",
    slug: "separator",
    description: "A visual divider used to separate sections of content.",
    iconName: "Minus",
    hidden: false,
  },
  {
    name: "Sheet",
    slug: "sheet",
    description: "A panel that slides into view from the edge of the screen.",
    iconName: "PanelRight",
    hidden: false,
  },
  {
    name: "Sidebar",
    slug: "sidebar",
    description: "A responsive navigation sidebar for application layouts.",
    iconName: "PanelLeft",
    hidden: false,
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "A loading placeholder used while content is being fetched.",
    iconName: "LoaderCircle",
    hidden: false,
  },
  {
    name: "Slider",
    slug: "slider",
    description: "A control for selecting a value from a defined range.",
    iconName: "SlidersHorizontal",
    hidden: false,
  },
  {
    name: "Sonner",
    slug: "sonner",
    description:
      "Toast notifications for displaying temporary feedback messages.",
    iconName: "Bell",
    hidden: false,
  },
  {
    name: "Spinner",
    slug: "spinner",
    description: "An animated loading indicator for asynchronous operations.",
    iconName: "LoaderCircle",
    hidden: false,
  },
  {
    name: "Switch",
    slug: "switch",
    description: "A toggle control for switching between two states.",
    iconName: "ToggleLeft",
    hidden: false,
  },
  {
    name: "Table",
    slug: "table",
    description: "Structured components for displaying tabular data.",
    iconName: "Table",
    hidden: false,
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "Organizes content into multiple selectable tab panels.",
    iconName: "PanelTop",
    hidden: false,
  },
  {
    name: "Textarea",
    slug: "textarea",
    description: "A multiline text input for longer user responses.",
    iconName: "AlignLeft",
    hidden: false,
  },
  {
    name: "Toast",
    slug: "toast",
    description:
      "Temporary notification messages that provide feedback to users.",
    iconName: "Bell",
    hidden: false,
  },
  {
    name: "Toggle",
    slug: "toggle",
    description: "A button that can be toggled between two states.",
    iconName: "ToggleLeft",
    hidden: false,
  },
  {
    name: "Toggle Group",
    slug: "toggle-group",
    description:
      "A group of toggle buttons for selecting one or multiple options.",
    iconName: "ListChecks",
    hidden: false,
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description:
      "Displays additional information when hovering or focusing an element.",
    iconName: "Info",
    hidden: false,
  },
]

export const registryCategories: {
  name: string
  slug: string
  description: string
  iconName: string
  hidden: boolean
}[] = [
  {
    name: "Hero",
    slug: "hero",
    description:
      "Bold and flexible hero sections to make a strong first impression.",
    iconName: "PanelTop",
    hidden: false,
  },
  {
    name: "Header",
    slug: "header",
    description:
      "Clean and responsive headers for navigation, branding, and page actions.",
    iconName: "Navigation",
    hidden: false,
  },
  {
    name: "Footer",
    slug: "footer",
    description:
      "Structured and responsive footers for navigation, links, and essential information.",
    iconName: "PanelBottom",
    hidden: false,
  },
  {
    name: "Pricing",
    slug: "pricing",
    description:
      "Clear pricing sections designed to showcase plans, features, and subscriptions.",
    iconName: "BadgeDollarSign",
    hidden: false,
  },
  {
    name: "FAQs",
    slug: "faqs",
    description:
      "Simple FAQ layouts to answer common questions and remove user friction.",
    iconName: "CircleHelp",
    hidden: false,
  },
  {
    name: "Call to Action",
    slug: "call-to-action",
    description:
      "High-impact call-to-action sections designed to drive meaningful conversions.",
    iconName: "Megaphone",
    hidden: false,
  },
  {
    name: "Features",
    slug: "features",
    description:
      "Flexible feature sections for presenting products, services, and key benefits.",
    iconName: "Sparkles",
    hidden: false,
  },
  {
    name: "Clients",
    slug: "clients",
    description:
      "Client and brand showcase sections to build trust and social proof.",
    iconName: "Users",
    hidden: false,
  },
  {
    name: "Testimonials",
    slug: "testimonials",
    description:
      "Beautiful testimonial layouts for highlighting customer experiences and feedback.",
    iconName: "Quote",
    hidden: false,
  },
  {
    name: "Dashboard",
    slug: "dashboard",
    description:
      "Modern dashboard layouts for analytics, metrics, data, and application interfaces.",
    iconName: "LayoutDashboard",
    hidden: false,
  },
  {
    name: "Gallery",
    slug: "gallery",
    description:
      "Flexible image and media galleries for showcasing visual content beautifully.",
    iconName: "Images",
    hidden: false,
  },
  {
    name: "Media",
    slug: "media",
    description:
      "Video and media-focused sections for engaging visual storytelling.",
    iconName: "Play",
    hidden: false,
  },
  {
    name: "Contact",
    slug: "contact",
    description:
      "Contact sections and layouts that make it easy for visitors to get in touch.",
    iconName: "Mail",
    hidden: false,
  },
  {
    name: "Location",
    slug: "location",
    description:
      "Location and map sections for businesses, offices, stores, and venues.",
    iconName: "MapPin",
    hidden: false,
  },
  {
    name: "Navigation",
    slug: "navigation",
    description:
      "Navigation patterns and menus for creating intuitive website experiences.",
    iconName: "Menu",
    hidden: false,
  },
  {
    name: "Authentication",
    slug: "authentication",
    description:
      "Login, signup, and authentication layouts for modern applications.",
    iconName: "LogIn",
    hidden: false,
  },
  {
    name: "Forms",
    slug: "forms",
    description:
      "Flexible form layouts for collecting user information, inquiries, and submissions.",
    iconName: "UserPlus",
    hidden: false,
  },
  {
    name: "Sections",
    slug: "sections",
    description:
      "General-purpose sections that can be combined to build complete pages.",
    iconName: "Layers",
    hidden: false,
  },
  {
    name: "Grid",
    slug: "grid",
    description:
      "Flexible grid-based layouts for organizing content, products, and visual elements.",
    iconName: "Grid2X2",
    hidden: false,
  },
  {
    name: "Lists",
    slug: "lists",
    description:
      "Clean list layouts for displaying structured content and collections.",
    iconName: "List",
    hidden: false,
  },
  {
    name: "Analytics",
    slug: "analytics",
    description:
      "Data visualization and analytics sections for presenting insights and metrics.",
    iconName: "BarChart3",
    hidden: false,
  },
  {
    name: "Blog",
    slug: "blog",
    description:
      "Editorial and blog layouts for articles, stories, and content-driven websites.",
    iconName: "Newspaper",
    hidden: false,
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    description:
      "Portfolio layouts for showcasing creative work, projects, and case studies.",
    iconName: "Briefcase",
    hidden: false,
  },
  {
    name: "Ecommerce",
    slug: "ecommerce",
    description:
      "Commerce-focused sections for products, shopping experiences, and online stores.",
    iconName: "ShoppingBag",
    hidden: false,
  },
]

export const templateCategories: {
  id: string
  name: string
  slug: string
  description: string
  iconName: string
  hidden: boolean

  url: string
  downloadurl: string

  tech: string[]
  pages: string[]
  features: string[]
  image?: string
  video?: string

  colors: string[]
  fonts: string[]
}[] = [
  {
    id: "portfolio-simple",
    name: "Portfolio Simple",
    slug: "portfolio-simple",
    description:
      "A modern SaaS landing page designed to help software products communicate their value and convert visitors into customers.",
    iconName: "PanelTop",
    hidden: false,

    url: "https://portfolio-simple.designali.com",
    downloadurl: "https://github.com/designali-com/templates/tree/main/portfolio-simple",

    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    pages: ["Home", "About", "Features", "Pricing", "Testimonials", "Contact"],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Smooth Animations",
      "SEO Ready",
      "Accessible",
      "Performance Optimized",
      "Modern UI",
      "Mobile Friendly",
    ],

    colors: ["#0A0A0A", "#FFFFFF", "#6366F1", "#F4F4F5"],

    fonts: ["Inter", "Geist"],

    image: "/images/templates/portfolio-simple.jpg",
    video: "/images/templates/portfolio-simple.jpg",
  }, 
  {
    id: "design-agency",
    name: "Design Agency",
    slug: "design-agency",
    description:
      "A clean and modern personal portfolio template for designers, developers, creatives, and digital professionals.",
    iconName: "PanelTop",
    hidden: false,

    url: "https://design-agency.designali.com",
    downloadurl: "https://github.com/designali-com/templates/tree/main/design-agency",

    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    pages: ["Home", "About", "Work", "Projects", "Services", "Contact"],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Page Transitions",
      "Smooth Animations",
      "SEO Ready",
      "Accessible",
      "Fast Performance",
      "Modern Typography",
    ],

    colors: ["#0A0A0A", "#FFFFFF", "#6366F1", "#F4F4F5"],

    fonts: ["Inter", "Geist"],

    image: "/images/templates/design-agency.jpg",
    video: "/images/templates/design-agency.jpg",
  },
  {
    id: "vercel",
    name: "Vercel",
    slug: "vercel",
    description:
      "A clean and modern personal portfolio template for designers, developers, creatives, and digital professionals.",
    iconName: "PanelTop",
    hidden: false,

    url: "https://vercel.designali.com",
    downloadurl: "https://github.com/designali-com/templates/tree/main/vercel",

    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    pages: ["Home", "About", "Work", "Projects", "Services", "Contact"],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Page Transitions",
      "Smooth Animations",
      "SEO Ready",
      "Accessible",
      "Fast Performance",
      "Modern Typography",
    ],

    colors: ["#0A0A0A", "#FFFFFF", "#6366F1", "#F4F4F5"],

    fonts: ["Inter", "Geist"],

    image: "/images/templates/vercel.jpg",
    video: "/images/templates/vercel.jpg",
  },
  {
    id: "aliimam",
    name: "Ali Imam",
    slug: "aliimam",
    description:
      "A clean and modern personal portfolio template for designers, developers, creatives, and digital professionals.",
    iconName: "PanelTop",
    hidden: false,

    url: "https://old.aliimam.in/",
    downloadurl: "https://github.com/aliimam-in/aliimam",

    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    pages: ["Home", "About", "Work", "Projects", "Services", "Contact"],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Page Transitions",
      "Smooth Animations",
      "SEO Ready",
      "Accessible",
      "Fast Performance",
      "Modern Typography",
    ],

    colors: ["#0A0A0A", "#FFFFFF", "#6366F1", "#F4F4F5"],

    fonts: ["Inter", "Geist"],

    image: "/images/templates/aliimam.jpg",
    video: "/images/templates/aliimam.jpg",
  }, 
]
