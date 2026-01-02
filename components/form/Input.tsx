import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { InputProps } from "@/types/ui";

interface InputPropsExtended extends InputProps {
  colorMode?: "light" | "dark" | "medium";
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputPropsExtended>(
  (
    {
      colorMode = "dark",
      label,
      icon,
      hideLabel = false,
      className,
      id,
      onSubmit,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = id ?? `input-${autoId}`;

    const colorModeClass =
      colorMode === "light"
        ? "glass-light"
        : colorMode === "dark"
          ? "glass-dark"
          : "glass-medium";

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
          <label
            htmlFor={inputId}
            className="text-primary font-medium uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {hasIcon && Icon}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              colorModeClass,
              "w-full rounded-md py-3 pr-3",
              "text-primary",
              paddingLeft,
              className
            )}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmit?.(e);
              }
            }}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
