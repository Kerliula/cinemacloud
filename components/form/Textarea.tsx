import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { TextareaProps } from "@/types/ui";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { colorMode = "dark", label, hideLabel = false, className, id, ...props },
    ref
  ) => {
    const autoId = useId();
    const textareaId = id ?? `textarea-${autoId}`;

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
            htmlFor={textareaId}
            className="text-primary font-medium uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            ref={ref}
            className={cn(
              colorModeClass,
              "w-full rounded-md px-3 py-3",
              "text-primary",
              "min-h-[120px] resize-y",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
