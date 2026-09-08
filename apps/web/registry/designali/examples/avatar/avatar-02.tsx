import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarWithBadge() {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
        <AvatarFallback>DA</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    );
  }