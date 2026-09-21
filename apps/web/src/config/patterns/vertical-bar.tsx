import type { Pattern } from "@/src/types/pattern"

/**
 * Vertical bar / curtain patterns.
 *
 * Har column ek alag linear-gradient layer hai:
 *   - pehla stop (`transparent X%`) column ki height decide karta hai — chhota % = lambi bar
 *   - backgroundSize ki width = column ki motai
 *   - backgroundPosition = column kahan baithega
 *   - filter: blur() = edges kitne soft honge (10–20px sweet spot)
 *
 * Parent par `overflow-hidden` rakhein, warna blur kinaron par leak karega.
 */

const BAR_SIZE = `
  10% 100%, 9% 100%, 11% 100%, 8% 100%, 12% 100%,
  9% 100%, 10% 100%, 8% 100%, 11% 100%
`

const BAR_POS = `
  0% 0%, 12.5% 0%, 25% 0%, 37.5% 0%, 50% 0%,
  62.5% 0%, 75% 0%, 87.5% 0%, 100% 0%
`

export const verticalBarPatterns: Pattern[] = [
  // 1. Crimson Curtain
  {
    id: "bars-01",
    name: "Crimson Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 22%, #e21414 78%, #b40606 100%),
              linear-gradient(180deg, transparent 10%, #ff2323 60%, #cc0d0d 100%),
              linear-gradient(180deg, transparent 32%, #c90f0f 74%, #8f0303 100%),
              linear-gradient(180deg, transparent 4%,  #ff1a1a 54%, #d81010 100%),
              linear-gradient(180deg, transparent 16%, #e81818 66%, #a80505 100%),
              linear-gradient(180deg, transparent 2%,  #ff3030 50%, #e01414 100%),
              linear-gradient(180deg, transparent 20%, #d91212 68%, #9c0404 100%),
              linear-gradient(180deg, transparent 8%,  #ff2020 58%, #c80b0b 100%),
              linear-gradient(180deg, transparent 34%, #b80c0c 80%, #7a0202 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#0a0000",
              backgroundImage: `
              linear-gradient(180deg, transparent 22%, #c41010 78%, #6b0202 100%),
              linear-gradient(180deg, transparent 10%, #f01c1c 60%, #8a0606 100%),
              linear-gradient(180deg, transparent 32%, #a60b0b 74%, #520101 100%),
              linear-gradient(180deg, transparent 4%,  #ff2424 54%, #9c0808 100%),
              linear-gradient(180deg, transparent 16%, #d41414 66%, #700303 100%),
              linear-gradient(180deg, transparent 2%,  #ff3838 50%, #a80c0c 100%),
              linear-gradient(180deg, transparent 20%, #b81010 68%, #5e0202 100%),
              linear-gradient(180deg, transparent 8%,  #f01e1e 58%, #8f0606 100%),
              linear-gradient(180deg, transparent 34%, #960a0a 80%, #470101 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
        </>
      )
    },
  },

  // 2. Cobalt Curtain
  {
    id: "bars-02",
    name: "Cobalt Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 26%, #1e5fe0 78%, #0b3ba8 100%),
              linear-gradient(180deg, transparent 12%, #2f7bff 62%, #1450cc 100%),
              linear-gradient(180deg, transparent 36%, #1749c4 76%, #06308f 100%),
              linear-gradient(180deg, transparent 6%,  #3d88ff 55%, #1a5ad8 100%),
              linear-gradient(180deg, transparent 18%, #2468ea 66%, #0e3fa8 100%),
              linear-gradient(180deg, transparent 2%,  #4f95ff 50%, #2060e0 100%),
              linear-gradient(180deg, transparent 22%, #1d57d4 70%, #0a379c 100%),
              linear-gradient(180deg, transparent 9%,  #3580ff 58%, #1553c8 100%),
              linear-gradient(180deg, transparent 38%, #1443b0 82%, #04277a 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#00030f",
              backgroundImage: `
              linear-gradient(180deg, transparent 26%, #1a4fc0 78%, #041e5e 100%),
              linear-gradient(180deg, transparent 12%, #2f75f5 62%, #0a2f8a 100%),
              linear-gradient(180deg, transparent 36%, #123c9c 76%, #02154a 100%),
              linear-gradient(180deg, transparent 6%,  #4189ff 55%, #0f3ca0 100%),
              linear-gradient(180deg, transparent 18%, #1e58cc 66%, #062468 100%),
              linear-gradient(180deg, transparent 2%,  #5a9cff 50%, #164ab4 100%),
              linear-gradient(180deg, transparent 22%, #1749b4 70%, #041c56 100%),
              linear-gradient(180deg, transparent 9%,  #3a7ef0 58%, #0c3390 100%),
              linear-gradient(180deg, transparent 38%, #0f3488 82%, #010f3a 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
        </>
      )
    },
  },

  // 3. Violet Curtain
  {
    id: "bars-03",
    name: "Violet Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #7c3aed 78%, #4c1d95 100%),
              linear-gradient(180deg, transparent 11%, #9155f5 61%, #5b21b6 100%),
              linear-gradient(180deg, transparent 33%, #6d28d9 75%, #3b1180 100%),
              linear-gradient(180deg, transparent 5%,  #a06bff 54%, #6d28d9 100%),
              linear-gradient(180deg, transparent 17%, #8442ee 65%, #4c1d95 100%),
              linear-gradient(180deg, transparent 2%,  #b07cff 50%, #7c3aed 100%),
              linear-gradient(180deg, transparent 21%, #7331e0 69%, #431488 100%),
              linear-gradient(180deg, transparent 8%,  #9a5cfa 57%, #5f23bc 100%),
              linear-gradient(180deg, transparent 36%, #5f22c4 81%, #330c72 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#070214",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #7526e8 78%, #350d78 100%),
              linear-gradient(180deg, transparent 11%, #9445ff 61%, #46129c 100%),
              linear-gradient(180deg, transparent 33%, #5d18c0 75%, #250858 100%),
              linear-gradient(180deg, transparent 5%,  #ab6bff 54%, #5a1cc4 100%),
              linear-gradient(180deg, transparent 17%, #7c2ef0 65%, #340c80 100%),
              linear-gradient(180deg, transparent 2%,  #c188ff 50%, #6f22dc 100%),
              linear-gradient(180deg, transparent 21%, #6820d4 69%, #2a0966 100%),
              linear-gradient(180deg, transparent 8%,  #9c50ff 57%, #4a13a4 100%),
              linear-gradient(180deg, transparent 36%, #4e12a8 81%, #1c0550 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
        </>
      )
    },
  },

  // 4. Emerald Curtain
  {
    id: "bars-04",
    name: "Emerald Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 25%, #0f9d63 78%, #06603c 100%),
              linear-gradient(180deg, transparent 12%, #17b877 62%, #0a7a4c 100%),
              linear-gradient(180deg, transparent 34%, #0c8352 76%, #044e30 100%),
              linear-gradient(180deg, transparent 5%,  #22cc88 54%, #0f9460 100%),
              linear-gradient(180deg, transparent 18%, #12a86c 66%, #076b42 100%),
              linear-gradient(180deg, transparent 2%,  #34dd9a 50%, #14a86e 100%),
              linear-gradient(180deg, transparent 22%, #0d9159 70%, #055836 100%),
              linear-gradient(180deg, transparent 8%,  #1dc283 58%, #0b7f50 100%),
              linear-gradient(180deg, transparent 37%, #0a7448 81%, #034228 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#00120a",
              backgroundImage: `
              linear-gradient(180deg, transparent 25%, #0c8a56 78%, #023220 100%),
              linear-gradient(180deg, transparent 12%, #14ad6e 62%, #054630 100%),
              linear-gradient(180deg, transparent 34%, #086e44 76%, #012418 100%),
              linear-gradient(180deg, transparent 5%,  #26d992 54%, #086b46 100%),
              linear-gradient(180deg, transparent 18%, #0f9760 66%, #033a24 100%),
              linear-gradient(180deg, transparent 2%,  #3df0a6 50%, #0d8a5a 100%),
              linear-gradient(180deg, transparent 22%, #0a7c4e 70%, #022c1c 100%),
              linear-gradient(180deg, transparent 8%,  #1cc084 58%, #065840 100%),
              linear-gradient(180deg, transparent 37%, #065e3c 81%, #011a10 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
        </>
      )
    },
  },

  // 5. Amber Curtain
  {
    id: "bars-05",
    name: "Amber Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#fffdf7",
              backgroundImage: `
              linear-gradient(180deg, transparent 23%, #f59e0b 78%, #b45309 100%),
              linear-gradient(180deg, transparent 10%, #ffb224 61%, #d97706 100%),
              linear-gradient(180deg, transparent 32%, #e08a06 75%, #96420a 100%),
              linear-gradient(180deg, transparent 4%,  #ffc043 53%, #ea9007 100%),
              linear-gradient(180deg, transparent 16%, #f9a715 65%, #bf5c08 100%),
              linear-gradient(180deg, transparent 2%,  #ffd166 50%, #f5a30a 100%),
              linear-gradient(180deg, transparent 20%, #e89308 68%, #a14b09 100%),
              linear-gradient(180deg, transparent 8%,  #ffb833 57%, #d07406 100%),
              linear-gradient(180deg, transparent 35%, #c97a05 80%, #7d3708 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#0f0800",
              backgroundImage: `
              linear-gradient(180deg, transparent 23%, #d98806 78%, #6b2f02 100%),
              linear-gradient(180deg, transparent 10%, #f5a417 61%, #874002 100%),
              linear-gradient(180deg, transparent 32%, #b06c04 75%, #4a1f01 100%),
              linear-gradient(180deg, transparent 4%,  #ffc043 53%, #a35204 100%),
              linear-gradient(180deg, transparent 16%, #e09310 65%, #5e2a02 100%),
              linear-gradient(180deg, transparent 2%,  #ffd979 50%, #cf7c05 100%),
              linear-gradient(180deg, transparent 20%, #c47a06 68%, #4f2301 100%),
              linear-gradient(180deg, transparent 8%,  #f7ad2c 57%, #7d3a03 100%),
              linear-gradient(180deg, transparent 35%, #9c5d03 80%, #3a1701 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
        </>
      )
    },
  },

  // 6. Rose Curtain
  {
    id: "bars-06",
    name: "Rose Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#fffafc",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #e8438a 78%, #9d1050 100%),
              linear-gradient(180deg, transparent 11%, #ff5fa3 61%, #c01c68 100%),
              linear-gradient(180deg, transparent 33%, #cf2c74 75%, #820a42 100%),
              linear-gradient(180deg, transparent 5%,  #ff7ab5 54%, #d63380 100%),
              linear-gradient(180deg, transparent 17%, #f04a93 65%, #a8125a 100%),
              linear-gradient(180deg, transparent 2%,  #ff92c4 50%, #e8478f 100%),
              linear-gradient(180deg, transparent 21%, #dc3480 69%, #8e0e4a 100%),
              linear-gradient(180deg, transparent 8%,  #ff6bab 57%, #c42270 100%),
              linear-gradient(180deg, transparent 36%, #b62266 80%, #6e0838 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#0f0008",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #cf2a74 78%, #61042e 100%),
              linear-gradient(180deg, transparent 11%, #f0459a 61%, #7d0a40 100%),
              linear-gradient(180deg, transparent 33%, #a81659 75%, #40021e 100%),
              linear-gradient(180deg, transparent 5%,  #ff6fae 54%, #92104c 100%),
              linear-gradient(180deg, transparent 17%, #dc3382 65%, #560628 100%),
              linear-gradient(180deg, transparent 2%,  #ff8cc0 50%, #c02068 100%),
              linear-gradient(180deg, transparent 21%, #b81f66 69%, #470322 100%),
              linear-gradient(180deg, transparent 8%,  #f2549f 57%, #740a3a 100%),
              linear-gradient(180deg, transparent 36%, #8e1048 80%, #2e0114 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(14px)",
            }}
          />
        </>
      )
    },
  },

  // 7. Teal Curtain
  {
    id: "bars-07",
    name: "Teal Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#f7ffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 26%, #0e9aa7 78%, #05606b 100%),
              linear-gradient(180deg, transparent 12%, #14b4c4 62%, #087a86 100%),
              linear-gradient(180deg, transparent 35%, #0a8290 76%, #034c56 100%),
              linear-gradient(180deg, transparent 5%,  #22ccd9 54%, #0e939f 100%),
              linear-gradient(180deg, transparent 18%, #10a5b2 66%, #066a74 100%),
              linear-gradient(180deg, transparent 2%,  #3ce0ec 50%, #12a8b6 100%),
              linear-gradient(180deg, transparent 22%, #0c8f9c 70%, #04565f 100%),
              linear-gradient(180deg, transparent 8%,  #1cc2d0 58%, #0a7f8a 100%),
              linear-gradient(180deg, transparent 38%, #08737f 82%, #024048 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(16px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#00100f",
              backgroundImage: `
              linear-gradient(180deg, transparent 26%, #0b8692 78%, #02323a 100%),
              linear-gradient(180deg, transparent 12%, #12a8b8 62%, #044650 100%),
              linear-gradient(180deg, transparent 35%, #066c78 76%, #01222a 100%),
              linear-gradient(180deg, transparent 5%,  #28d6e4 54%, #076a76 100%),
              linear-gradient(180deg, transparent 18%, #0d94a2 66%, #023840 100%),
              linear-gradient(180deg, transparent 2%,  #4ceaf6 50%, #0c8e9c 100%),
              linear-gradient(180deg, transparent 22%, #097a86 70%, #012a32 100%),
              linear-gradient(180deg, transparent 8%,  #1ab8c8 58%, #055660 100%),
              linear-gradient(180deg, transparent 38%, #055c68 82%, #01181e 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(16px)",
            }}
          />
        </>
      )
    },
  },

  // 8. Sunset Curtain (red → orange shift across the width)
  {
    id: "bars-08",
    name: "Sunset Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#fffaf5",
              backgroundImage: `
              linear-gradient(180deg, transparent 28%, #c81d5a 78%, #7d0a34 100%),
              linear-gradient(180deg, transparent 14%, #e02a48 62%, #96102a 100%),
              linear-gradient(180deg, transparent 34%, #ef3c33 76%, #a41c12 100%),
              linear-gradient(180deg, transparent 6%,  #fb5524 54%, #c22e08 100%),
              linear-gradient(180deg, transparent 18%, #ff6f18 66%, #cc4406 100%),
              linear-gradient(180deg, transparent 2%,  #ff8a14 50%, #d65c04 100%),
              linear-gradient(180deg, transparent 20%, #ff9f1c 68%, #c96f05 100%),
              linear-gradient(180deg, transparent 9%,  #ffb42e 58%, #d4830a 100%),
              linear-gradient(180deg, transparent 36%, #f0c44a 80%, #b0820c 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#0d0204",
              backgroundImage: `
              linear-gradient(180deg, transparent 28%, #a81048 78%, #46021a 100%),
              linear-gradient(180deg, transparent 14%, #c81c38 62%, #5a0614 100%),
              linear-gradient(180deg, transparent 34%, #d82c22 76%, #620c06 100%),
              linear-gradient(180deg, transparent 6%,  #f84a18 54%, #7d1a02 100%),
              linear-gradient(180deg, transparent 18%, #f06410 66%, #762802 100%),
              linear-gradient(180deg, transparent 2%,  #ff8a14 50%, #8c3a02 100%),
              linear-gradient(180deg, transparent 20%, #e8900e 68%, #6e4002 100%),
              linear-gradient(180deg, transparent 9%,  #ffab22 58%, #7d5004 100%),
              linear-gradient(180deg, transparent 36%, #d0a42e 80%, #5c4406 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
        </>
      )
    },
  },

  // 9. Graphite Curtain (neutral, text ke peeche safe)
  {
    id: "bars-09",
    name: "Graphite Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #5b6270 78%, #2c313b 100%),
              linear-gradient(180deg, transparent 11%, #737b8a 61%, #3d434f 100%),
              linear-gradient(180deg, transparent 33%, #4a505c 75%, #1e222a 100%),
              linear-gradient(180deg, transparent 5%,  #878f9e 54%, #4c525f 100%),
              linear-gradient(180deg, transparent 17%, #646b79 65%, #31363f 100%),
              linear-gradient(180deg, transparent 2%,  #9aa2b0 50%, #5b626f 100%),
              linear-gradient(180deg, transparent 21%, #545a67 69%, #272b33 100%),
              linear-gradient(180deg, transparent 8%,  #7c8492 57%, #434955 100%),
              linear-gradient(180deg, transparent 36%, #3e434e 80%, #171a20 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(16px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#050607",
              backgroundImage: `
              linear-gradient(180deg, transparent 24%, #3c424e 78%, #14171c 100%),
              linear-gradient(180deg, transparent 11%, #545b68 61%, #1f232a 100%),
              linear-gradient(180deg, transparent 33%, #2c313a 75%, #0c0e12 100%),
              linear-gradient(180deg, transparent 5%,  #6b7382 54%, #2a2f38 100%),
              linear-gradient(180deg, transparent 17%, #444a56 65%, #171a20 100%),
              linear-gradient(180deg, transparent 2%,  #808896 50%, #383e48 100%),
              linear-gradient(180deg, transparent 21%, #353a44 69%, #101216 100%),
              linear-gradient(180deg, transparent 8%,  #5d6470 57%, #22262d 100%),
              linear-gradient(180deg, transparent 36%, #23272e 80%, #08090b 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(16px)",
            }}
          />
        </>
      )
    },
  },

  // 10. Aurora Curtain (multi-hue: teal → violet → pink)
  {
    id: "bars-10",
    name: "Aurora Curtain",
    category: "vertical-bar",
    render: function () {
      return (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundColor: "#fbfaff",
              backgroundImage: `
              linear-gradient(180deg, transparent 30%, #12b0a6 78%, #06665f 100%),
              linear-gradient(180deg, transparent 14%, #1a9ec0 62%, #085a76 100%),
              linear-gradient(180deg, transparent 36%, #2b7fd4 76%, #0f4488 100%),
              linear-gradient(180deg, transparent 6%,  #4a63e8 54%, #22309c 100%),
              linear-gradient(180deg, transparent 18%, #7048ef 66%, #3c17a4 100%),
              linear-gradient(180deg, transparent 2%,  #9440f2 50%, #5a14a8 100%),
              linear-gradient(180deg, transparent 20%, #b63ce0 68%, #70119c 100%),
              linear-gradient(180deg, transparent 9%,  #d6449f 58%, #8e0f5c 100%),
              linear-gradient(180deg, transparent 38%, #e85a86 80%, #9c1244 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(18px)",
            }}
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundColor: "#03040f",
              backgroundImage: `
              linear-gradient(180deg, transparent 30%, #0e9c94 78%, #02332f 100%),
              linear-gradient(180deg, transparent 14%, #1588a8 62%, #032c3e 100%),
              linear-gradient(180deg, transparent 36%, #2268bc 76%, #06224c 100%),
              linear-gradient(180deg, transparent 6%,  #4257e4 54%, #121a66 100%),
              linear-gradient(180deg, transparent 18%, #6a3aee 66%, #240a70 100%),
              linear-gradient(180deg, transparent 2%,  #9c3cff 50%, #3c0a78 100%),
              linear-gradient(180deg, transparent 20%, #bc2ee8 68%, #4c0868 100%),
              linear-gradient(180deg, transparent 9%,  #e03aa4 58%, #60063c 100%),
              linear-gradient(180deg, transparent 38%, #f0547e 80%, #6c0828 100%)
            `,
              backgroundSize: BAR_SIZE,
              backgroundPosition: BAR_POS,
              backgroundRepeat: "no-repeat",
              filter: "blur(18px)",
            }}
          />
        </>
      )
    },
  },
]