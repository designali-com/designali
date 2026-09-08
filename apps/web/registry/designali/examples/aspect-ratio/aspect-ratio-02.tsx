import Image from "next/image";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-[12rem] rounded-lg bg-muted"
    >
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Designali UI preview"
        fill
        className="rounded-lg object-cover"
      />
    </AspectRatio>
  );
}