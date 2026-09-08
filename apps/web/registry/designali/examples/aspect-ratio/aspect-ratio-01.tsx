import Image from "next/image";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <Image
        src="/img/hero-1.jpg"
        alt="Designali showcase visual"
        fill
        className="rounded-lg object-cover"
      />
    </AspectRatio>
  );
}