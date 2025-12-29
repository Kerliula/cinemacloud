import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/ui";
import Link from "next/link";

interface NavbarLinksProps {
  items: NavItem[];
  className?: string;
}

const CountBadge = ({ count }: { count: number }) => {
  return (
    <span
      className={cn(
        "glass-medium rounded-full border-none! px-1.5 py-0.5 md:px-2",
        "text-secondary text-xs font-medium",
        "transition-base",
        "group-hover:bg-purple-500/20 group-hover:text-purple-300"
      )}
    >
      {count}
    </span>
  );
};

export default function NavbarLinks({ items, className }: NavbarLinksProps) {
  return (
    <ul
      className={cn(
        "gap-horizontal-2xl font-geist flex flex-row items-center text-xs font-medium md:text-sm md:font-bold",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={cn(
              "group flex cursor-pointer items-center gap-1 md:gap-2",
              "transition-colors hover:text-purple-400"
            )}
          >
            <span className="uppercase">{item.name}</span>
            {item.count !== undefined && <CountBadge count={item.count} />}
          </Link>
        </li>
      ))}
    </ul>
  );
}
