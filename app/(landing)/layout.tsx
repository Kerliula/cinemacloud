import ImageBackground from "@/components/layout/ImageBackground";
import Navbar from "@/components/ui/Navbar/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-base justify-around">
      <ImageBackground imageUrl="/wallpaper.jpg" />
      <Navbar />
      {children}
    </div>
  );
};

export default LandingLayout;
