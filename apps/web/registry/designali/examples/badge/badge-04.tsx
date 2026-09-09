import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@workspace/ui/components/badge";

export default function BadgeAsLink() {
  return (
    <Badge
      render={
        <a href="#link">
          Open Link <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      }
    />
  );
}