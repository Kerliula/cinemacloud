import Image from "next/image";

const ImageBackground = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="fixed inset-0 -z-5">
      <Image src={imageUrl} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
    </div>
  );
};

export default ImageBackground;
