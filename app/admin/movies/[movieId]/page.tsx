"use client";

import {
  Input,
  Textarea,
  Select,
  MultiSelect,
  MultiImageUpload,
} from "@/components/form";
import Button from "@/components/admin/Button";
import useMovieForm from "@/hooks/useMovieForm";
import { apiClient } from "@/elysia/lib/apiClient";
import { useQuery } from "@tanstack/react-query";
import { MultiSelectOption } from "@/types/ui";
import { UPLOAD_TYPES } from "@/lib/adminConstants";
import InfoMessage from "@/components/admin/InfoMessage";
import { useState } from "react";

const AdminMoviePage = () => {
  const { formData, files, updateField, setCoverImage, setFiles, reset } =
    useMovieForm();

  const [messages, setMessages] = useState<
    { type: "success" | "error"; text: string }[]
  >([]);

  const { data: genres = [], isLoading: genresLoading } = useQuery<
    MultiSelectOption[]
  >({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiClient.movies["get-genres"].get();
      if (res.error) throw new Error("Failed to fetch genres");
      return (res.data as { id: string; name: string }[]).map((genre) => ({
        value: genre.id,
        label: genre.name,
      })) as MultiSelectOption[];
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!files.coverImage) {
      setMessages((prev) => [
        ...prev,
        { type: "error", text: "Cover image is required." },
      ]);
      return;
    }

    const res = await apiClient.admin.upload.post({
      coverImage: files.coverImage,
      sceneImages: files.sceneImages,
      title: formData.title,
      releaseYear: formData.releaseYear,
      duration: formData.duration,
      description: formData.description,
      selectedGenres: formData.selectedGenres,
      uploadType: formData.uploadType,
      embedLink: formData.embedLink,
    });

    if (res.error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "error",
          text: res.error.value?.message || "Upload failed. Please try again.",
        },
      ]);

      return;
    }

    setMessages(() => [
      { type: "success", text: "Movie uploaded successfully!" },
    ]);

    reset();
  };

  const uploadTypeConfig = {
    embed: {
      label: "Embed link",
      type: "text",
      placeholder: "Paste embed link…",
      value: formData.embedLink || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        updateField("embedLink", e.target.value),
    },
    upload: {
      label: "Upload file",
      type: "file",
    },
  };

  const uploadInputConfig =
    uploadTypeConfig[formData.uploadType as keyof typeof uploadTypeConfig];

  return (
    <>
      <h1 className="section-admin-intro-text">Edit Movie</h1>
      {messages.map((msg, index) => (
        <InfoMessage key={index} type={msg.type} message={msg.text} />
      ))}
      <form
        onSubmit={handleSubmit}
        className="gap-vertical-md gap-horizontal-lg flex flex-col"
      >
        <Input
          label="Title"
          type="text"
          placeholder="Enter the movie title..."
          value={formData.title || ""}
          onChange={(e) => updateField("title", e.target.value)}
        />
        <Input
          label="Cover Image"
          type="file"
          onChange={(e) =>
            setCoverImage(e.target.files ? e.target.files[0] : null)
          }
        />
        <Input
          label="Release Year"
          type="number"
          placeholder="Enter the release year..."
          value={formData.releaseYear || ""}
          onChange={(e) => updateField("releaseYear", e.target.value)}
        />
        <Input
          label="Duration (minutes)"
          type="number"
          placeholder="Enter the duration in minutes..."
          value={formData.duration || ""}
          onChange={(e) => updateField("duration", e.target.value)}
        />
        <Textarea
          label="Description"
          placeholder="Enter the movie description..."
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
        />
        <MultiSelect
          label="Genres"
          options={genres}
          value={formData.selectedGenres}
          onChange={(value) => updateField("selectedGenres", value)}
          placeholder={genresLoading ? "Loading genres..." : "Select genres..."}
          disabled={genresLoading}
        />
        <Select
          label="Movie Upload Type"
          options={UPLOAD_TYPES}
          value={formData.uploadType}
          onChange={(e) => updateField("uploadType", e.target.value)}
        />
        {uploadInputConfig && (
          <Input key={formData.uploadType} {...uploadInputConfig} />
        )}
        <MultiImageUpload
          label="Scene Images"
          value={files.sceneImages}
          onChange={(newFiles) =>
            setFiles((prev) => ({ ...prev, sceneImages: newFiles }))
          }
          maxFiles={15}
        />
        <div className="gap-horizontal-md gap-vertical-md flex flex-col lg:flex-row">
          <Button className="w-full" variant="secondary" onClick={() => {}}>
            Discard
          </Button>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AdminMoviePage;
