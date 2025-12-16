import { Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NavbarSearch() {
  const [value, setValue] = useState("");

  return (
    <div className="group relative">
      <Search
        className={cn(
          "pointer-events-none absolute top-1/2 left-4 z-10 h-4 w-4 -translate-y-1/2",
          "text-primary transition-base group-focus-within:text-white"
        )}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies, series..."
        aria-label="Search movies and series"
        className={cn(
          "w-72 rounded-full border border-white/40 bg-white/5 py-3 pr-11 pl-11 backdrop-blur-md",
          "text-sm font-medium text-white placeholder-gray-400",
          "transition-base",
          "hover:border-white/60 hover:bg-white/10",
          "focus:w-80 focus:border-white/80 focus:bg-white/15 focus:outline-none"
        )}
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className={cn(
            "absolute top-1/2 right-4 -translate-y-1/2",
            "rounded-full p-1 text-gray-400",
            "transition-fast hover:bg-white/20 hover:text-white"
          )}
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
