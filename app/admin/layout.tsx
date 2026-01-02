import RedBackground from "@/components/layout/RedBackground";
import LeftNavbar from "@/components/admin/LeftNavbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <LeftNavbar />
      <div className="layout-admin-base flex-1 justify-start">
        <RedBackground />
        <div className="gap-vertical-md gap-horizontal-lg flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
