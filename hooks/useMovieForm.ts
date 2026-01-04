import { useState } from "react";
import { UPLOAD_TYPES } from "@/lib/adminConstants";

function useMovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    description: "",
    duration: "",
    uploadType: UPLOAD_TYPES[0].value,
    embedLink: "",
    selectedGenres: [] as string[],
  });

  const [files, setFiles] = useState<{
    coverImage: File | null;
    sceneImages: File[];
  }>({
    coverImage: null,
    sceneImages: [],
  });

  const updateField = <K extends keyof typeof formData>(
    field: K,
    value: (typeof formData)[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const setCoverImage = (file: File | null) => {
    setFiles((prev) => ({ ...prev, coverImage: file }));
  };

  const addSceneImage = (image: File) => {
    setFiles((prev) => ({
      ...prev,
      sceneImages: [...prev.sceneImages, image],
    }));
  };

  const removeSceneImage = (index: number) => {
    setFiles((prev) => ({
      ...prev,
      sceneImages: prev.sceneImages.filter((_, i) => i !== index),
    }));
  };

  const reset = () => {
    setFormData({
      title: "",
      releaseYear: "",
      description: "",
      duration: "",
      uploadType: "embed",
      embedLink: "",
      selectedGenres: [],
    });
    setFiles({ coverImage: null, sceneImages: [] });
  };

  return {
    formData,
    files,
    updateField,
    setCoverImage,
    setFiles,
    addSceneImage,
    removeSceneImage,
    reset,
  };
}

export default useMovieForm;
