"use client";
import { useState } from "react";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AuthModalProps } from "@/types/ui";

type AuthMode = "login" | "register";

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  if (!open) return null;

  const isLogin = mode === "login";
  const title = isLogin ? "Welcome Back" : "Create account";

  const switchToRegister = () => setMode("register");
  const switchToLogin = () => setMode("login");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="backdrop" onClick={onClose} aria-hidden="true" />
      <div className="glass-medium gap-vertical-lg modal-width flex flex-col rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h2 className="text-primary text-3xl font-bold">{title}</h2>

          <button
            aria-label="Close auth dialog"
            className="text-primary/70 cursor-pointer transition-colors"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          <LoginForm onSwitch={switchToRegister} onClose={onClose} />
        ) : (
          <RegisterForm onSwitch={switchToLogin} onClose={onClose} />
        )}
      </div>
    </div>
  );
}
