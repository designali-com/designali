import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@workspace/ui/components/avatar";
  
  export default function AvatarSizeExample() {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
      </div>
    );
  }