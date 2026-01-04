"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { MultiSelectProps } from "@/types/ui";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const MultiSelect = ({
  colorMode = "dark",
  label,
  options,
  value = [],
  onChange,
  placeholder = "Select options...",
  className = "",
  disabled = false,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setIsOpen(false));

  const toggleOption = (optionValue: string) => {
    if (disabled) return;
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  const selectedLabels = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label)
    .join(", ");

  const colorModeClass =
    colorMode === "light"
      ? "glass-light"
      : colorMode === "dark"
        ? "glass-dark"
        : "glass-medium";

  return (
    <div
      ref={containerRef}
      className={cn("gap-vertical-sm flex flex-col text-sm", className)}
    >
      {label && (
        <label className="text-primary font-medium uppercase">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            colorModeClass,
            "w-full rounded-lg px-3 py-3",
            "text-secondary text-left text-sm",
            "flex items-center justify-between",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <span className={cn(value.length === 0 && "text-white/40")}>
            {value.length === 0 ? placeholder : selectedLabels}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "text-white/60 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <>
            <div
              className={cn(
                "absolute top-full z-20 mt-2 w-full",
                "max-h-60 overflow-y-auto",
                "rounded-lg border border-white/10 shadow-xl",
                "backdrop-blur-md"
              )}
            >
              {options.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => toggleOption(option.value)}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-sm",
                      "transition-colors hover:bg-white/10",
                      "text-secondary",
                      "flex items-center justify-between",
                      isSelected && "bg-purple-500/20 text-purple-300"
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check size={16} />}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
