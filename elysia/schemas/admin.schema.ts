import { z } from "zod";

export const movieSchema = z.object({
  title: z.string().min(1, "Title is required"),
  releaseYear: z.string().min(1, "Release year is required"),
  description: z.string().min(1, "Description is required"),
  duration: z.string().min(1, "Duration is required"),
  uploadType: z.string().min(1, "Upload type is required"),
  embedLink: z.string().min(1, "Embed link is required"),
  selectedGenres: z
    .union([z.string(), z.array(z.string())])
    .transform((val) => (Array.isArray(val) ? val : [val]))
    .refine((arr) => arr.length > 0, "At least one genre must be selected"),
  coverImage: z.instanceof(File, { message: "Cover image is required" }), // Single file
  sceneImages: z
    .union([z.instanceof(File), z.array(z.instanceof(File))])
    .optional(), // Single or multiple files
  movieFile: z.instanceof(File).optional(), // Optional movie file
});

export type MovieInput = z.infer<typeof movieSchema>;
