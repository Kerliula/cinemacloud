import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoProps } from "@/types/ui";

export default function Logo({ className, size = 25, onClick }: LogoProps) {
  return (
    <div
      className={cn(
        "text-primary",
        "flex items-center gap-2",
        "rounded-full px-6 py-2.5",
        "glass-light",
        onClick && "transition-base cursor-pointer",
        onClick && "hover:border-white/60 hover:bg-white/10",
        "group",
        className
      )}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? "CinemaCloud home" : undefined}
    >
      <Cloud size={size} aria-hidden="true" />
      <span className="text-md font-bold uppercase text-shadow-lg">
        CinemaCloud
      </span>
    </div>
  );
}
