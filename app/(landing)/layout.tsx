import ImageBackground from "@/components/layout/ImageBackground";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ImageBackground imageUrl="/wallpaper.jpg" />
      {children}
    </>
  );
};

export default LandingLayout;
