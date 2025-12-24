"use client";

import { AuthFooterProps } from "@/types/ui";

export default function AuthFooter({
  prompt,
  actionLabel = "Sign up",
  onSwitchAction,
}: AuthFooterProps) {
  return (
    <div className="text-primary/70 flex gap-1 text-center text-sm">
      <span>{prompt}</span>
      <button
        type="button"
        className="active-text font-medium"
        onClick={() => onSwitchAction?.()}
      >
        {actionLabel}
      </button>
    </div>
  );
}
