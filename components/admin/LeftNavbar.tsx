"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/adminConstants";
import { Cloud } from "lucide-react";

const LeftNavbar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen border-r border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="gap-vertical-md padding-lg flex h-full flex-col items-center">
        <Cloud className="text-primary h-8 w-8" />
        <div className="w-full border-t border-white/10" />
        <nav className="flex-1 overflow-y-auto">
          <ul className="gap-vertical-md flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`padding-lg block rounded-lg transition-colors ${
                      isActive
                        ? "bg-red-600/20 text-red-400"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default LeftNavbar;
