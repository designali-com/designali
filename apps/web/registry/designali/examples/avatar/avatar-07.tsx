import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarSizeExample() {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </div>
    );
  }