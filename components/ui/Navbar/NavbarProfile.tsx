import { ChevronDown, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import UserMenu from "./UserMenu";
import AuthModal from "@/components/ui/Auth/AuthModal";

interface NavbarProfileProps {
  userName?: string;
  className?: string;
}

export default function NavbarProfile({
  userName,
  className,
}: NavbarProfileProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    setIsProfileOpen(false);
    // Navigate to settings page
  };

  const handleSignOutClick = () => {
    console.log("Sign out clicked");
    setIsProfileOpen(false);
    // Handle sign out logic
  };

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleSignInClick = () => {
    setIsAuthOpen(true);
  };

  const isSignedIn = !!userName;

  if (isSignedIn) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          className={cn(
            "flex items-center gap-2",
            "glass-medium rounded-full",
            "px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5",
            "hover-scale",
            className
          )}
          onClick={handleProfileClick}
          type="button"
          aria-expanded={isProfileOpen}
          aria-haspopup="menu"
          aria-label={
            isProfileOpen ? "Close profile menu" : "Open profile menu"
          }
        >
          <span className="hidden text-sm font-semibold sm:block">
            {userName}
          </span>
          <UserRound className="h-4 w-4 text-shadow-md sm:hidden" />
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isProfileOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        <UserMenu
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          onSettingsClick={handleSettingsClick}
          onSignOutClick={handleSignOutClick}
        />
      </div>
    );
  }

  return (
    <>
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

      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
