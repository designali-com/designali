'use client';

import * as React from 'react';

/* ============================================================================================
 * TYPES
 * ========================================================================================== */

export type vec4 = [number, number, number, number];

export interface ShaderMountUniforms {
  [key: string]: boolean | number | number[] | number[][] | HTMLImageElement | undefined;
}

export interface ShaderMotionParams {
  speed?: number;
  frame?: number;
}

export type ShaderFit = 'none' | 'contain' | 'cover';

export interface ShaderSizingParams {
  fit?: ShaderFit;
  scale?: number;
  rotation?: number;
  originX?: number;
  originY?: number;
  offsetX?: number;
  offsetY?: number;
  worldWidth?: number;
  worldHeight?: number;
}

export interface ShaderSizingUniforms {
  u_fit: (typeof ShaderFitOptions)[ShaderFit];
  u_scale: number;
  u_rotation: number;
  u_originX: number;
  u_originY: number;
  u_offsetX: number;
  u_offsetY: number;
  u_worldWidth: number;
  u_worldHeight: number;
}

export type ImageShaderPreset<T> = {
  name: string;
  /**
   * Params for the shader excluding the image.
   * Image is excluded because it isn't considered a preset — switching presets
   * shouldn't swap out the user's uploaded image.
   */
  params: Required<Omit<T, 'image'>>;
};

export interface ShaderComponentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  fragmentShader: string;
  uniforms: ShaderMountUniforms;
  speed?: number;
  frame?: number;
  mipmaps?: string[];
  webglContextAttributes?: WebGLContextAttributes;
  minPixelRatio?: number;
  maxPixelCount?: number;
}

/* ============================================================================================
 * SMALL UTILITIES (color props equality check, ref merging, transparent pixel placeholder)
 * ========================================================================================== */

interface PropsWithColors {
  colors?: string[];
  [key: string]: unknown;
}

/** Custom memo comparator: treats `colors` arrays with equal contents as equal (avoids re-renders from new array identities) */
export function colorPropsAreEqual(prevProps: PropsWithColors, nextProps: PropsWithColors): boolean {
  if (Object.keys(prevProps).length !== Object.keys(nextProps).length) {
    return false;
  }
  for (const key in prevProps) {
    if (key === 'colors') {
      const prevIsArray = Array.isArray(prevProps.colors);
      const nextIsArray = Array.isArray(nextProps.colors);
      if (!prevIsArray || !nextIsArray) {
        if (Object.is(prevProps.colors, nextProps.colors) === false) {
          return false;
        }
        continue;
      }
      if (prevProps.colors?.length !== nextProps.colors?.length) {
        return false;
      }
      if (!prevProps.colors?.every((color, index) => color === nextProps.colors?.[index])) {
        return false;
      }
      continue;
    }
    if (Object.is(prevProps[key], nextProps[key]) === false) {
      return false;
    }
  }
  return true;
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */
function useMergeRefs<Instance>(refs: Array<React.Ref<Instance> | undefined>): null | React.Ref<Instance> {
  const cleanupRef = React.useRef<void | (() => void)>(undefined);

  const refEffect = React.useCallback((instance: Instance | null) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) return;
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup: void | (() => void) = refCallback(instance);
        return typeof refCleanup === 'function'
          ? refCleanup
          : () => {
              refCallback(null);
            };
      }
      (ref as React.RefObject<Instance | null>).current = instance;
      return () => {
        (ref as React.RefObject<Instance | null>).current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);

  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value: Instance | null) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        (cleanupRef as React.RefObject<void | (() => void)>).current = undefined;
      }
      if (value != null) {
        (cleanupRef as React.RefObject<void | (() => void)>).current = refEffect(value);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/** 1x1 fully transparent pixel, used as a placeholder image texture while the real one is processing */
export const transparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

/** Parses '#rgb' | '#rrggbb' | '#rrggbbaa' | 'rgba(...)' into a normalized [r,g,b,a] tuple (0..1) */
export function getShaderColorFromString(color: string): vec4 {
  const c = color.trim();

  if (c.startsWith('#')) {
    let hex = c.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split('')
        .map((ch) => ch + ch)
        .join('');
    }
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    const a = hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return [r, g, b, a];
  }

  const match = c.match(/rgba?\(([^)]+)\)/i);
  if (match) {
    const parts = match[1]!.split(',').map((p) => parseFloat(p.trim()));
    const [r = 0, g = 0, b = 0, a = 1] = parts;
    return [r / 255, g / 255, b / 255, a];
  }

  // Fallback: unknown format, return transparent black
  return [0, 0, 0, 0];
}

export const ShaderFitOptions = {
  none: 0,
  contain: 1,
  cover: 2,
} as const;

export const defaultObjectSizing: Required<ShaderSizingParams> = {
  fit: 'contain',
  scale: 1,
  rotation: 0,
  originX: 0.5,
  originY: 0.5,
  offsetX: 0,
  offsetY: 0,
  worldWidth: 0,
  worldHeight: 0,
};

/* ============================================================================================
 * GLSL SHARED SNIPPETS
 * ========================================================================================== */

const declarePI = `const float PI = 3.14159265358979323846;`;

const rotation2 = `
vec2 rotate(vec2 v, float angleInRadians) {
  float s = sin(angleInRadians);
  float c = cos(angleInRadians);
  return mat2(c, -s, s, c) * v;
}
`;

/* ============================================================================================
 * VERTEX SHADER
 * ========================================================================================== */

const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`;

/* ============================================================================================
 * GEM SMOKE FRAGMENT SHADER
 * ========================================================================================== */

export const gemSmokeMeta = {
  maxColorCount: 6,
} as const;

// language=GLSL
export const gemSmokeFragmentShader: string = `#version 300 es
precision mediump float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
in mediump vec2 v_responsiveUV;
in mediump vec2 v_responsiveBoxGivenSize;

out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_shape;
uniform bool u_isImage;

