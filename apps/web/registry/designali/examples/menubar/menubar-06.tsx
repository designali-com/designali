import {
  AppWindow as AppWindowIcon,
  Contrast as ContrastIcon,
  Crop as CropIcon,
  Droplet as DropletIcon,
  FlipHorizontal2 as FlipHorizontalIcon,
  Palette as PaletteIcon,
  RotateCw as RotateCwIcon,
  Scaling as ScalingIcon,
  Sun as SunIcon,
  WandSparkles as WandSparklesIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function PhotoEditorMenubar() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Image</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <CropIcon /> Crop <MenubarShortcut>C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <RotateCwIcon /> Rotate 90° clockwise
              </MenubarItem>
              <MenubarItem>
                <FlipHorizontalIcon /> Flip horizontal
              </MenubarItem>
              <MenubarItem>
                <ScalingIcon /> Resize canvas...
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Adjust</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <SunIcon /> Brightness
              </MenubarItem>
              <MenubarItem>
                <ContrastIcon /> Contrast
              </MenubarItem>
              <MenubarItem>
                <DropletIcon /> Saturation
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <WandSparklesIcon /> Auto enhance{" "}
                <MenubarShortcut>⇧⌘E</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Filter</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <AppWindowIcon /> Blur
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Gaussian blur</MenubarItem>
                    <MenubarItem>Motion blur</MenubarItem>
                    <MenubarItem>Lens blur</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <PaletteIcon /> Stylize
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Grain</MenubarItem>
                    <MenubarItem>Duotone</MenubarItem>
                    <MenubarItem>Vignette</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="aspect-video w-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500" />
    </div>
  )
}
