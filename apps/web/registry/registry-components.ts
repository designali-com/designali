import type { Registry } from "shadcn/schema"

export const components: Registry["items"] = [
  {
    title: "Counter Number",
    name: "counter-number-default",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-default.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-currency",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-currency.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-custom",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-custom.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-decimal",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-decimal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-percentage",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-percentage.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-prefix",
    type: "registry:component",
    files: [
      {
        path: "components/counter-number/counter-number-prefix.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    title: "Counter Number",
    name: "counter-number-seperator",
    type: "registry:block",
    files: [
      {
        path: "components/counter-number/counter-number-seperator.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Dot Pattern",
    name: "dot-pattern-default",
    type: "registry:block",
    description: "block showing a simple dot pattern.",
    registryDependencies: ["dot-pattern"],
    files: [
      {
        path: "components/dot-pattern/dot-pattern-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Dot Pattern",
    name: "dot-pattern-custom",
    type: "registry:block",
    description: "block showing a simple dot pattern.",
    registryDependencies: ["dot-pattern"],
    files: [
      {
        path: "components/dot-pattern/dot-pattern-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Dot Pattern",
    name: "dot-pattern-01",
    type: "registry:block",
    description: "block showing a simple dot pattern.",
    registryDependencies: ["dot-pattern"],
    files: [
      {
        path: "components/dot-pattern/dot-pattern-01.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Dot Pattern",
    name: "dot-pattern-02",
    type: "registry:block",
    description: "block showing a simple dot pattern.",
    registryDependencies: ["dot-pattern"],
    files: [
      {
        path: "components/dot-pattern/dot-pattern-02.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Dot Pattern",
    name: "dot-pattern-03",
    type: "registry:block",
    description: "block showing a simple dot pattern.",
    registryDependencies: ["dot-pattern"],
    files: [
      {
        path: "components/dot-pattern/dot-pattern-03.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-basic",
    description: "Basic gauge demo",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-basic.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-custom-value",
    description: "Gauge with custom value text",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-custom-value.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-sizes",
    description: "Gauge size variations",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-sizes.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-thickness",
    description: "Gauge thickness variations",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-thickness.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-gap",
    description: "Gauge gap variations",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-gap.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-segments",
    description: "Gauge segment variations",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-segments.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-angles",
    description: "Gauge angle variations",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-angles.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-radius",
    description: "Gauge radius customization",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-radius.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-states",
    description: "Gauge loading and complete states",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-states.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-range",
    description: "Gauge with custom min and max ranges",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-range.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-label",
    description: "Gauge with label",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-label.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-custom-content",
    description: "Gauge with custom center content",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-custom-content.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-biomarker",
    description: "Biomarker gauge components",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-biomarker.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-multiple",
    description: "Multiple gauges displayed together",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-multiple.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "gauge-demo-combined",
    description: "Combined gauge composition demo",
    type: "registry:block",
    files: [
      {
        path: "components/gauge/gauge-demo-combined.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "bento-01",
    type: "registry:block",
    description: "block showing a simple bento.",
    files: [
      {
        path: "components/bento/bento-01.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "bento-02",
    type: "registry:block",
    description: "block showing a simple bento.",
    files: [
      {
        path: "components/bento/bento-02.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "bento-03",
    type: "registry:block",
    description: "block showing a simple bento.",
    files: [
      {
        path: "components/bento/bento-03.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "bento-04",
    type: "registry:block",
    description: "block showing a simple bento.",
    files: [
      {
        path: "components/bento/bento-04.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "bento-05",
    type: "registry:block",
    description: "block showing a simple bento.",
    files: [
      {
        path: "components/bento/bento-05.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Grid Pattern",
    name: "grid-pattern-default",
    type: "registry:block",
    description: "block showing a simple grid pattern.",
    registryDependencies: ["grid-pattern"],
    files: [
      {
        path: "components/grid-pattern/grid-pattern-default.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Grid Pattern",
    name: "grid-pattern-custom",
    type: "registry:block",
    description: "block showing a simple grid pattern.",
    registryDependencies: ["grid-pattern"],
    files: [
      {
        path: "components/grid-pattern/grid-pattern-custom.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Grid Pattern",
    name: "grid-pattern-large",
    type: "registry:block",
    description: "block showing a simple grid pattern.",
    registryDependencies: ["grid-pattern"],
    files: [
      {
        path: "components/grid-pattern/grid-pattern-large.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Grid Pattern",
    name: "grid-pattern-small",
    type: "registry:block",
    description: "block showing a simple grid pattern.",
    registryDependencies: ["grid-pattern"],
    files: [
      {
        path: "components/grid-pattern/grid-pattern-small.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Grid Pattern",
    name: "grid-pattern-01",
    type: "registry:block",
    description: "block showing a simple grid pattern.",
    registryDependencies: ["grid-pattern"],
    files: [
      {
        path: "components/grid-pattern/grid-pattern-01.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Marquee",
    name: "marquee-01",
    type: "registry:block",
    registryDependencies: ["marquee"],
    files: [
      {
        path: "components/marquee/marquee-01.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Marquee",
    name: "marquee-02",
    type: "registry:block",
    registryDependencies: ["marquee"],
    files: [
      {
        path: "components/marquee/marquee-02.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Marquee",
    name: "marquee-03",
    type: "registry:block",
    registryDependencies: ["marquee"],
    files: [
      {
        path: "components/marquee/marquee-03.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Marquee",
    name: "marquee-04",
    type: "registry:block",
    registryDependencies: ["marquee"],
    files: [
      {
        path: "components/marquee/marquee-04.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Marquee",
    name: "marquee-05",
    type: "registry:block",
    registryDependencies: ["marquee"],
    files: [
      {
        path: "components/marquee/marquee-05.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Typewriter",
    name: "typewriter-01",
    type: "registry:block",
    description: "block showing a simple typewriter.",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "components/typewriter/typewriter-01.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Typewriter",
    name: "typewriter-02",
    type: "registry:block",
    description: "block showing a simple typewriter.",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "components/typewriter/typewriter-02.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Typewriter",
    name: "typewriter-03",
    type: "registry:block",
    description: "block showing a simple typewriter.",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "components/typewriter/typewriter-03.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Typewriter",
    name: "typewriter-04",
    type: "registry:block",
    description: "block showing a simple typewriter.",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "components/typewriter/typewriter-04.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    title: "Typewriter",
    name: "typewriter-05",
    type: "registry:block",
    description: "block showing a simple typewriter.",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "components/typewriter/typewriter-05.tsx",
        type: "registry:block",
      },
    ],
  },
]
