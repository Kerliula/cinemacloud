import { Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsClick: () => void;
  onSignOutClick: () => void;
  className?: string;
}

export default function UserMenu({
  isOpen,
  onClose,
  onSettingsClick,
  onSignOutClick,
  className,
}: UserMenuProps) {
  if (!isOpen) return null;

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
    >
      <button
        className={cn(
          "flex w-full items-center gap-3 px-6 py-4 text-left sm:px-4 sm:py-3",
          "text-base text-white transition-colors sm:text-sm",
          "hover:bg-white/10 hover:text-purple-300",
          "focus:bg-white/10 focus:text-purple-300 focus:outline-none",
          "active:bg-white/20"
        )}
        onClick={onSettingsClick}
        role="menuitem"
      >
        <Settings className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />
        <span className="hidden sm:block">Settings</span>
      </button>

      <div
        className="mx-6 my-2 h-px bg-white/20 sm:mx-2 sm:my-1"
        aria-hidden="true"
      />

      <button
        className={cn(
          "flex w-full items-center gap-3 px-6 py-4 text-left sm:px-4 sm:py-3",
          "text-base text-white transition-colors sm:text-sm",
          "hover:bg-red-500/20 hover:text-red-300",
          "focus:bg-red-500/20 focus:text-red-300 focus:outline-none",
          "active:bg-red-500/30" // Better feedback on touch
        )}
        onClick={onSignOutClick}
        role="menuitem"
      >
        <LogOut className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />
        <span className="hidden sm:block">Sign Out</span>
      </button>
    </div>
  );
}
