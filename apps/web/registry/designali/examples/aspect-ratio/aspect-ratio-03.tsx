import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

export default function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-[10rem] rounded-lg bg-muted"
    >
      <img
        src="/ali.jpg"
        alt="Ali Imam, founder of Designali"
        className="absolute inset-0 h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}