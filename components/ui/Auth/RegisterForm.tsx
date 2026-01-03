"use client";

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui";
import { Input } from "@/components/form";
import AuthFooter from "@/components/ui/Auth/AuthFooter";
import { RegisterFormProps } from "@/types/ui";
import { INPUT_ICON_SIZE } from "@/lib/constants";
import { apiClient } from "@/elysia/lib/apiClient";
import ErrorMessage from "./ErrorMessage";
import { form } from "elysia";

export default function RegisterForm({ onSwitch, onClose }: RegisterFormProps) {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    confirm: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [formState, setFormState] = useState<{
    accepted: boolean;
    validationError: string | null;
    errorStatus: number | null;
  }>({
    accepted: false,
    validationError: null,
    errorStatus: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.accepted) {
      alert("Please accept the Terms and Privacy Policy");
      return;
    }

    try {
      const res = await apiClient.auth.register.post({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        repeatPassword: formData.confirm,
      });

      if (res.error) {
        if (res.error.status === 422) {
          setFormState({
            ...formState,
            validationError: res.error.value.message || "Validation error",
            errorStatus: 422,
          });
        } else {
          setFormState({
            ...formState,
            errorStatus: res.error.status,
          });
        }

        return;
      }

      window.location.reload();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Registration failed";
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-vertical-md flex flex-col">
      {formState.errorStatus === 422 && (
        <ErrorMessage message={formState.validationError || ""} />
      )}
      {formState.errorStatus === 401 && (
        <ErrorMessage message="Invalid credentials. Please try again." />
      )}
      {formState.errorStatus === 500 && (
        <ErrorMessage message="Server error. Please try again later." />
      )}
      {formState.errorStatus === 409 && (
        <ErrorMessage message="Email or username already in use." />
      )}
      <Input
        id="register-name"
        label="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Your username"
        required
        icon={<User size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="you@example.com"
        required
        icon={<Mail size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Min 8 characters"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="register-confirm"
        label="Confirm password"
        type="password"
        value={formData.confirm}
        onChange={(e) => setFormData({ ...formData, confirm: e.target.value })}
        placeholder="Repeat password"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <AcceptTerms
        checked={formState.accepted}
        onChangeAction={(accepted) => setFormState({ ...formState, accepted })}
      />

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
    <div className={`gap-horizontal-md flex items-start text-sm ${className}`}>
      <label className="inline-flex items-start gap-2 text-white/80">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChangeAction(e.target.checked)}
          className="h-4 w-4 rounded border-white/20 bg-white/5 accent-purple-500"
        />
        <span className="select-none">
          I accept the <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </span>
      </label>
    </div>
  );
};
