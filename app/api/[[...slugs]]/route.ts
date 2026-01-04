import { Elysia } from "elysia";
import { authRoute } from "@/elysia/routes/auth";
import { adminRoute } from "@/elysia/routes/admin";
import { moviesRoute } from "@/elysia/routes/movies";

const app = new Elysia({ prefix: "/api" })
  .use(authRoute)
  .use(adminRoute)
  .use(moviesRoute);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
