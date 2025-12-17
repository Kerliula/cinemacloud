import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavbarProfileProps {
  userName?: string;
  className?: string;
}

export default function NavbarProfile({
  userName,
  className,
}: NavbarProfileProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleSignInClick = () => {
    // Navigate to the sign-in route or open the sign-in modal
    // Example: router.push("/sign-in") or authModalContext.open()
    console.log("Sign In button clicked");
  };

  const isSignedIn = !!userName;

  if (isSignedIn) {
    return (
      <button
        className={cn(
          "flex items-center gap-2",
          "glass-medium rounded-full px-4 py-2",
          "hover-scale",
          className
        )}
        onClick={handleProfileClick}
        type="button"
        aria-expanded={isProfileOpen}
        aria-haspopup="menu"
        aria-label={isProfileOpen ? "Close profile menu" : "Open profile menu"}
      >
        <span className="text-sm font-semibold">{userName}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            isProfileOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
    );
  }

  return (
    <button
      className={cn(
        "glass-medium rounded-full px-6 py-2.5",
        "text-sm font-semibold",
        "hover-scale",
        className
      )}
      onClick={handleSignInClick}
      type="button"
    >
      Sign In
    </button>
  );
}
