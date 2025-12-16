import Image from "next/image";

export default function BackgroundImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Image src={imageUrl} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
    </div>
  );
}
