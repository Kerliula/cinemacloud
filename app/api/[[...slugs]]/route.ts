import { Elysia } from "elysia";
import { authRoute } from "@/elysia/routes/auth";

const app = new Elysia({ prefix: "/api" }).use(authRoute);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
