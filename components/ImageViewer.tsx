import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

const ImageViewer = ({ src, onClose }: ImageViewerProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-full max-w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={cn(
            "absolute -top-10 right-0",
            "rounded-full bg-black/50 p-2",
            "text-white hover:bg-black/70",
            "focus:ring-2 focus:ring-white focus:outline-none"
          )}
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>

        <Image
          src={src}
          alt="Scene preview"
          width={800}
          height={600}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ImageViewer;
