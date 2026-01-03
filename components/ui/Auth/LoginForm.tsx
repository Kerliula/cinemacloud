"use client";

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui";
import { Input, Checkbox } from "@/components/form";
import AuthFooter from "@/components/ui/Auth/AuthFooter";
import { LoginFormProps } from "@/types/ui";
import { INPUT_ICON_SIZE } from "@/lib/constants";
import { apiClient } from "@/elysia/lib/apiClient";

const LoginExtras = ({
  remember,
  setRemember,
}: {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await apiClient.auth.login.post({
        email,
        password,
      });

      // Check if the response indicates success
      if (res.error) {
        console.log("Login error response:", res);
        alert(res.error || "Login failed");
        return;
      }

      alert("Logged in successfully!");
      console.log("Login response:", res);
      onClose?.();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-vertical-md flex flex-col">
      <Input
        id="login-email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        icon={<Mail size={INPUT_ICON_SIZE} />}
      />

      <Input
        id="login-password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your password"
        required
        icon={<Lock size={INPUT_ICON_SIZE} />}
      />

      <LoginExtras remember={remember} setRemember={setRemember} />

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
