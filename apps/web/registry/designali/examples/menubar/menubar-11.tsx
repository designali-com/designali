import {
  CircleIcon,
  EllipsisIcon,
  PenToolIcon,
  PencilIcon,
  ShapesIcon,
  SquareIcon,
  StarIcon,
  TriangleIcon,
  TypeIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function IconOnlyMenubar() {
  return (
    <Menubar className="h-9 w-fit">
      <MenubarMenu>
        <MenubarTrigger aria-label="Shapes" className="px-2">
          <ShapesIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SquareIcon /> Rectangle <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <CircleIcon /> Ellipse <MenubarShortcut>O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <TriangleIcon /> Polygon
            </MenubarItem>
            <MenubarItem>
              <StarIcon /> Star
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Text" className="px-2">
          <TypeIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Heading</MenubarItem>
            <MenubarItem>Paragraph</MenubarItem>
            <MenubarItem>Text on path</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Pen tools" className="px-2">
          <PenToolIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <PenToolIcon /> Pen <MenubarShortcut>P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <PencilIcon /> Pencil <MenubarShortcut>⇧P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="More" className="px-2">
          <EllipsisIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Plugins</MenubarItem>
            <MenubarItem>Keyboard shortcuts</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
