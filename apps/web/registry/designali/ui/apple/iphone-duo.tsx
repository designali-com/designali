import * as React from "react";

interface IPhoneDuoProps {
  children?: React.ReactNode;
  className?: string;

  /** Phone size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Phone orientation (Ignored when side is "frontback") */
  orientation?: "portrait" | "landscape";

  /** Phone view side (front, back, or frontback) */
  side?: "front" | "back" | "frontback";

  /** Frame color */
  color?: "night-sky" | "star-white";
}

type PhoneColor = NonNullable<IPhoneDuoProps["color"]>;

interface SideImageSet {
  portrait: string;
  landscape: string;
}

interface OrientationImageSet {
  front: SideImageSet;
  back: SideImageSet;
  frontback: string; // Single image without orientation
}

// ==========================================
// 📱 DEVICE IMAGES CONFIGURATION
// ==========================================
const phoneImages: Record<PhoneColor, OrientationImageSet> = {
  "night-sky": {
    front: {
      portrait: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Inner%20Open%20Portrait.png?updatedAt=1790829512133",
      landscape: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Inner%20Open%20Landscape.png?updatedAt=1790829512135",
    },
    back: {
      portrait: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Closed%20Portrait.png?updatedAt=1790829511949",
      landscape: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Closed%20Landscape.png?updatedAt=1790829511938",
    },
    frontback: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Night%20Sky%20-%20Outer%20Open.png?updatedAt=1790829512290",
  },
  "star-white": {
    front: {
      portrait: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Portrait.png?updatedAt=1790829512079",
      landscape: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Inner%20Open%20Landscape.png?updatedAt=1790829512033",
    },
    back: {
      portrait: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Outer%20Closed%20Portrait.png?updatedAt=1790829511959",
      landscape: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Outer%20Closed%20Landscape.png?updatedAt=1790829511960",
    },
    frontback: "https://ik.imagekit.io/designali/images/apple/iPhone%20Duo/iPhone%20Duo%20-%20Star%20White%20-%20Outer%20Open.png?updatedAt=1790829512168",
  },
};

// ==========================================
// 📏 OVERALL DEVICE HEIGHT SIZES
// ==========================================
const deviceSizeClasses = {
  // --- 1. FRONT VIEW SIZES ---
  front: {
    portrait: {
      sm: "h-[24rem]",
      md: "h-[32rem]",
      lg: "h-[40rem]",
      xl: "h-[48rem]",
    },
    landscape: {
      sm: "h-[12rem]",
      md: "h-[16rem]",
      lg: "h-[20rem]",
      xl: "h-[24rem]",
    },
  },
  
  // --- 2. BACK VIEW SIZES ---
  back: {
    portrait: {
      sm: "h-[24rem]",
      md: "h-[32rem]",
      lg: "h-[40rem]",
      xl: "h-[48rem]",
    },
    landscape: {
      sm: "h-[12rem]",
      md: "h-[16rem]",
      lg: "h-[20rem]",
      xl: "h-[24rem]",
    },
  },

  // --- 3. FRONTBACK VIEW SIZES (NO ORIENTATION) ---
  frontback: {
    sm: "h-[40rem]",
    md: "h-[48rem]",
    lg: "h-[52rem]",
    xl: "h-[64rem]",
  },
};

// ==========================================
// 🖼️ ASPECT RATIO CLASSES
// ==========================================
const aspectRatioClasses = {
  // --- 1. FRONT ASPECT RATIO ---
  front: {
    portrait: "aspect-[9/19.5]",
    landscape: "aspect-[19.5/9]",
  },
  
  // --- 2. BACK ASPECT RATIO ---
  back: {
    portrait: "aspect-[9/19.5]",
    landscape: "aspect-[19.5/9]",
  },

  // --- 3. FRONTBACK ASPECT RATIO ---
  frontback: "aspect-[9/19.5]",
};

