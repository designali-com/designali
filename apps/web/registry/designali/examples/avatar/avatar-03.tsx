import { PlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

export default function AvatarBadgeIconExample() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
      <AvatarFallback>DA</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}