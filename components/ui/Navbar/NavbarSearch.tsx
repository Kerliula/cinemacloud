"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavbarSearch({ className }: { className?: string }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/search?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("group relative", className)}>
      <Search
        className={cn(
          "pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 md:left-4",
          "text-primary transition-base group-focus-within:text-white"
        )}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        placeholder="Search..."
        aria-label="Search movies and series"
        className={cn(
          "w-40 rounded-full border border-white/40 bg-white/5 py-2",
          "pr-9 pl-9 backdrop-blur-md md:w-56 md:pr-11 md:pl-11 lg:w-64 xl:w-72",
          "text-xs font-medium text-white placeholder-gray-400 md:text-sm",
          "transition-base",
          "hover:border-white/60 hover:bg-white/10",
          "focus:w-48 focus:border-white/80 focus:bg-white/15 focus:outline-none md:focus:w-64 lg:focus:w-72 xl:focus:w-80"
        )}
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className={cn(
            "absolute top-1/2 right-3 -translate-y-1/2 md:right-4",
            "rounded-full p-1 text-gray-400",
            "transition-fast hover:bg-white/20 hover:text-white"
          )}
          aria-label="Clear search"
        >
          <X className="h-3 w-3 md:h-3.5 md:w-3.5" />
        </button>
      )}
    </form>
  );
}
