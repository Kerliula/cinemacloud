"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { CheckboxProps } from "@/types/ui";
import { cn } from "@/lib/utils";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      checked,
      defaultChecked,
      onChange,
      label,
      disabled = false,
      className = "",
      required = false,
    },
    ref
  ) => {
    const idRef = useRef<string>(
      id ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`
    );

    useEffect(() => {
      if (id) idRef.current = id;
    }, [id]);
    const inputId = idRef.current;

    const [internalChecked, setInternalChecked] = useState<boolean>(
      defaultChecked ?? false
    );
    const isControlled = typeof checked === "boolean";
    const valueChecked = isControlled ? (checked as boolean) : internalChecked;

    useEffect(() => {
      if (!isControlled && typeof defaultChecked === "boolean") {
        setInternalChecked(defaultChecked);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultChecked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.checked;

      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    };

    return (
      <div className={`flex items-start gap-3 text-sm ${className}`}>
        <label
          htmlFor={inputId}
          className={`inline-flex items-start gap-2 text-white/80 ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <input
            id={inputId}
            ref={ref}
            name={name}
            type="checkbox"
            checked={valueChecked}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            aria-checked={valueChecked}
            aria-disabled={disabled}
            className={cn(
              "h-4 w-4 rounded",
              "border-white/20 bg-white/5",
              "accent-purple-500",
              "focus:ring-2 focus:ring-purple-400 focus:outline-none",
              "disabled:opacity-50"
            )}
          />
          <span className="select-none">{label}</span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
