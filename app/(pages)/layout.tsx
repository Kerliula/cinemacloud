import DarkBackground from "@/components/layout/DarkBackground";
import Navbar from "@/components/ui/Navbar/Navbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-base justify-start">
      <DarkBackground />
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
