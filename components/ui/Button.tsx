import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/ui";

export const Button = ({
  variant = "primary",
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "transition-base rounded-full font-semibold uppercase",
    "flex items-center justify-center gap-horizontal-md",
    "focus:ring-2 focus:ring-purple-400/20 focus:ring-offset-2 focus:outline-none",
    "text-primary text-sm",
    "px-6 py-2",
    "xs:py-3",
    "sm:px-8 sm:py-3 sm:text-base",
    "md:px-10 md:py-4",
    "lg:px-12 lg:py-4 lg:text-lg",
    "xl:px-16 xl:py-5"
  );

  const variantStyles = {
    primary: cn("glass-dark !bg-purple-700/30", "hover-scale"),
    secondary: cn(
      "group glass-medium border",
      "hover:border-white/50 hover:bg-white/10 hover:shadow-lg",
      "active:scale-95"
    ),
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="lg:text-md xl:text-md text-xs uppercase sm:text-sm md:text-base">
        {children}
      </span>
    </button>
  );
};
