import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import UserMenu from "./UserMenu";
import AuthModal from "@/components/ui/Auth/AuthModal";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { apiClient } from "@/elysia/lib/apiClient";

export default function NavbarProfile() {
  const { data: currentUser } = useCurrentUser();
  const userName = currentUser?.username || null;

  const isSignedIn = Boolean(userName);

  return isSignedIn ? (
    <NavbarProfileSignedIn userName={userName} />
  ) : (
    <NavbarProfileSignedOut />
  );
}

const NavbarProfileSignedIn = ({ userName }: { userName: string | null }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => setIsProfileOpen(false), isProfileOpen);

  const handleSignOutClick = () => {
    apiClient.auth.signout
      .post()
      .then(() => {
        window.location.href = "/";
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Sign out failed";
        alert(message);
      });
  };

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsProfileOpen((prev) => !prev)}
        aria-expanded={isProfileOpen}
        aria-label={isProfileOpen ? "Close profile menu" : "Open profile menu"}
        aria-haspopup="menu"
        aria-controls="user-menu"
      >
        <div className="gap-horizontal-xs flex items-center">
          <span className="uppercase">{userName}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isProfileOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </div>
      </Button>
      <UserMenu
        id="user-menu"
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onSettingsClick={() => router.push("/user/settings")}
        onMoviesListClick={() => router.push("/user/favorites")}
        onSignOutClick={handleSignOutClick}
      />
    </div>
  );
};

const NavbarProfileSignedOut = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsAuthOpen(true)}
        aria-label="Sign in to your account"
      >
        Sign in
      </Button>
      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};
