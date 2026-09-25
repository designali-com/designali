"use client";
 
import { useRouter } from "next/navigation";
import { authClient } from "@/src/lib/auth/auth-client";
import { Button } from "@workspace/ui/components/button";

export function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Button onClick={handleLogout} size={"sm"}>
      Logout 
    </Button>
  );
}