import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoProps } from "@/types/ui";

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <div
      className={cn(
        "text-primary",
        "flex items-center gap-1 md:gap-2",
        "rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5",
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
      <Cloud
        aria-hidden="true"
        className="h-5 w-5 text-shadow-md md:h-6 md:w-6 lg:h-7 lg:w-7"
      />
      <span className="xl:text-md hidden text-xs font-bold uppercase text-shadow-md md:text-sm lg:block lg:text-sm">
        CinemaCloud
      </span>
    </div>
  );
}
