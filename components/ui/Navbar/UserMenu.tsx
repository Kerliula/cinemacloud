import { Settings, LogOut, Shield, BookHeart } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserMenuProps } from "@/types/ui";
import MenuButton from "./MenuButton";

const Divider = () => (
  <div
    className="mx-6 my-2 h-px bg-white/20 sm:mx-2 sm:my-1"
    aria-hidden="true"
  />
);

export default function UserMenu({
  isOpen,
  onClose,
  onMoviesListClick,
  onSettingsClick,
  onSignOutClick,
  onAdminClick,
  className,
  id,
  isAdmin,
}: UserMenuProps) {
  if (!isOpen) return null;
  const iconClasses = "h-5 w-5 sm:h-4 sm:w-4";

  return (
    <div
      className={cn(
        "absolute top-full right-0 mt-2",
        "w-full sm:w-48",
        "glass-dark rounded-lg border border-white/20",
        "py-2 sm:py-2",
        "shadow-xl",
        "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
        "z-50",
        className
      )}
      role="menu"
      aria-orientation="vertical"
      id={id}
    >
      {isAdmin && (
        <>
          <MenuButton
            icon={<Shield className={iconClasses} aria-hidden="true" />}
            onClick={onAdminClick}
            text="Admin Panel"
          />
          <Divider />
        </>
      )}

      <MenuButton
        icon={<BookHeart className={iconClasses} aria-hidden="true" />}
        onClick={onMoviesListClick}
        text="Movies List"
      />
      <Divider />
      <MenuButton
        icon={<Settings className={iconClasses} aria-hidden="true" />}
        onClick={onSettingsClick}
        text="Settings"
      />
      <Divider />
      <MenuButton
        icon={<LogOut className={iconClasses} aria-hidden="true" />}
        onClick={onSignOutClick}
        text="Sign Out"
        variant="danger"
      />
    </div>
  );
}
