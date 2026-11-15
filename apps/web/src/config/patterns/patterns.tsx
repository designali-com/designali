import type { Pattern } from "@/src/types/pattern"

import { abstractPatterns } from "./abstract"
import { blueprintPatterns } from "./blueprint"
import { bricksPatterns } from "./bricks"
import { checkerboardPatterns } from "./checkerboard"
import { chevronPatterns } from "./chevron"
import { circlesPatterns } from "./circles"
import { concentricPatterns } from "./concentric"
import { crosshatchPatterns } from "./crosshatch"
import { diagonalPatterns } from "./diagonal"
import { diamondPatterns } from "./diamond"
import { dotsPatterns } from "./dots"
import { gradientPatterns } from "./gradients"
import { graphPaperPatterns } from "./graph-paper"
import { gridLinePatterns } from "./grid"
import { halftonePatterns } from "./halftone"
import { hexagonPatterns } from "./hexagon"
import { isometricPatterns } from "./isometric"
import { layeredPatterns } from "./layered"
import { linePatterns } from "./lines"
import { meshPatterns } from "./mesh"
import { noiseGrainPatterns } from "./noise-grain"
import { plusPatterns } from "./plus"
import { polkaPatterns } from "./polka"
import { radialBeamPatterns } from "./radial-beam"
import { scalesPatterns } from "./scales"
import { stripesPatterns } from "./stripes"
import { topographyPatterns } from "./topography"
import { trianglesPatterns } from "./triangles"
import { verticalBarPatterns } from "./vertical-bar"
import { wavesPatterns } from "./waves"
import { zigzagPatterns } from "./zigzag"

export const gridPatterns: Pattern[] = [
  ...gradientPatterns,
  ...linePatterns,
  ...dotsPatterns,
  ...abstractPatterns,
  ...meshPatterns,
  ...layeredPatterns,
  ...radialBeamPatterns,
  ...verticalBarPatterns,
  ...gridLinePatterns,
  ...graphPaperPatterns,
  ...blueprintPatterns,
  ...checkerboardPatterns,
  ...stripesPatterns,
  ...diagonalPatterns,
  ...crosshatchPatterns,
  ...wavesPatterns,
  ...zigzagPatterns,
  ...chevronPatterns,
  ...hexagonPatterns,
  ...trianglesPatterns,
  ...diamondPatterns,
  ...isometricPatterns,
  ...plusPatterns,
  ...circlesPatterns,
  ...concentricPatterns,
  ...polkaPatterns,
  ...halftonePatterns,
  ...bricksPatterns,
  ...scalesPatterns,
  ...noiseGrainPatterns,
  ...topographyPatterns,
]
