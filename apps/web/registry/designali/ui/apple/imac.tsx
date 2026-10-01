import * as React from "react";

interface ImacProps {
  children: React.ReactNode;
  className?: string;

  /** iMac size */
  size?: "sm" | "md" | "lg" | "xl";

  /** Frame color */
  color?: "blue" | "green" | "pink" | "silver" | "yellow" | "orange" | "purple";

  /** Custom iMac frame image */
  image?: string;

  /** Image alt text */
  alt?: string;
}

type ImacColor = ImacProps["color"];

const imacImages: Record<NonNullable<ImacColor>, string> = {
  blue: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Blue.png?updatedAt=1790829661198",
  green: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Green.png?updatedAt=1790829661139",
  pink: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Pink.png?updatedAt=1790829661453",
  silver: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Silver.png?updatedAt=1790829661377",
  yellow: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Yellow.png?updatedAt=1790829661269",
  orange: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Orange.png?updatedAt=1790829661145",
  purple: "https://ik.imagekit.io/designali/images/apple/iMac/iMac%20M4%2024-inch%20Purple.png?updatedAt=1790829661478",
};

const sizeClasses = {
  sm: "w-[28rem]",
  md: "w-[40rem]",
  lg: "w-[54rem]",
  xl: "w-[68rem]",
};

const roundedClasses = {
  sm: "rounded-[8px]",
  md: "rounded-[12px]",
  lg: "rounded-[16px]",
  xl: "rounded-[20px]",
};

export function IMac({
  children,
  className = "",
  size = "md",
  color = "silver",
  image,
  alt = "iMac",
}: ImacProps) {
  const frameImage = image ?? imacImages[color] ?? imacImages.silver;

  return (
    <div
      className={`
        relative inline-block
        ${sizeClasses[size]}
        aspect-[16/11]
        ${className}
      `}
    >
      <img
        src={frameImage}
        alt={alt}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain"
      />

      {/* Screen container overlay positioned precisely for iMac display area */}
      <div
        className={`
          absolute left-[6%] right-[6%] top-[5%] bottom-[22%] overflow-hidden bg-background
          ${roundedClasses[size]}
        `}
      >
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}