"use client";

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui";
import { Input, Checkbox } from "@/components/form";
import AuthFooter from "@/components/ui/Auth/AuthFooter";
import { LoginFormProps } from "@/types/ui";
import { INPUT_ICON_SIZE } from "@/lib/constants";
import { apiClient } from "@/elysia/lib/apiClient";
import ErrorMessage from "./ErrorMessage";

const LoginExtras = ({
  remember,
  setRemember,
}: {
  remember: boolean;
  setRemember: (remember: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between text-sm text-white/80">
      <Checkbox
        checked={remember}
        onChange={(checked) => setRemember(checked)}
        label="Remember me"
      />

      <button
        type="button"
        className="active-text text-sm"
        onClick={() => alert("Forgot password flow (stub)")}
      >
        Forgot password?
      </button>
    </div>
  );
};

const LoginForm = ({ onSwitch, onClose }: LoginFormProps) => {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    remember: boolean;
  }>({
    email: "",
    password: "",
    remember: false,
  });

  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await apiClient.auth.login.post({
        email: formData.email,
        password: formData.password,
      });

      if (res.error) {
        setErrorStatus(res.error.status);

        if (res.error.status === 422) {
          setValidationError(res.error.value.message || "Validation error");
          setErrorStatus(422);
        }
        return;
      }

      window.location.reload();

      onClose?.();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-vertical-md flex flex-col">
      {errorStatus === 422 && <ErrorMessage message={validationError || ""} />}
      {errorStatus === 401 && (
        <ErrorMessage message="Invalid email or password." />
      )}
      {errorStatus === 500 && (
        <ErrorMessage message="Server error. Please try again later." />
      )}
      <Input
        id="login-email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="you@example.com"
        required
        icon={<Mail size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="login-password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Your password"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <LoginExtras
        remember={formData.remember}
        setRemember={(remember) => setFormData({ ...formData, remember })}
      />

      <Button size="sm" type="submit" variant="primary">
        Sign in
      </Button>

      <AuthFooter
        prompt="Don't have an account?"
        actionLabel="Sign up"
        onSwitchAction={onSwitch}
      />
    </form>
  );
};

export default LoginForm;
