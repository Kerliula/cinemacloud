"use client";

import { NAV_ITEMS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";
import { Menu } from "lucide-react";

export default function Navbar() {
  const userName = "John Doe";

  return (
    <header>
      <nav className="flex items-center justify-between text-white">
        {/* Left side */}
        <div className="nav-side-base-classes">
          <Logo />
          <NavbarLinks items={NAV_ITEMS} />
        </div>

        {/* Right side */}
        <div className="nav-side-base-classes">
          {/* Desktop search */}
          <NavbarSearch className="hidden 2xl:flex" />

          <NavbarProfile className="hidden xl:flex" userName={userName} />

          {/* Mobile menu button */}
          <button className="p-2 xl:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
