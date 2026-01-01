import { cn } from "@/lib/utils";

const MenuButton = ({
  onClick,
  text,
  variant = "default",
  icon,
}: {
  onClick: () => void;
  text: string;
  variant?: "default" | "danger";
  icon?: React.ReactNode;
}) => {
  const defaultClasses = cn(
    "hover:bg-white/10 hover:text-purple-300",
    "focus:bg-white/10 focus:text-purple-300 focus:outline-none",
    "active:bg-white/20"
  );

  const dangerClasses = cn(
    "hover:bg-red-500/10 hover:text-red-300",
    "focus:bg-red-500/10 focus:text-red-300 focus:outline-none",
    "active:bg-red-500/20"
  );

  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 px-6 py-4 text-left sm:px-4 sm:py-3",
        "text-base text-white transition-colors sm:text-sm",
        variant === "danger" ? dangerClasses : defaultClasses
      )}
      onClick={() => onClick()}
      role="menuitem"
    >
      {icon}
      <span className="hidden sm:block">{text}</span>
    </button>
  );
};

export default MenuButton;
