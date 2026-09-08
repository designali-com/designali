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
          <AvatarImage src="https://github.com/designali-com.png" alt="@designali" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    );
  }