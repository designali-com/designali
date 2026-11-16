import {
  Plus as PlusIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

export default function AvatarBadgeIconExample() {
  return (
    <Avatar>
      <AvatarImage src="/ali.jpg" alt="Ali Imam" />
      <AvatarFallback>AI</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}