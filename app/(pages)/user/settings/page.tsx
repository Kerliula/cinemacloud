"use client";

import { Button } from "@/components/ui/";
import { Input } from "@/components/form";
import { useState } from "react";

const SettingsPage = () => {
  const [username, setUsername] = useState("Joe_Doe");
  const [email, setEmail] = useState("joedoe@email.com");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmed) {
      // TODO: Implement account deletion logic
      console.log("Account deletion confirmed");
    }
  };

  return (
    <>
      <h1 className="section-intro-text">Settings</h1>
      <Input
        label="Username"
        type="text"
        placeholder="Enter your username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Email address"
        type="text"
        placeholder="Enter your email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your new password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Repeat Password"
        type="password"
        placeholder="Repeat your new password..."
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button className="w-full" size="sm">
        Save Changes
      </Button>
      <button
        onClick={handleDeleteAccount}
        className="cursor-pointer text-sm text-red-400 transition-colors hover:text-red-500"
      >
        Delete Account
      </button>
    </>
  );
};

export default SettingsPage;
