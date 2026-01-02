"use client";

import CountBadge from "@/components/ui/CountBadge";
import { Input } from "@/components/form";
import Table from "@/components/ui/Table";
import { Edit2, Trash2 } from "lucide-react";
import { DUMMY_USERS } from "@/lib/adminConstants";
import { User, UsersColumnDef } from "@/types/ui";
import { cn } from "@/lib/utils";
import Pagination from "@/components/admin/Pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminUsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: UsersColumnDef<User>[] = [
    {
      key: "Email",
      header: "Email",
    },
    {
      key: "Role",
      header: "Role",
    },
    {
      key: "Created At",
      header: "Created At",
    },
    {
      key: "actions",
      header: "Actions",
      render: (user) => <UsersActions user={user} />,
      className: "padding-lg",
    },
  ];

  return (
    <>
      <div className="gap-horizontal-md flex flex-row items-center">
        <h1 className="section-admin-intro-text">Users</h1>
        <CountBadge count={5} />
      </div>
      <Input placeholder="Search users by email..." className="w-full" />
      <Table columns={columns} data={DUMMY_USERS} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

const UsersActions = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleDelete = (user: User) => {
    console.log("Delete user:", user);
  };
  return (
    <div className="flex gap-2">
      <button
        onClick={() => router.push(`/admin/users/${user.id}`)}
        className={cn(
          "padding-md rounded text-white/60 transition-colors",
          "hover:bg-green-600/20 hover:text-green-400"
        )}
        title="Edit"
      >
        <Edit2 size={16} />
      </button>
      <button
        onClick={() => handleDelete(user)}
        className={cn(
          "padding-md rounded text-white/60 transition-colors",
          "hover:bg-red-600/20 hover:text-red-400"
        )}
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default AdminUsersPage;
