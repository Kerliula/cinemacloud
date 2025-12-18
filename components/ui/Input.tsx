import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { InputProps } from "@/types/ui";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, hideLabel = false, className, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? `input-${autoId}`;

    const showLabel = label && !hideLabel;

    const hasIcon = Boolean(icon);
    const Icon = (
      <span className="text-primary pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
        {icon}
      </span>
    );

    const paddingLeft = hasIcon ? "pl-10" : "pl-3";

    return (
      <div className="gap-vertical-sm flex flex-col text-sm">
        {showLabel && (
          <label htmlFor={inputId} className="text-primary/80">
            {label}
          </label>
        )}
        <div className="relative">
          {hasIcon && Icon}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "glass-dark w-full rounded-md py-3 pr-3",
              "text-primary",
              paddingLeft,
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
