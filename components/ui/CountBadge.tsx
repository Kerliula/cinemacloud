import { cn } from "@/lib/utils";

interface CountBadgeProps {
  count: number;
  className?: string;
}

const CountBadge = ({ count, className }: CountBadgeProps) => {
  return (
    <span
      className={cn(
        "glass-medium rounded-full border-none! px-1.5 py-0.5 md:px-2",
        "text-secondary text-xs font-medium",
        "transition-base",
        "group-hover:bg-purple-500/20 group-hover:text-purple-300",
        className
      )}
    >
      {count}
    </span>
  );
};

export default CountBadge;
