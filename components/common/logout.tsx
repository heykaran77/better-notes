"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    toast.promise(authClient.signOut(), {
      loading: "Logging out...",
      success: () => {
        router.push("/auth/login");
        return "Logged out successfully";
      },
      error: "Logout failed",
    });
  };
  return (
    <Button
      variant={"outline"}
      onClick={handleLogout}
      className="cursor-pointer">
      Logout
    </Button>
  );
}