uniform float u_time;
uniform vec4 u_colors[${gemSmokeMeta.maxColorCount}];
uniform float u_colorsCount;
uniform vec4 u_colorBack;
uniform vec4 u_colorInner;
uniform float u_innerDistortion;
uniform float u_outerDistortion;
uniform float u_outerGlow;
uniform float u_innerGlow;
uniform float u_offset;
uniform float u_angle;
uniform float u_size;

${declarePI}
${rotation2}

// 9x9 Gaussian blur on R and G channels
vec2 gaussBlur9x9RG(sampler2D tex, vec2 uv, float radius) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = max(radius, 0.0) * texel;
  // Pascal's row 8: sum = 256, 2D norm = 65536
  const float k[9] = float[9](1.0, 8.0, 28.0, 56.0, 70.0, 56.0, 28.0, 8.0, 1.0);
  vec2 sum = vec2(0.0);

  for (int j = -4; j <= 4; ++j) {
    float wy = k[j + 4];
    for (int i = -4; i <= 4; ++i) {
      float w = k[i + 4] * wy;
      vec2 off = vec2(float(i) * r.x, float(j) * r.y);
      sum += w * texture(tex, uv + off).rg;
    }
  }

  return sum / 65536.0;
}

float sst(float a, float b, float x) {
  return smoothstep(a, b, x);
}

