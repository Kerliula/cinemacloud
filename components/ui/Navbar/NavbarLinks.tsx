import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/ui";
import Link from "next/link";

interface NavbarLinksProps {
  items: NavItem[];
}

export default function NavbarLinks({ items }: NavbarLinksProps) {
  return (
    <ul className="gap-vertical-2xl font-geist flex items-center text-sm font-bold">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={cn(
              "group flex items-center gap-2",
              "cursor-pointer transition-colors hover:text-purple-400"
            )}
          >
            <span className="uppercase">{item.name}</span>
            {item.count !== undefined && (
              <span
                className={cn(
                  "glass-medium rounded-full border-none! px-2 py-0.5",
                  "text-secondary text-xs font-medium",
                  "transition-base",
                  "group-hover:bg-purple-500/20 group-hover:text-purple-300"
                )}
              >
                {item.count}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
