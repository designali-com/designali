import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarWithBadge() {
    return (
      <Avatar>
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    );
  }