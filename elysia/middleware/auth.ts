import { Elysia } from "elysia";
import { verifyToken } from "@/elysia/lib/jwt";

export const authMiddleware = (app: Elysia) =>
  app.derive(async ({ headers, set }) => {
    const authorization = headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      set.status = 401;
      throw new Error("Unauthorized");
    }

    const token = authorization.substring(7);

    try {
      const user = verifyToken(token);

      return { user };
    } catch (error) {
      set.status = 401;
      throw new Error("Invalid token: " + (error as Error).message);
    }
  });
