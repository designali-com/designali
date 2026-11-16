import {
  ChartLine as ChartLineIcon,
  ChevronDown as ChevronDownIcon,
  Plug as PlugIcon,
  Workflow as WorkflowIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const products = [
  { label: "Templates", hint: "Production-ready Next.js sites", icon: ChartLineIcon },
  { label: "Blocks", hint: "460+ copy-paste sections", icon: WorkflowIcon },
  { label: "Icons", hint: "4000+ icons in @designali/icons", icon: PlugIcon },
]

export default function HoverOpenNavMenu() {
  return (
    <nav className="flex items-center gap-1 border px-2 py-1">
      <span className="me-2 text-xs font-semibold">designali</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          openOnHover
          delay={80}
          render={<Button variant="ghost" size="sm" />}
        >
          Product
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          {products.map((p) => (
            <DropdownMenuItem key={p.label} className="items-start">
              <p.icon className="mt-0.5" />
              <span className="grid">
                <span className="font-medium">{p.label}</span>
                <span className="text-muted-foreground">{p.hint}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          openOnHover
          delay={80}
          render={<Button variant="ghost" size="sm" />}
        >
          Resources
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>Changelog</DropdownMenuItem>
          <DropdownMenuItem>Community forum</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="sm">
        Pricing
      </Button>
    </nav>
  )
}
