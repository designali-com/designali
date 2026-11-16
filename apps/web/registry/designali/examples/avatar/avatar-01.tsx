import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage
          src="/ali.jpg"
          alt="Ali Imam"
        />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    );
  }