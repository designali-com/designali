import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage
          src="https://github.com/designali-com.png"
          alt="@designali"
        />
        <AvatarFallback>DA</AvatarFallback>
      </Avatar>
    );
  }