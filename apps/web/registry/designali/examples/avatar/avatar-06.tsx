import {
  Plus as PlusIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@workspace/ui/components/avatar";

export default function AvatarGroupCountIconExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/logo.svg" alt="Designali" />
        <AvatarFallback>DA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="/ai.jpg"
          alt="Designali AI"
        />
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  );
}