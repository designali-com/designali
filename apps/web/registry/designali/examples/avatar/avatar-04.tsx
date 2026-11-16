import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarGroupExample() {
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
      </AvatarGroup>
    );
  }