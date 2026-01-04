import { Elysia } from "elysia";
import { movieSchema } from "../schemas/admin.schema";
import { pool } from "../lib/db";
import { ResultSetHeader } from "mysql2";
import {
  ensureUploadDir,
  getMovieUploadDir,
  saveImage,
  saveImages,
} from "../lib/fileUpload";

export const adminRoute = new Elysia({ prefix: "/admin" }).post(
  "/upload",
  async ({ body, set }) => {
    const {
      title,
      releaseYear,
      description,
      duration,
      uploadType,
      embedLink,
      selectedGenres,
      coverImage,
      sceneImages,
      movieFile,
    } = body;

    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      // Create upload directory if it doesn't exist
      const uploadDir = getMovieUploadDir();
      await ensureUploadDir(uploadDir);

      // Save cover image
      const coverImageResult = await saveImage(coverImage, uploadDir, "cover");

      // Normalize sceneImages to always be an array
      const sceneImagesArray = Array.isArray(sceneImages)
        ? sceneImages
        : sceneImages
          ? [sceneImages]
          : [];

      // Save scene images
      const sceneImageResults = await saveImages(
        sceneImagesArray,
        uploadDir,
        "scene"
      );
      const sceneImagePaths = sceneImageResults.map(
        (result) => result.publicUrl
      );

      // Save to database
      const [insertedMovie] = await connection.query<ResultSetHeader>(
        "INSERT INTO movies (title, cover_image_url, release_year, duration_mins, description, movie_url) VALUES (?, ?, ?, ?, ?, ?)",
        [
          title,
          coverImageResult.publicUrl,
          releaseYear,
          duration,
          description,
          embedLink,
        ]
      );

      await connection.query(
        "INSERT INTO movie_genres (movie_id, genre_id) VALUES ?",
        [
          selectedGenres.map((genreId: string) => [
            insertedMovie.insertId,
            genreId,
          ]),
        ]
      );

      await connection.query(
        "INSERT INTO movie_scenes (movie_id, image_url) VALUES ?",
        [
          sceneImagePaths.map((imagePath) => [
            insertedMovie.insertId,
            imagePath,
          ]),
        ]
      );

      await connection.commit();
      set.status = 201;
      return;
    } catch {
      await connection.rollback();
      set.status = 500;
      return;
    } finally {
      connection.release();
    }
  },
  {
    body: movieSchema,
  }
);
