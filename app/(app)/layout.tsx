import DarkBackground from "@/components/layout/DarkBackground";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DarkBackground />
      {children}
    </>
  );
};

export default AppLayout;
