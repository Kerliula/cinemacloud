"use client";

import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const userName = "John Doe";

  return (
    <header>
      <nav className="flex items-center justify-between text-white">
        {/* Left side */}
        <div className="gap-horizontal-2xl flex items-center">
          <Logo />
          <NavbarLinks items={NAV_ITEMS} />
        </div>

        {/* Right side */}
        <div className="gap-horizontal-2xl flex items-center">
          <NavbarSearch />
          <NavbarProfile userName={userName} />
        </div>
      </nav>
    </header>
  );
}