void main() {
  float time = u_time;

  float roundness = 0.;
  float imgAlpha = 0.;

  if (u_isImage == true) {
    // Image sampling (UV scaled inward to account for padding)
    vec2 imageUV = v_imageUV;
    imageUV -= .5;
    imageUV *= .95;
    imageUV += .5;

    // Blurred image: x = roundness, y = alpha
    vec2 blurred = gaussBlur9x9RG(u_image, imageUV, 10.);
    roundness = 1. - blurred.x;
    vec2 texelA = 1.0 / vec2(textureSize(u_image, 0));
    const float k3[3] = float[3](1.0, 2.0, 1.0);
    for (int j = -1; j <= 1; ++j) {
      for (int i = -1; i <= 1; ++i) {
        imgAlpha += k3[i + 1] * k3[j + 1] * texture(u_image, imageUV + vec2(float(i) * texelA.x, float(j) * texelA.y)).g;
      }
    }
    imgAlpha /= 16.0;
  } else {
    vec2 uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
    float edge = 0.;

    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * time));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;
    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(time * speed + fi * 1.23) + dir2 * cos(time * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    imgAlpha = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    roundness = 1. - edge;
  }

  // Smoke UV setup
  vec2 smokeUV = v_objectUV;
  smokeUV = rotate(smokeUV, u_angle * PI / 180.);
  smokeUV *= mix(4., 1., u_size);

  // Two swirl paths: inner (shape-masked) and outer (free), each with independent distortion
  vec2 innerUV = smokeUV;
  vec2 outerUV = smokeUV;

  // Vertical displacement — applied independently to inner and outer
  innerUV.y += u_innerDistortion * (1. - sst(0., 1., length(.4 * innerUV)));
  innerUV.y -= .4 * u_innerDistortion;
  innerUV.y += .7 * u_offset * roundness;

  outerUV.y += u_outerDistortion * (1. - sst(0., 1., length(.4 * outerUV)));
  outerUV.y -= .4 * u_outerDistortion;

  float innerSwirl = u_innerDistortion * roundness;
  float outerSwirl = u_outerDistortion;

  for (int i = 1; i < 5; i++) {
    float fi = float(i);

    float stretchIn = max(length(dFdx(innerUV)), length(dFdy(innerUV)));
    float dampenIn = 1. / (1. + stretchIn * 8.);
    float sIn = innerSwirl * dampenIn;
    innerUV.x += sIn / fi * cos(time + fi * 2.9 * innerUV.y);
    innerUV.y += sIn / fi * cos(time + fi * 1.5 * innerUV.x);

    float stretchOut = max(length(dFdx(outerUV)), length(dFdy(outerUV)));
    float dampenOut = 1. / (1. + stretchOut * 8.);
    float sOut = outerSwirl * dampenOut;
    outerUV.x += sOut / fi * cos(time + fi * 2.9 * outerUV.y);
    outerUV.y += sOut / fi * cos(time + fi * 1.5 * outerUV.x);
  }

  // Smoke shapes from swirl fields
  float innerShape = exp(-1.5 * dot(innerUV, innerUV));
  float outerShape = exp(-1.5 * dot(outerUV, outerUV));

  // Visibility masks
  float outerMask = pow(u_outerGlow, 2.) * (1. - imgAlpha);
  float innerMask = (.01 + .99 * u_innerGlow) * imgAlpha;

  innerShape *= innerMask;
  outerShape *= outerMask;

  // Color gradient
  float mixer = (innerShape + outerShape) * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float smokeMask = 0.;
  for (int i = 1; i < ${gemSmokeMeta.maxColorCount + 1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = sst(0., 1., clamp(mixer - float(i - 1), 0., 1.));
    if (i == 1) smokeMask = m;

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  // Compositing (premultiplied alpha, front-to-back)
  vec3 color = gradient.rgb * smokeMask;
  float opacity = gradient.a * smokeMask;

  float innerOpacity = u_colorInner.a * imgAlpha;
  vec3 innerColor = u_colorInner.rgb * innerOpacity;
  color += innerColor * (1.0 - opacity);
  opacity += innerOpacity * (1.0 - opacity);

  vec3 backColor = u_colorBack.rgb * u_colorBack.a;
  color += backColor * (1.0 - opacity);
  opacity += u_colorBack.a * (1.0 - opacity);

  fragColor = vec4(color, opacity);
}
`;

/* ============================================================================================
 * SHADER MOUNT — vanilla WebGL2 engine that owns the <canvas> and the render loop.
 * ========================================================================================== */

const DEFAULT_MAX_PIXEL_COUNT: number = 1920 * 1080 * 4;

function isSafariUA() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android');
}

// Zoom level is estimated by comparing the browser's outerWidth and the viewport width.
// It's imperfect (sidebars, dev tools, etc. can throw it off) but accurate in the vast
// majority of real-world cases, and is only used on Safari to correct for its DPR quirk.
function bestGuessBrowserZoom(doc: Document) {
  const viewportScale = window.visualViewport?.scale ?? 1;
  const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
  const scrollbarWidth = window.innerWidth - doc.documentElement.clientWidth;
  const innerWidth = viewportScale * viewportWidth + scrollbarWidth;

  const ratio = window.outerWidth / innerWidth;
  const zoomPercentageRounded = Math.round(100 * ratio);

  if (zoomPercentageRounded % 5 === 0) return zoomPercentageRounded / 100;
  if (zoomPercentageRounded === 33) return 1 / 3;
  if (zoomPercentageRounded === 67) return 2 / 3;
  if (zoomPercentageRounded === 133) return 4 / 3;

  return ratio;
}

function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('GemSmoke: shader compile error: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(
  gl: WebGL2RenderingContext,
  vertexSource: string,
  fragmentSource: string
): WebGLProgram | null {
  const format = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT);
  const precision = format ? format.precision : null;
  // MEDIUM_FLOAT precision can be 10, 16 or 23 bits depending on device;
  // shaders can fail on low precision devices, so we force highp when precision is low.
  if (precision && precision < 23) {
    vertexSource = vertexSource.replace(/precision\s+(lowp|mediump)\s+float;/g, 'precision highp float;');
    fragmentSource = fragmentSource
      .replace(/precision\s+(lowp|mediump)\s+float/g, 'precision highp float')
      .replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g, '$1 highp $3');
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('GemSmoke: program link error: ' + gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }

  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return program;
}

/** Vanilla WebGL2 engine: mounts a canvas into a parent element and drives the render loop. */
class GemSmokeShaderMount {
  public parentElement: HTMLElement;
  public canvasElement: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private uniformLocations: Record<string, WebGLUniformLocation | null> = {};
  private fragmentShader: string;
  private rafId: number | null = null;
  private lastRenderTime = 0;
  private currentFrame = 0;
  private speed = 0;
  private currentSpeed = 0;
  private providedUniforms: ShaderMountUniforms;
  private mipmaps: string[] = [];
  private hasBeenDisposed = false;
  private resolutionChanged = true;
  private textures: Map<string, WebGLTexture> = new Map();
  private minPixelRatio;
  private maxPixelCount;
  private isSafari = isSafariUA();
  private uniformCache: Record<string, unknown> = {};
  private textureUnitMap: Map<string, number> = new Map();
  private ownerDocument: Document;

  private renderScale = 1;
  private parentWidth = 0;
  private parentHeight = 0;
  private parentDevicePixelWidth = 0;
  private parentDevicePixelHeight = 0;
  private devicePixelsSupported = false;
  private intersectionObserver: IntersectionObserver | null = null;
  private isInViewport = true;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    parentElement: HTMLElement,
    fragmentShader: string,
    uniforms: ShaderMountUniforms,
    webGlContextAttributes?: WebGLContextAttributes,
    speed = 0,
    frame = 0,
    minPixelRatio = 2,
    maxPixelCount: number = DEFAULT_MAX_PIXEL_COUNT,
    mipmaps: string[] = []
  ) {
    if (!(parentElement && parentElement.nodeType === 1)) {
      throw new Error('GemSmoke: parent element must be an HTMLElement');
    }
    this.parentElement = parentElement;
    this.ownerDocument = parentElement.ownerDocument;

    const canvasElement = this.ownerDocument.createElement('canvas');
    canvasElement.style.position = 'absolute';
    canvasElement.style.inset = '0';
    canvasElement.style.width = '100%';
    canvasElement.style.height = '100%';
    canvasElement.style.display = 'block';
    this.canvasElement = canvasElement;
    this.parentElement.prepend(canvasElement);

    this.fragmentShader = fragmentShader;
    this.providedUniforms = uniforms;
    this.mipmaps = mipmaps;
    this.currentFrame = frame;
    this.minPixelRatio = minPixelRatio;
    this.maxPixelCount = maxPixelCount;

    const gl = canvasElement.getContext('webgl2', webGlContextAttributes);
    if (!gl) throw new Error('GemSmoke: WebGL2 is not supported in this browser');
    this.gl = gl;

    this.initProgram();
    this.setupPositionAttribute();
    this.setupUniforms();
    this.setUniformValues(this.providedUniforms);
    this.setupResizeObserver();
    window.visualViewport?.addEventListener('resize', this.handleVisualViewportChange);
    this.setupIntersectionObserver();
    this.setSpeed(speed);
    this.ownerDocument.addEventListener('visibilitychange', this.handleDocumentVisibilityChange);
  }

  private initProgram = () => {
    const program = createProgram(this.gl, vertexShaderSource, this.fragmentShader);
    if (!program) return;
    this.program = program;
  };

  private setupPositionAttribute = () => {
    const positionAttributeLocation = this.gl.getAttribLocation(this.program!, 'a_position');
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
    this.gl.enableVertexAttribArray(positionAttributeLocation);
    this.gl.vertexAttribPointer(positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);
  };

  private setupUniforms = () => {
    const uniformLocations: Record<string, WebGLUniformLocation | null> = {
      u_time: this.gl.getUniformLocation(this.program!, 'u_time'),
      u_pixelRatio: this.gl.getUniformLocation(this.program!, 'u_pixelRatio'),
      u_resolution: this.gl.getUniformLocation(this.program!, 'u_resolution'),
    };

    Object.entries(this.providedUniforms).forEach(([key, value]) => {
      uniformLocations[key] = this.gl.getUniformLocation(this.program!, key);
      if (value instanceof HTMLImageElement) {
        const aspectRatioUniformName = `${key}AspectRatio`;
        uniformLocations[aspectRatioUniformName] = this.gl.getUniformLocation(this.program!, aspectRatioUniformName);
      }
    });

    this.uniformLocations = uniformLocations;
  };

  private setupResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(([entry]) => {
      if (entry?.borderBoxSize[0]) {
        const physicalPixelSize = entry.devicePixelContentBoxSize?.[0];
        if (physicalPixelSize !== undefined) {
          this.devicePixelsSupported = true;
          this.parentDevicePixelWidth = physicalPixelSize.inlineSize;
          this.parentDevicePixelHeight = physicalPixelSize.blockSize;
        }
        this.parentWidth = entry.borderBoxSize[0].inlineSize;
        this.parentHeight = entry.borderBoxSize[0].blockSize;
      }
      this.handleResize();
    });
    this.resizeObserver.observe(this.parentElement);
  };

  private setupIntersectionObserver = () => {
    const view = this.ownerDocument.defaultView;
    if (!view?.IntersectionObserver) return;
    this.intersectionObserver = new view.IntersectionObserver(([entry]) => {
      this.isInViewport = entry?.isIntersecting ?? true;
      this.updateCurrentSpeed();
    });
    this.intersectionObserver.observe(this.parentElement);
  };

  private handleVisualViewportChange = () => {
    this.resizeObserver?.disconnect();
    this.setupResizeObserver();
  };

  private handleResize = () => {
    let targetPixelWidth = 0;
    let targetPixelHeight = 0;

    const dpr = Math.max(1, window.devicePixelRatio);
    const pinchZoom = window.visualViewport?.scale ?? 1;

    if (this.devicePixelsSupported) {
      const scaleToMeetMinPixelRatio = Math.max(1, this.minPixelRatio / dpr);
      targetPixelWidth = this.parentDevicePixelWidth * scaleToMeetMinPixelRatio * pinchZoom;
      targetPixelHeight = this.parentDevicePixelHeight * scaleToMeetMinPixelRatio * pinchZoom;
    } else {
      let targetRenderScale = Math.max(dpr, this.minPixelRatio) * pinchZoom;
      if (this.isSafari) {
        const zoomLevel = bestGuessBrowserZoom(this.ownerDocument);
        targetRenderScale *= Math.max(1, zoomLevel);
      }
      targetPixelWidth = Math.round(this.parentWidth) * targetRenderScale;
      targetPixelHeight = Math.round(this.parentHeight) * targetRenderScale;
    }

    const maxPixelCountHeadroom = Math.sqrt(this.maxPixelCount) / Math.sqrt(targetPixelWidth * targetPixelHeight);
    const scaleToMeetMaxPixelCount = Math.min(1, maxPixelCountHeadroom);
    const newWidth = Math.round(targetPixelWidth * scaleToMeetMaxPixelCount);
    const newHeight = Math.round(targetPixelHeight * scaleToMeetMaxPixelCount);
    const newRenderScale = newWidth / Math.round(this.parentWidth);

    if (
      this.canvasElement.width !== newWidth ||
      this.canvasElement.height !== newHeight ||
      this.renderScale !== newRenderScale
    ) {
      this.renderScale = newRenderScale;
      this.canvasElement.width = newWidth || 1;
      this.canvasElement.height = newHeight || 1;
      this.resolutionChanged = true;
      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      this.render(performance.now());
    }
  };

  private render = (currentTime: number) => {
    if (this.hasBeenDisposed) return;
    if (this.program === null) return;

    const dt = currentTime - this.lastRenderTime;
    this.lastRenderTime = currentTime;
    if (this.currentSpeed !== 0) {
      this.currentFrame += dt * this.currentSpeed;
    }

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.program);
    this.gl.uniform1f(this.uniformLocations.u_time!, this.currentFrame * 0.001);

    if (this.resolutionChanged) {
      this.gl.uniform2f(this.uniformLocations.u_resolution!, this.gl.canvas.width, this.gl.canvas.height);
      this.gl.uniform1f(this.uniformLocations.u_pixelRatio!, this.renderScale);
      this.resolutionChanged = false;
    }

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    if (this.currentSpeed !== 0) {
      this.requestRender();
    } else {
      this.rafId = null;
    }
  };

  private requestRender = () => {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(this.render);
  };

  private setTextureUniform = (uniformName: string, image: HTMLImageElement): void => {
    if (!image.complete || image.naturalWidth === 0) return;

    const existingTexture = this.textures.get(uniformName);
    if (existingTexture) this.gl.deleteTexture(existingTexture);

    if (!this.textureUnitMap.has(uniformName)) {
      this.textureUnitMap.set(uniformName, this.textureUnitMap.size);
    }
    const textureUnit = this.textureUnitMap.get(uniformName)!;
    this.gl.activeTexture(this.gl.TEXTURE0 + textureUnit);

    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);

    if (this.mipmaps.includes(uniformName)) {
      this.gl.generateMipmap(this.gl.TEXTURE_2D);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
    }

    const error = this.gl.getError();
    if (error !== this.gl.NO_ERROR || texture === null) {
      console.error('GemSmoke: WebGL error when uploading texture:', error);
      return;
    }

    this.textures.set(uniformName, texture);

    const location = this.uniformLocations[uniformName];
    if (location) {
      this.gl.uniform1i(location, textureUnit);
      const aspectRatioUniformName = `${uniformName}AspectRatio`;
      const aspectRatioLocation = this.uniformLocations[aspectRatioUniformName];
      if (aspectRatioLocation) {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        this.gl.uniform1f(aspectRatioLocation, aspectRatio);
      }
    }
  };

  private areUniformValuesEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
      return a.every((val, i) => this.areUniformValuesEqual(val, (b as any)[i]));
    }
    return false;
  };

  private setUniformValues = (updatedUniforms: ShaderMountUniforms) => {
    this.gl.useProgram(this.program);
    Object.entries(updatedUniforms).forEach(([key, value]) => {
      let cacheValue: ShaderMountUniforms[keyof ShaderMountUniforms] | string = value;
      if (value instanceof HTMLImageElement) {
        cacheValue = `${value.src.slice(0, 200)}|${value.naturalWidth}x${value.naturalHeight}`;
      }

      if (this.areUniformValuesEqual(this.uniformCache[key], cacheValue)) return;
      this.uniformCache[key] = cacheValue;

      const location = this.uniformLocations[key];
      if (!location) return;

      if (value instanceof HTMLImageElement) {
        this.setTextureUniform(key, value);
      } else if (Array.isArray(value)) {
        let flatArray: number[] | null = null;
        let valueLength: number | null = null;

        if (value[0] !== undefined && Array.isArray(value[0])) {
          const firstChildLength = (value[0] as number[]).length;
          if ((value as number[][]).every((arr) => arr.length === firstChildLength)) {
            flatArray = (value as number[][]).flat();
            valueLength = firstChildLength;
          } else {
            console.warn(`GemSmoke: all child arrays must be the same length for ${key}`);
            return;
          }
        } else {
          flatArray = value as number[];
          valueLength = flatArray.length;
        }

        switch (valueLength) {
          case 2:
            this.gl.uniform2fv(location, flatArray);
            break;
          case 3:
            this.gl.uniform3fv(location, flatArray);
            break;
          case 4:
            this.gl.uniform4fv(location, flatArray);
            break;
          case 9:
            this.gl.uniformMatrix3fv(location, false, flatArray);
            break;
          case 16:
            this.gl.uniformMatrix4fv(location, false, flatArray);
            break;
          default:
            console.warn(`GemSmoke: unsupported uniform array length: ${valueLength}`);
        }
      } else if (typeof value === 'number') {
        this.gl.uniform1f(location, value);
      } else if (typeof value === 'boolean') {
        this.gl.uniform1i(location, value ? 1 : 0);
      }
    });
  };

  public getCurrentFrame = (): number => this.currentFrame;

  public setFrame = (newFrame: number): void => {
    this.currentFrame = newFrame;
    this.lastRenderTime = performance.now();
    this.render(performance.now());
  };

  public setSpeed = (newSpeed = 1): void => {
    this.speed = newSpeed;
    this.updateCurrentSpeed();
  };

  private updateCurrentSpeed = (): void => {
    this.setCurrentSpeed(this.ownerDocument.hidden || !this.isInViewport ? 0 : this.speed);
  };

  private setCurrentSpeed = (newSpeed: number): void => {
    this.currentSpeed = newSpeed;
    if (this.rafId === null && newSpeed !== 0) {
      this.lastRenderTime = performance.now();
      this.rafId = requestAnimationFrame(this.render);
    }
    if (this.rafId !== null && newSpeed === 0) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  };

  public setMaxPixelCount = (newMaxPixelCount: number = DEFAULT_MAX_PIXEL_COUNT): void => {
    this.maxPixelCount = newMaxPixelCount;
    this.handleResize();
  };

  public setMinPixelRatio = (newMinPixelRatio: number = 2): void => {
    this.minPixelRatio = newMinPixelRatio;
    this.handleResize();
  };

  public setUniforms = (newUniforms: ShaderMountUniforms): void => {
    this.setUniformValues(newUniforms);
    this.providedUniforms = { ...this.providedUniforms, ...newUniforms };
    this.render(performance.now());
  };

  private handleDocumentVisibilityChange = () => {
    this.updateCurrentSpeed();
  };

  public dispose = (): void => {
    this.hasBeenDisposed = true;

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    if (this.gl && this.program) {
      this.textures.forEach((texture) => this.gl.deleteTexture(texture));
      this.textures.clear();
      this.gl.deleteProgram(this.program);
      this.program = null;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      this.gl.getError();
    }

    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;

    window.visualViewport?.removeEventListener('resize', this.handleVisualViewportChange);
    this.ownerDocument.removeEventListener('visibilitychange', this.handleDocumentVisibilityChange);

    this.uniformLocations = {};
    this.canvasElement.remove();
  };
}

/** React wrapper around the vanilla `GemSmokeShaderMount` WebGL engine. */
const ShaderMountView = React.forwardRef<HTMLDivElement, ShaderComponentProps>(function ShaderMountView(
  {
    fragmentShader,
    uniforms,
    speed = 0,
    frame = 0,
    mipmaps = [],
    webglContextAttributes,
    minPixelRatio,
    maxPixelCount,
    style,
    ...rest
  },
  forwardedRef
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<GemSmokeShaderMount | null>(null);
  const mergedRef = useMergeRefs([containerRef, forwardedRef]);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const mount = new GemSmokeShaderMount(
      containerRef.current,
      fragmentShader,
      uniforms,
      webglContextAttributes,
      speed,
      frame,
      minPixelRatio,
      maxPixelCount,
      mipmaps
    );
    mountRef.current = mount;

    return () => {
      mount.dispose();
      mountRef.current = null;
    };
    // Only re-mount the WebGL program when the shader source itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fragmentShader]);

  React.useEffect(() => {
    mountRef.current?.setUniforms(uniforms);
  }, [uniforms]);

  React.useEffect(() => {
    mountRef.current?.setSpeed(speed);
  }, [speed]);

  React.useEffect(() => {
    mountRef.current?.setFrame(frame);
  }, [frame]);

  return (
    <div
      ref={mergedRef}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}
      {...rest}
    />
  );
});

/* ============================================================================================
 * IMAGE PRE-PROCESSING — Poisson solver that turns an uploaded logo into an edge/alpha texture
 * ========================================================================================== */

const POISSON_CONFIG_OPTIMIZED = {
  measurePerformance: false,
  workingSize: 512,
  iterations: 32,
};

interface SparsePixelData {
  interiorPixels: Uint32Array;
  boundaryPixels: Uint32Array;
  pixelCount: number;
  neighborIndices: Int32Array;
}

function buildSparseData(
  shapeMask: Uint8Array,
  boundaryMask: Uint8Array,
  interiorPixels: Uint32Array,
  boundaryPixels: Uint32Array,
  width: number,
  height: number
): SparsePixelData {
  const pixelCount = interiorPixels.length;
  const neighborIndices = new Int32Array(pixelCount * 4);

  for (let i = 0; i < pixelCount; i++) {
    const idx = interiorPixels[i]!;
    const x = idx % width;
    const y = Math.floor(idx / width);

    neighborIndices[i * 4 + 0] = x < width - 1 && shapeMask[idx + 1] ? idx + 1 : -1;
    neighborIndices[i * 4 + 1] = x > 0 && shapeMask[idx - 1] ? idx - 1 : -1;
    neighborIndices[i * 4 + 2] = y > 0 && shapeMask[idx - width] ? idx - width : -1;
    neighborIndices[i * 4 + 3] = y < height - 1 && shapeMask[idx + width] ? idx + width : -1;
  }

  return { interiorPixels, boundaryPixels, pixelCount, neighborIndices };
}

function solvePoissonSparse(
  sparseData: SparsePixelData,
  _shapeMask: Uint8Array,
  _boundaryMask: Uint8Array,
  width: number,
  height: number
): Float32Array {
  const ITERATIONS = POISSON_CONFIG_OPTIMIZED.iterations;
  const C = 0.01;

  const u = new Float32Array(width * height);
  const { interiorPixels, neighborIndices, pixelCount } = sparseData;

  const omega = 1.9;

  const redPixels: number[] = [];
  const blackPixels: number[] = [];

  for (let i = 0; i < pixelCount; i++) {
    const idx = interiorPixels[i]!;
    const x = idx % width;
    const y = Math.floor(idx / width);
    if ((x + y) % 2 === 0) redPixels.push(i);
    else blackPixels.push(i);
  }

  const updatePass = (pixels: number[]) => {
    for (const i of pixels) {
      const idx = interiorPixels[i]!;
      const eastIdx = neighborIndices[i * 4 + 0]!;
      const westIdx = neighborIndices[i * 4 + 1]!;
      const northIdx = neighborIndices[i * 4 + 2]!;
      const southIdx = neighborIndices[i * 4 + 3]!;

      let sumN = 0;
      if (eastIdx >= 0) sumN += u[eastIdx]!;
      if (westIdx >= 0) sumN += u[westIdx]!;
      if (northIdx >= 0) sumN += u[northIdx]!;
      if (southIdx >= 0) sumN += u[southIdx]!;

      const newValue = (C + sumN) / 4;
      u[idx] = omega * newValue + (1 - omega) * u[idx]!;
    }
  };

  for (let iter = 0; iter < ITERATIONS; iter++) {
    updatePass(redPixels);
    updatePass(blackPixels);
  }

  // Jacobi smoothing passes to remove the Red-Black checkerboard artifact
  const tmp = new Float32Array(width * height);
  for (let smooth = 0; smooth < 3; smooth++) {
    tmp.set(u);
    for (let i = 0; i < pixelCount; i++) {
      const idx = interiorPixels[i]!;
      const eastIdx = neighborIndices[i * 4 + 0]!;
      const westIdx = neighborIndices[i * 4 + 1]!;
      const northIdx = neighborIndices[i * 4 + 2]!;
      const southIdx = neighborIndices[i * 4 + 3]!;

      let sum = 0;
      let count = 0;
      if (eastIdx >= 0) {
        sum += tmp[eastIdx]!;
        count++;
      }
      if (westIdx >= 0) {
        sum += tmp[westIdx]!;
        count++;
      }
      if (northIdx >= 0) {
        sum += tmp[northIdx]!;
        count++;
      }
      if (southIdx >= 0) {
        sum += tmp[southIdx]!;
        count++;
      }

      u[idx] = count > 0 ? (tmp[idx]! + sum / count) * 0.5 : tmp[idx]!;
    }
  }

  return u;
}

/** Converts an uploaded image into the edge/alpha texture the fragment shader expects (R = roundness, G = alpha). */
export function toProcessedGemSmoke(file: File | string): Promise<{ imageData: ImageData; pngBlob: Blob }> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const isBlob = typeof file === 'string' && file.startsWith('blob:');

  return new Promise((resolve, reject) => {
    if (!file || !ctx) {
      reject(new Error('GemSmoke: invalid file or canvas context'));
      return;
    }

    const blobContentTypePromise = isBlob && fetch(file).then((res) => res.headers.get('Content-Type'));
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = async () => {
      let isSVG: boolean;
      const blobContentType = await blobContentTypePromise;

      if (blobContentType) {
        isSVG = blobContentType === 'image/svg+xml';
      } else if (typeof file === 'string') {
        isSVG = file.endsWith('.svg') || file.startsWith('data:image/svg+xml');
      } else {
        isSVG = file.type === 'image/svg+xml';
      }

      let originalWidth = img.width || img.naturalWidth;
      let originalHeight = img.height || img.naturalHeight;

      if (isSVG) {
        const svgMaxSize = 4096;
        const aspectRatio = originalWidth / originalHeight;
        if (originalWidth > originalHeight) {
          originalWidth = svgMaxSize;
          originalHeight = svgMaxSize / aspectRatio;
        } else {
          originalHeight = svgMaxSize;
          originalWidth = svgMaxSize * aspectRatio;
        }
        img.width = originalWidth;
        img.height = originalHeight;
      }

      const minDimension = Math.min(originalWidth, originalHeight);
      const targetSize = POISSON_CONFIG_OPTIMIZED.workingSize;
      const scaleFactor = targetSize / minDimension;
      const width = Math.round(originalWidth * scaleFactor);
      const height = Math.round(originalHeight * scaleFactor);

      canvas.width = originalWidth;
      canvas.height = originalHeight;

      const paddingSize = 0.025;
      const padX = Math.ceil(width * paddingSize);
      const padY = Math.ceil(height * paddingSize);
      const imgW = width - 2 * padX;
      const imgH = height - 2 * padY;

      // 1. Shape canvas (working resolution): image centered with padding
      const shapeCanvas = document.createElement('canvas');
      shapeCanvas.width = width;
      shapeCanvas.height = height;
      const shapeCtx = shapeCanvas.getContext('2d')!;
      shapeCtx.drawImage(img, padX, padY, imgW, imgH);

      const shapeImageData = shapeCtx.getImageData(0, 0, width, height);
      const data = shapeImageData.data;

      const shapeMask = new Uint8Array(width * height);
      const boundaryMask = new Uint8Array(width * height);

      for (let i = 0, idx = 0; i < data.length; i += 4, idx++) {
        const a = data[i + 3]!;
        shapeMask[idx] = a === 0 ? 0 : 1;
      }

      const boundaryIndices: number[] = [];
      const interiorIndices: number[] = [];

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          if (!shapeMask[idx]) continue;

          let isBoundary = false;
          if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
            isBoundary = true;
          } else {
            isBoundary =
              !shapeMask[idx - 1] ||
              !shapeMask[idx + 1] ||
              !shapeMask[idx - width] ||
              !shapeMask[idx + width] ||
              !shapeMask[idx - width - 1] ||
              !shapeMask[idx - width + 1] ||
              !shapeMask[idx + width - 1] ||
              !shapeMask[idx + width + 1];
          }

          if (isBoundary) {
            boundaryMask[idx] = 1;
            boundaryIndices.push(idx);
          } else {
            interiorIndices.push(idx);
          }
        }
      }

      const sparseData = buildSparseData(
        shapeMask,
        boundaryMask,
        new Uint32Array(interiorIndices),
        new Uint32Array(boundaryIndices),
        width,
        height
      );

      const u = solvePoissonSparse(sparseData, shapeMask, boundaryMask, width, height);

      let maxVal = 0;
      for (let i = 0; i < interiorIndices.length; i++) {
        const idx = interiorIndices[i]!;
        if (u[idx]! > maxVal) maxVal = u[idx]!;
      }

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext('2d')!;
      const tempImg = tempCtx.createImageData(width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          const px = idx * 4;

          if (!shapeMask[idx]) {
            tempImg.data[px] = 255;
            tempImg.data[px + 1] = 255;
            tempImg.data[px + 2] = 255;
            tempImg.data[px + 3] = 0;
          } else {
            const poissonRatio = u[idx]! / maxVal;
            const gray = 255 * (1 - poissonRatio);
            tempImg.data[px] = gray;
            tempImg.data[px + 1] = gray;
            tempImg.data[px + 2] = gray;
            tempImg.data[px + 3] = 255;
          }
        }
      }
      tempCtx.putImageData(tempImg, 0, 0);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, originalWidth, originalHeight);

      const outImg = ctx.getImageData(0, 0, originalWidth, originalHeight);

      const origPadX = Math.ceil(originalWidth * paddingSize);
      const origPadY = Math.ceil(originalHeight * paddingSize);
      const originalCanvas = document.createElement('canvas');
      originalCanvas.width = originalWidth;
      originalCanvas.height = originalHeight;
      const originalCtx = originalCanvas.getContext('2d')!;
      originalCtx.drawImage(img, origPadX, origPadY, originalWidth - 2 * origPadX, originalHeight - 2 * origPadY);
      const originalData = originalCtx.getImageData(0, 0, originalWidth, originalHeight);

      for (let i = 0; i < outImg.data.length; i += 4) {
        const a = originalData.data[i + 3]!;
        const upscaledAlpha = outImg.data[i + 3]!;
        if (a === 0) {
          outImg.data[i] = 255;
          outImg.data[i + 1] = 0;
        } else {
          outImg.data[i] = upscaledAlpha === 0 ? 0 : outImg.data[i]!;
          outImg.data[i + 1] = a;
        }
        outImg.data[i + 2] = 255;
        outImg.data[i + 3] = 255;
      }

      ctx.putImageData(outImg, 0, 0);

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('GemSmoke: failed to create PNG blob'));
          return;
        }
        resolve({ imageData: outImg, pngBlob: blob });
      }, 'image/png');
    };

    img.onerror = () => reject(new Error('GemSmoke: failed to load image'));
    img.src = typeof file === 'string' ? file : URL.createObjectURL(file);
  });
}

/* ============================================================================================
 * PUBLIC GEM SMOKE COMPONENT
 * ========================================================================================== */

export const GemSmokeShapes = {
  none: 0,
  circle: 1,
  daisy: 2,
  diamond: 3,
  metaballs: 4,
} as const;

export type GemSmokeShape = keyof typeof GemSmokeShapes;

export interface GemSmokeUniforms extends ShaderSizingUniforms {
  u_colorBack: vec4;
  u_colors: vec4[];
  u_colorsCount: number;
  u_image: HTMLImageElement | string | undefined;
  u_innerDistortion: number;
  u_outerDistortion: number;
  u_outerGlow: number;
  u_innerGlow: number;
  u_colorInner: vec4;
  u_offset: number;
  u_angle: number;
  u_size: number;
  u_shape: (typeof GemSmokeShapes)[GemSmokeShape];
  u_isImage: boolean;
}

export interface GemSmokeParams extends ShaderSizingParams, ShaderMotionParams {
  colors?: string[];
  colorBack?: string;
  image?: HTMLImageElement | string | undefined;
  innerDistortion?: number;
  outerDistortion?: number;
  outerGlow?: number;
  innerGlow?: number;
  colorInner?: string;
  offset?: number;
  angle?: number;
  size?: number;
  shape?: GemSmokeShape;
}

export interface GemSmokeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, GemSmokeParams {}

type GemSmokePreset = ImageShaderPreset<GemSmokeParams>;

export const defaultPreset: GemSmokePreset = {
  name: 'Default',
  params: {
    ...defaultObjectSizing,
    scale: 0.6,
    speed: 1,
    frame: 0,
    colorBack: '#f0efea',
    colorInner: '#fafaf5',
    colors: ['#333333', '#e7e6df'],
    outerGlow: 0.55,
    innerGlow: 1,
    innerDistortion: 0.8,
    outerDistortion: 0.6,
    offset: 0,
    angle: 0,
    size: 0.8,
    shape: 'diamond',
  },
};

export const fluorescentPreset: GemSmokePreset = {
  name: 'Fluorescent',
  params: {
    ...defaultObjectSizing,
    scale: 0.6,
    speed: 1,
    frame: 0,
    colorBack: '#000000',
    colorInner: '#000000',
    colors: ['#2fb64c', '#cdff61', '#ffffff'],
    outerGlow: 0,
    innerGlow: 1,
    innerDistortion: 1,
    outerDistortion: 0.8,
    offset: 0,
    angle: 0,
    size: 0.8,
    shape: 'diamond',
  },
};

export const firePreset: GemSmokePreset = {
  name: 'Fire',
  params: {
    ...defaultObjectSizing,
    scale: 0.6,
    speed: 1,
    frame: 0,
    colorBack: '#000000',
    colorInner: '#000000',
    colors: ['#fe5b16', '#f7ff61', '#ffffff'],
    outerGlow: 1,
    innerGlow: 0.65,
    innerDistortion: 0.6,
    outerDistortion: 0.8,
    offset: 0,
    angle: 0,
    size: 0.8,
    shape: 'diamond',
  },
};

export const infraredPreset: GemSmokePreset = {
  name: 'Infrared',
  params: {
    ...defaultObjectSizing,
    scale: 0.6,
    speed: 0.5,
    frame: 0,
    colorBack: '#cd28dc',
    colorInner: '#00000000',
    colors: ['#ff9900', '#fff67a', '#dcff52', '#00ffbb', '#0077ff'],
    outerGlow: 1,
    innerGlow: 1,
    innerDistortion: 1,
    outerDistortion: 1,
    offset: 0.2,
    angle: 0,
    size: 1,
    shape: 'diamond',
  },
};

export const gemSmokePresets: GemSmokePreset[] = [defaultPreset, firePreset, fluorescentPreset, infraredPreset];

/**
 * GemSmoke — animated smoky color fields rendered behind/around an optional uploaded logo shape,
 * giving the illusion of glassy smoke swirling around the image (or a predefined shape when no
 * image is provided).
 *
 * Everything (GLSL shaders, the WebGL mount engine, the Poisson-based image pre-processor, and
 * this React component) lives in this single file so it can be dropped into a project as-is.
 */
export const GemSmoke: React.FC<GemSmokeProps> = React.memo(function GemSmokeImpl({
  colorBack = defaultPreset.params.colorBack,
  colors = defaultPreset.params.colors,
  speed = defaultPreset.params.speed,
  frame = defaultPreset.params.frame,
  image = '',
  innerDistortion = defaultPreset.params.innerDistortion,
  outerDistortion = defaultPreset.params.outerDistortion,
  outerGlow = defaultPreset.params.outerGlow,
  innerGlow = defaultPreset.params.innerGlow,
  colorInner = defaultPreset.params.colorInner,
  offset = defaultPreset.params.offset,
  angle = defaultPreset.params.angle,
  size = defaultPreset.params.size,
  shape = defaultPreset.params.shape,

  fit = defaultPreset.params.fit,
  scale = defaultPreset.params.scale,
  rotation = defaultPreset.params.rotation,
  originX = defaultPreset.params.originX,
  originY = defaultPreset.params.originY,
  offsetX = defaultPreset.params.offsetX,
  offsetY = defaultPreset.params.offsetY,
  worldWidth = defaultPreset.params.worldWidth,
  worldHeight = defaultPreset.params.worldHeight,
  ...props
}: GemSmokeProps) {
  const imageUrl = typeof image === 'string' ? image : image?.src;
  const [processedImage, setProcessedImage] = React.useState<string>(transparentPixel);

  React.useLayoutEffect(() => {
    if (!imageUrl) {
      setProcessedImage(transparentPixel);
      return;
    }

    let current = true;
    let objectUrl: string | undefined;

    toProcessedGemSmoke(imageUrl).then((result) => {
      if (current) {
        objectUrl = URL.createObjectURL(result.pngBlob);
        setProcessedImage(objectUrl);
      }
    });

    return () => {
      current = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [imageUrl]);

  const uniforms: GemSmokeUniforms = {
    u_colors: colors.map(getShaderColorFromString),
    u_colorsCount: colors.length,
    u_colorBack: getShaderColorFromString(colorBack),
    u_image: processedImage,
    u_innerDistortion: innerDistortion,
    u_outerDistortion: outerDistortion,
    u_outerGlow: outerGlow,
    u_innerGlow: innerGlow,
    u_colorInner: getShaderColorFromString(colorInner),
    u_offset: offset,
    u_angle: angle,
    u_size: size,
    u_isImage: Boolean(image),
    u_shape: GemSmokeShapes[shape],

    u_fit: ShaderFitOptions[fit],
    u_scale: scale,
    u_rotation: rotation,
    u_offsetX: offsetX,
    u_offsetY: offsetY,
    u_originX: originX,
    u_originY: originY,
    u_worldWidth: worldWidth,
    u_worldHeight: worldHeight,
  };

  return (
    <ShaderMountView
      {...props}
      speed={speed}
      frame={frame}
      fragmentShader={gemSmokeFragmentShader}
      mipmaps={['u_image']}
      uniforms={uniforms as unknown as ShaderMountUniforms}
    />
  );
}, colorPropsAreEqual);

export default GemSmoke;