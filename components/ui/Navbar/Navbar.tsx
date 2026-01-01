"use client";

import { NAV_ITEMS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";

export default function Navbar() {
  const userName = "joe_doe";

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
          <NavbarSearch className="hidden 2xl:flex" />
          <NavbarProfile userName={userName} />
        </div>
      </nav>
    </header>
  );
}
