import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { SelectProps } from "@/types/ui";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      colorMode = "dark",
      label,
      hideLabel = false,
      className,
      id,
      options,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const selectId = id ?? `select-${autoId}`;

    const colorModeClass =
      colorMode === "light"
        ? "glass-light"
        : colorMode === "dark"
          ? "glass-dark"
          : "glass-medium";

    const showLabel = label && !hideLabel;

    return (
      <div className="gap-vertical-sm flex flex-col text-sm">
        {showLabel && (
          <label
            htmlFor={selectId}
            className="text-primary font-medium uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              colorModeClass,
              "w-full rounded-md px-3 py-3",
              "text-primary",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
