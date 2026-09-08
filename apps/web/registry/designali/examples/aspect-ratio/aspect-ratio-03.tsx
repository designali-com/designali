import Image from "next/image";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-[10rem] rounded-lg bg-muted"
    >
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Designali portrait preview"
        fill
        className="rounded-lg object-cover"
      />
    </AspectRatio>
  );
}