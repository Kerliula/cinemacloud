import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/ui";

interface NavbarLinksProps {
  items: NavItem[];
}

export default function NavbarLinks({ items }: NavbarLinksProps) {
  return (
    <ul className="gap-horizontal-2xl font-geist flex flex-row items-center text-sm font-bold">
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            "group flex cursor-pointer items-center gap-2",
            "transition-colors hover:text-purple-400"
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
        </li>
      ))}
    </ul>
  );
}
