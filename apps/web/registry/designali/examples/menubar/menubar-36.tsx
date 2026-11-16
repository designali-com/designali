import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const sizes = [
  { label: "Small", bar: "h-7", trigger: "text-[11px] px-1" },
  { label: "Default", bar: "", trigger: "" },
  { label: "Large", bar: "h-10 p-1.5", trigger: "text-sm px-2.5 py-1" },
]

export default function MenubarSizeScale() {
  return (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <div key={size.label} className="flex items-center gap-3">
          <span className="w-14 text-xs text-muted-foreground">
            {size.label}
          </span>
          <Menubar className={size.bar}>
            {["Templates", "Blocks", "Icons"].map((menu) => (
              <MenubarMenu key={menu}>
                <MenubarTrigger className={size.trigger}>{menu}</MenubarTrigger>
                <MenubarContent>
                  <MenubarGroup>
                    <MenubarItem>Browse Designali {menu}</MenubarItem>
                    <MenubarItem>New {menu}</MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>
      ))}
    </div>
  )
}
