"use client";

import Image from "next/image";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MultiImageUploadProps } from "@/types/ui";
import { useMultiImageUpload } from "@/hooks/useMultiImageUpload";

const MultiImageUpload = ({
  label,
  value = [],
  onChange,
  maxFiles = 15,
  className = "",
  accept = "image/*",
}: MultiImageUploadProps) => {
  const {
    inputRef,
    previews,
    handleFileChange,
    removeFile,
    openFileDialog,
    isMaxReached,
  } = useMultiImageUpload({ value, onChange, maxFiles });

  return (
    <div className={cn("gap-vertical-lg flex flex-col", className)}>
      {label && (
        <label className="text-secondary text-sm font-medium uppercase">
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      <UploadButton
        openFileDialog={openFileDialog}
        isMaxReached={isMaxReached}
        maxFiles={maxFiles}
        value={value}
      />

      {previews.length > 0 && (
        <ImagesPreview previews={previews} removeFile={removeFile} />
      )}
    </div>
  );
};

const UploadButton = ({
  openFileDialog,
  isMaxReached,
  maxFiles,
  value,
}: {
  openFileDialog: () => void;
  isMaxReached: boolean;
  maxFiles: number;
  value: File[];
}) => {
  return (
    <button
      type="button"
      onClick={openFileDialog}
      disabled={isMaxReached}
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg border border-dashed px-6 py-8 transition-colors",
        isMaxReached
          ? "cursor-not-allowed border-white/5 bg-white/5 text-white/30"
          : "border-white/20 bg-white/5 text-white/60 hover:border-purple-400 hover:bg-white/10 hover:text-purple-400"
      )}
    >
      <Upload size={20} />
      <span className="text-sm">
        {isMaxReached
          ? `Maximum ${maxFiles} images reached`
          : `Click to upload scene images (${value.length}/${maxFiles})`}
      </span>
    </button>
  );
};

const ImagesPreview = ({
  previews,
  removeFile,
}: {
  previews: string[];
  removeFile: (index: number) => void;
}) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {previews.map((preview, index) => (
        <div
          key={index}
          className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/50"
        >
          <Image src={preview} alt="" fill className="object-cover" />

          <button
            type="button"
            onClick={() => removeFile(index)}
            className={cn(
              "absolute top-2 right-2 rounded-full bg-red-500/80 p-1.5 opacity-0",
              "transition-opacity group-hover:opacity-100 hover:bg-red-500"
            )}
          >
            <X size={14} className="text-white" />
          </button>

          <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white/80">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiImageUpload;
