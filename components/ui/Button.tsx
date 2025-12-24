import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/ui";

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "transition-base rounded-full font-semibold uppercase",
    "flex items-center justify-center gap-horizontal-md",
    "focus:ring-2 focus:ring-purple-400/20 focus:ring-offset-2 focus:outline-none",
    "text-primary"
  );

  const sizeStyles = {
    sm: cn("text-xs px-4 py-2 xs:py-2 sm:px-6 sm:py-3 sm:text-sm"),
    md: cn(
      "text-sm px-5 py-2 xs:py-2 sm:px-8 sm:py-2 sm:text-base",
      "md:px-10 md:py-4 lg:px-12 lg:py-4 lg:text-lg xl:px-16 xl:py-4"
    ),
    lg: cn(
      "text-sm px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5",
      "lg:px-14 lg:py-6 lg:text-xl xl:px-20 xl:py-7"
    ),
  } as const;

  const variantStyles = {
    primary: cn("glass-dark !bg-purple-700/50", "hover-scale"),
    secondary: cn(
      "group glass-medium border",
      "hover:border-white/50 hover:bg-white/10 hover:shadow-lg",
      "active:scale-95"
    ),
    danger: cn("glass-dark !bg-red-600/50", "hover-scale"),
  };

  return (
    <button
      type="button"
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="mt-1">{icon}</span>}
      {children && <span className="uppercase">{children}</span>}
    </button>
  );
};

export default Button;
