"use client";

import { Input, Select } from "@/components/form";
import { useState } from "react";
import Button from "@/components/admin/Button";

const ROLES = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
];

const AdminUserPage = () => {
  const [email, setEmail] = useState("eta@gmail.com");
  const [username, setUsername] = useState("eta");
  const [role, setRole] = useState("user");
  return (
    <>
      <h1 className="section-admin-intro-text">Edit User</h1>
      <Input
        label="Email"
        type="text"
        placeholder="Enter the user email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Username"
        type="text"
        placeholder="Enter the username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Select
        label="Role"
        options={ROLES}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <div className="gap-horizontal-md gap-vertical-md flex flex-col lg:flex-row">
        <Button className="w-full" variant="secondary" onClick={() => {}}>
          Discard
        </Button>
        <Button className="w-full" onClick={() => {}}>
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default AdminUserPage;
