"use client";

import {
  Input,
  Textarea,
  Select,
  MultiSelect,
  MultiImageUpload,
} from "@/components/form";
import { useState } from "react";
import { MOVIE_GENRES } from "@/lib/adminConstants";
import Button from "@/components/admin/Button";

const UPLOAD_TYPES = [
  { value: "", label: "" },
  { value: "embedlink", label: "Embed Link" },
  { value: "uploadtoserver", label: "Upload to Server" },
];

const AdminMoviePage = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [uploadType, setUploadType] = useState("");
  const [embedLink, setEmbedLink] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sceneImages, setSceneImages] = useState<File[]>([]);

  return (
    <>
      <h1 className="section-admin-intro-text">Edit Movie</h1>
      <Input
        label="Title"
        type="text"
        placeholder="Enter the movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <Input
        label="Duration (minutes)"
        type="number"
        placeholder="Enter the duration in minutes..."
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <Textarea
        label="Description"
        placeholder="Enter the movie description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <MultiSelect
        label="Genres"
        options={MOVIE_GENRES}
        value={selectedGenres}
        onChange={setSelectedGenres}
        placeholder="Select genres..."
      />
      <Select
        label="Movie Upload Type"
        options={UPLOAD_TYPES}
        value={uploadType}
        onChange={(e) => setUploadType(e.target.value)}
      />
      {uploadType === "embedlink" && (
        <Input
          label="Embed Link"
          type="text"
          placeholder="Enter the embed link..."
          value={embedLink}
          onChange={(e) => setEmbedLink(e.target.value)}
        />
      )}
      {uploadType === "uploadtoserver" && (
        <Input label="Upload File" type="file" />
      )}
      <MultiImageUpload
        label="Scene Images"
        value={sceneImages}
        onChange={setSceneImages}
        maxFiles={15}
      />
      <div className="gap-horizontal-md gap-vertical-md flex flex-col lg:flex-row">
        <Button className="w-full" variant="secondary" onClick={() => {}}>
          Discard
        </Button>
        <Button className="w-full" onClick={() => {}}>
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default AdminMoviePage;
