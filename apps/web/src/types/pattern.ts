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
  badge?: "New" | "Popular" | string
  render?: () => React.ReactNode
}
