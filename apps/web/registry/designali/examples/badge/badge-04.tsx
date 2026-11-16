import {
  ArrowUpRight as ArrowUpRightIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge";

export default function BadgeAsLink() {
  return (
    <Badge
      render={
        <a href="https://www.designali.com">
          designali.com <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      }
    />
  );
}