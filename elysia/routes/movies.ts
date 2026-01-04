import { pool } from "@/elysia/lib/db";
import { Elysia } from "elysia";
import { RowDataPacket } from "mysql2";

interface Genre extends RowDataPacket {
  id: number;
  name: string;
}

export const moviesRoute = new Elysia({ prefix: "/movies" })
  .get("get-genres", async ({ set }) => {
    try {
      const [genres] = await pool.query<Genre[]>("SELECT id, name FROM genres");
      set.status = 200;

      return genres;
    } catch {
      set.status = 500;
      return;
    }
  })
  .get("get-movies", async ({ set }) => {
    try {
      const [movies] = await pool.query<RowDataPacket[]>(
        "SELECT id, title, release_year, cover_image_url FROM movies"
      );
      set.status = 200;

      return movies;
    } catch {
      set.status = 500;
      return;
    }
  });
