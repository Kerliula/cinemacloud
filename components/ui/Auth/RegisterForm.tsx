"use client";

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Button, Input } from "@/components/ui";
import AuthFooter from "@/components/ui/Auth/AuthFooter";
import { RegisterFormProps } from "@/types/ui";
import { INPUT_ICON_SIZE } from "@/lib/constants";

const AcceptTerms = ({
  checked,
  onChangeAction,
  className = "",
}: {
  checked: boolean;
  onChangeAction: (checked: boolean) => void;
  className?: string;
}) => {
  return (
    <div className={`flex items-start gap-3 text-sm ${className}`}>
      <label className="inline-flex items-start gap-2 text-white/80">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChangeAction(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-purple-500"
        />
        <span className="select-none">
          I accept the <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </span>
      </label>
    </div>
  );
};

export default function RegisterForm({ onSwitch, onClose }: RegisterFormProps) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    if (!accepted) {
      alert("Please accept the Terms and Privacy Policy");
      return;
    }

    console.log("register", { displayName, email, password });
    alert("Registered (stub)");
    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit} className="gap-vertical-md flex flex-col">
      <Input
        id="register-name"
        label="Full name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Your name"
        required
        icon={<User size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        icon={<Mail size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Min 8 characters"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-confirm"
        label="Confirm password"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Repeat password"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <AcceptTerms checked={accepted} onChangeAction={setAccepted} />

      <Button size="sm" type="submit" variant="primary">
        Create account
      </Button>

      <AuthFooter
        prompt="Already have an account?"
        actionLabel="Sign up"
        onSwitchAction={onSwitch}
      />
    </form>
  );
}
