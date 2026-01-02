import { useRef, useState } from "react";
import { UseMultiImageUploadProps } from "@/types/ui";

export const useMultiImageUpload = ({
  value,
  onChange,
  maxFiles = 15,
}: UseMultiImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (value.length + files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} images`);
      return;
    }

    const newFiles = [...value, ...files];
    onChange?.(newFiles);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        setPreviews((prev) => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });

    if (inputRef.current) inputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => inputRef.current?.click();

  return {
    inputRef,
    previews,
    handleFileChange,
    removeFile,
    openFileDialog,
    isMaxReached: value.length >= maxFiles,
  };
};
