import {
    PanelTop,
    Navigation,
    PanelBottom,
    BadgeDollarSign,
    CircleHelp,
    Megaphone,
    Sparkles,
    Users,
    LayoutDashboard,
    Images,
    Quote,
    Play,
    Mail,
    MapPin,
    Menu,
    LogIn,
    UserPlus,
    Layers,
    Grid2X2,
    List,
    BarChart3,
    Newspaper,
    Briefcase,
    ShoppingBag,
    type LucideIcon,
} from "lucide-react"

export const registryCategories: {
    name: string
    slug: string
    description: string
    icon: LucideIcon
    hidden: boolean
}[] = [
        {
            name: "Hero",
            slug: "hero",
            description:
                "Bold and flexible hero sections to make a strong first impression.",
            icon: PanelTop,
            hidden: false,
        },
        {
            name: "Header",
            slug: "header",
            description:
                "Clean and responsive headers for navigation, branding, and page actions.",
            icon: Navigation,
            hidden: false,
        },
        {
            name: "Footer",
            slug: "footer",
            description:
                "Structured and responsive footers for navigation, links, and essential information.",
            icon: PanelBottom,
            hidden: false,
        },
        {
            name: "Pricing",
            slug: "pricing",
            description:
                "Clear pricing sections designed to showcase plans, features, and subscriptions.",
            icon: BadgeDollarSign,
            hidden: false,
        },
        {
            name: "FAQs",
            slug: "faqs",
            description:
                "Simple FAQ layouts to answer common questions and remove user friction.",
            icon: CircleHelp,
            hidden: false,
        },
        {
            name: "Call to Action",
            slug: "call-to-action",
            description:
                "High-impact call-to-action sections designed to drive meaningful conversions.",
            icon: Megaphone,
            hidden: false,
        },
        {
            name: "Features",
            slug: "features",
            description:
                "Flexible feature sections for presenting products, services, and key benefits.",
            icon: Sparkles,
            hidden: false,
        },
        {
            name: "Clients",
            slug: "clients",
            description:
                "Client and brand showcase sections to build trust and social proof.",
            icon: Users,
            hidden: false,
        },
        {
            name: "Testimonials",
            slug: "testimonials",
            description:
                "Beautiful testimonial layouts for highlighting customer experiences and feedback.",
            icon: Quote,
            hidden: false,
        },
        {
            name: "Dashboard",
            slug: "dashboard",
            description:
                "Modern dashboard layouts for analytics, metrics, data, and application interfaces.",
            icon: LayoutDashboard,
            hidden: false,
        },
        {
            name: "Gallery",
            slug: "gallery",
            description:
                "Flexible image and media galleries for showcasing visual content beautifully.",
            icon: Images,
            hidden: false,
        },
        {
            name: "Media",
            slug: "media",
            description:
                "Video and media-focused sections for engaging visual storytelling.",
            icon: Play,
            hidden: false,
        },
        {
            name: "Contact",
            slug: "contact",
            description:
                "Contact sections and layouts that make it easy for visitors to get in touch.",
            icon: Mail,
            hidden: false,
        },
        {
            name: "Location",
            slug: "location",
            description:
                "Location and map sections for businesses, offices, stores, and venues.",
            icon: MapPin,
            hidden: false,
        },
        {
            name: "Navigation",
            slug: "navigation",
            description:
                "Navigation patterns and menus for creating intuitive website experiences.",
            icon: Menu,
            hidden: false,
        },
        {
            name: "Authentication",
            slug: "authentication",
            description:
                "Login, signup, and authentication layouts for modern applications.",
            icon: LogIn,
            hidden: false,
        },
        {
            name: "Forms",
            slug: "forms",
            description:
                "Flexible form layouts for collecting user information, inquiries, and submissions.",
            icon: UserPlus,
            hidden: false,
        },
        {
            name: "Sections",
            slug: "sections",
            description:
                "General-purpose sections that can be combined to build complete pages.",
            icon: Layers,
            hidden: false,
        },
        {
            name: "Grid",
            slug: "grid",
            description:
                "Flexible grid-based layouts for organizing content, products, and visual elements.",
            icon: Grid2X2,
            hidden: false,
        },
        {
            name: "Lists",
            slug: "lists",
            description:
                "Clean list layouts for displaying structured content and collections.",
            icon: List,
            hidden: false,
        },
        {
            name: "Analytics",
            slug: "analytics",
            description:
                "Data visualization and analytics sections for presenting insights and metrics.",
            icon: BarChart3,
            hidden: false,
        },
        {
            name: "Blog",
            slug: "blog",
            description:
                "Editorial and blog layouts for articles, stories, and content-driven websites.",
            icon: Newspaper,
            hidden: false,
        },
        {
            name: "Portfolio",
            slug: "portfolio",
            description:
                "Portfolio layouts for showcasing creative work, projects, and case studies.",
            icon: Briefcase,
            hidden: false,
        },
        {
            name: "Ecommerce",
            slug: "ecommerce",
            description:
                "Commerce-focused sections for products, shopping experiences, and online stores.",
            icon: ShoppingBag,
            hidden: false,
        },
    ]


export const templateCategories: {
    name: string;
    slug: string;
    description: string;
    icon: LucideIcon;
    hidden: boolean;

    url: string; 

    tech: string[];
    pages: string[];
    features: string[];
    image?: string;
    video?: string;

    colors: string[];
    fonts: string[];
 
}[] = [
        {
            name: "SaaSly",
            slug: "saasly",
            description:
                "A modern SaaS landing page designed to help software products communicate their value and convert visitors into customers.",
            icon: PanelTop,
            hidden: false,

            url: "https://vercel.com/home", 

            tech: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
            ],

            pages: [
                "Home",
                "About",
                "Features",
                "Pricing",
                "Testimonials",
                "Contact",
            ],

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

            colors: [
                "#0A0A0A",
                "#FFFFFF",
                "#6366F1",
                "#F4F4F5",
            ],

            fonts: [
                "Inter",
                "Geist",
            ],

            image: "/og.jpg",
            video: "/templates/saasly.mp4",
 
        },

        {
            name: "Ali Imam",
            slug: "aliimam",
            description:
                "A clean and modern personal portfolio template for designers, developers, creatives, and digital professionals.",
            icon: PanelTop,
            hidden: false,

            url: "https://aliimam.in",  

            tech: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
            ],

            pages: [
                "Home",
                "About",
                "Work",
                "Projects",
                "Services",
                "Contact",
            ],

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

            colors: [
                "#0A0A0A",
                "#FFFFFF",
                "#6366F1",
                "#F4F4F5",
            ],

            fonts: [
                "Inter",
                "Geist",
            ],

            image: "/og.jpg",
            video: "/templates/saasly.mp4",
 
        },
    ];