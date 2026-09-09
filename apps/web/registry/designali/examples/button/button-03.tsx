import { ArrowUpIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";

export default function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button size={"md"} className="rounded-full">Get Started</Button>
      <Button variant="outline" size="icon-lg" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}