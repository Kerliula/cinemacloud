import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { AdminButtonProps } from "@/types/ui";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  Icon,
  loading = false,
  fullWidth = false,
  disabled,
  ...props
}: AdminButtonProps) => {
  const baseStyles = cn(
    "transition-all duration-200 rounded-lg font-medium uppercase",
    "flex flex-row items-center justify-center gap-horizontal-sm",
    "text-primary shadow-lg backdrop-blur-sm",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    fullWidth && "w-full"
  );

  const sizeStyles = {
    sm: "text-xs px-4 py-2",
    md: "text-xs px-6 py-3 md:px-8 md:py-3 lg:px-10",
    lg: "text-sm px-8 py-4 md:px-12 lg:px-14",
  };

  const variantStyles = {
    primary: cn(
      "bg-red-900/20 border border-white/10",
      "hover:bg-red-900/10",
      "active:scale-[0.98]"
    ),
    secondary: cn(
      "bg-black/20 border border-white/10",
      "hover:bg-black/30",
      "active:scale-[0.98]"
    ),
    danger: cn(
      "bg-red-700/90 border border-red-600/40",
      "hover:bg-red-700 hover:border-red-500/60 hover:shadow-red-600/30",
      "active:scale-[0.98]"
    ),
    success: cn(
      "bg-green-600/80 border border-green-500/30",
      "hover:bg-green-600 hover:border-green-400/50 hover:shadow-green-500/20",
      "active:scale-[0.98]"
    ),
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2
          className="animate-spin"
          width={iconSizes[size]}
          height={iconSizes[size]}
        />
      ) : (
        Icon && <Icon width={iconSizes[size]} height={iconSizes[size]} />
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
