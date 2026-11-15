export interface Pattern {
  id: string
  name: string
  category:
    | "gradients"
    | "mesh"
    | "layered"
    | "lines"
    | "dots"
    | "textures"
    | "abstract"
    | "radial-beam"
    | "vertical-bar"
    | "grid"
    | "graph-paper"
    | "blueprint"
    | "checkerboard"
    | "stripes"
    | "diagonal"
    | "crosshatch"
    | "waves"
    | "zigzag"
    | "chevron"
    | "hexagon"
    | "triangles"
    | "diamond"
    | "isometric"
    | "plus"
    | "circles"
    | "concentric"
    | "polka"
    | "halftone"
    | "bricks"
    | "scales"
    | "noise-grain"
    | "topography"
  badge?: "New" | "Popular" | string
  render?: () => React.ReactNode
}