// ==========================================
// 🎨 BORDER RADIUS (ROUNDED) CLASSES
// ==========================================
const roundedClasses = {
  // --- 1. FRONT VIEW ROUNDED ---
  front: {
    portrait: {
      sm: "rounded-[16px]",
      md: "rounded-[10px]",
      lg: "rounded-[16px]",
      xl: "rounded-[20px]",
    },
    landscape: {
      sm: "rounded-[16px]",
      md: "rounded-[20px]",
      lg: "rounded-[24px]",
      xl: "rounded-[30px]",
    },
  },
  
  // --- 2. BACK VIEW ROUNDED ---
  back: {
    portrait: {
      sm: "rounded-l-[4px] rounded-r-[12px]",
      md: "rounded-l-[6px] rounded-r-[14px]",
      lg: "rounded-l-[8px] rounded-r-[16px]",
      xl: "rounded-l-[10px] rounded-r-[20px]",
    },
    landscape: {
      sm: "rounded-t-[20px] rounded-b-[6px]",
      md: "rounded-t-[30px] rounded-b-[10px]",
      lg: "rounded-t-[30px] rounded-b-[10px]",
      xl: "rounded-t-[30px] rounded-b-[10px]",
    },
  },

  // --- 3. FRONTBACK VIEW ROUNDED (NO ORIENTATION) ---
  frontback: {
    sm: "rounded-l-[1px] rounded-r-[12px]",
    md: "rounded-l-[2px] rounded-r-[16px]",
    lg: "rounded-l-[4px] rounded-r-[20px]",
    xl: "rounded-l-[6px] rounded-r-[24px]",
  },
};

// ==========================================
// 📐 SCREEN POSITION CLASSES (INSET)
// ==========================================
const screenPositionClasses = {
  // --- 1. FRONT VIEW POSITIONS ---
  front: {
    portrait: {
      sm: "left-[5.5%] right-[5.5%] top-[19.5%] bottom-[20%]",
      md: "left-[5.5%] right-[5.5%] top-[20%] bottom-[20%]",
      lg: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
      xl: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
    },
    landscape: {
      sm: "left-[20.5%] right-[20.5%] top-[5%] bottom-[4.5%]",
      md: "left-[20.5%] right-[20.5%] top-[5%] bottom-[4.5%]",
      lg: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
      xl: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
    },
  },

  // --- 2. BACK VIEW POSITIONS ---
  back: {
    portrait: {
      sm: "left-[5.5%] right-[5.5%] top-[19.5%] bottom-[20%]",
      md: "left-[5.5%] right-[5.5%] top-[20%] bottom-[20%]",
      lg: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
      xl: "left-[5%] right-[5%] top-[20%] bottom-[20%]",
    },
    landscape: {
      sm: "left-[20%] right-[20%] top-[5%] bottom-[4.5%]",
      md: "left-[20%] right-[20%] top-[5%] bottom-[4.5%]",
      lg: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
      xl: "left-[20%] right-[20%] top-[5%] bottom-[5%]",
    },
  },

  // --- 3. FRONTBACK VIEW POSITIONS (NO ORIENTATION) ---
  frontback: {
    sm: "left-[51%] right-[2%] top-[34.5%] bottom-[34.5%]",
    md: "left-[51%] right-[2%] top-[34.5%] bottom-[34.5%]",
    lg: "left-[51%] right-[2%] top-[34.5%] bottom-[34.5%]",
    xl: "left-[51%] right-[2%] top-[34.5%] bottom-[34.5%]",
  },
};

// ==========================================
// 🚀 MAIN COMPONENT
// ==========================================
export function IPhoneDuo({
  children,
  className = "",
  size = "xl",
  orientation = "portrait",
  side = "frontback",
  color = "star-white",
}: IPhoneDuoProps) {
  
  const isFrontBack = side === "frontback";
  const isLandscape = !isFrontBack && orientation === "landscape";
  const currentOrientation = isLandscape ? "landscape" : "portrait";
  
  const colorImages = phoneImages[color] || phoneImages["night-sky"];

  // Dynamic class variables
  let frameImage = "";
  let currentSizeClass = "";
  let currentPositionClass = "";
  let currentRoundedClass = "";
  let currentAspectRatioClass = "";

  if (isFrontBack) {
    // Frontback view handling (no orientation)
    frameImage = colorImages.frontback;
    currentSizeClass = deviceSizeClasses.frontback[size];
    currentPositionClass = screenPositionClasses.frontback[size];
    currentRoundedClass = roundedClasses.frontback[size];
    currentAspectRatioClass = aspectRatioClasses.frontback;
  } else {
    // Front and Back views handling (uses orientation)
    const sideImages = colorImages[side] as SideImageSet;
    frameImage = isLandscape ? sideImages.landscape : sideImages.portrait;
    currentSizeClass = deviceSizeClasses[side][currentOrientation][size];
    currentPositionClass = screenPositionClasses[side][currentOrientation][size];
    currentRoundedClass = roundedClasses[side][currentOrientation][size];
    currentAspectRatioClass = aspectRatioClasses[side][currentOrientation];
  }

  return (
    <div
      className={`
        relative inline-block
        ${currentSizeClass}
        ${currentAspectRatioClass}
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt="iPhone Duo Mockup"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      {children && (
        <div
          className={`
            absolute overflow-hidden bg-background
            ${currentPositionClass}
            ${currentRoundedClass}
          `}
        >
          <div className="h-full w-full overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}