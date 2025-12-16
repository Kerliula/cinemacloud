import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroButtons = () => (
  <div className="flex gap-4">
    <button
      className={cn(
        "glass-dark transition-base rounded-full !bg-purple-700/20 px-10 py-2 font-semibold",
        "text-primary uppercase",
        "sm:px-12 sm:py-4",
        "lg:px-20",
        "hover-scale",
        "focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:outline-none"
      )}
    >
      Play
    </button>

    <button
      type="button"
      aria-label="Add to list"
      className={cn(
        "group glass-dark transition-base relative rounded-full p-4",
        "hover-scale",
        "active:scale-95"
      )}
    >
      <Plus className="text-primary h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
      <span
        className={cn(
          "transition-base absolute inset-0 rounded-full border-2 border-white/0",
          "group-hover:scale-125 group-hover:border-white/20 group-hover:opacity-0"
        )}
      ></span>
    </button>
  </div>
);
