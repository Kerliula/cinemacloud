import { Elysia } from "elysia";
import { registerSchema } from "@/elysia/schemas/auth.schema";
import { pool } from "@/elysia/lib/db";
import bcrypt from "bcryptjs";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { generateToken, verifyToken } from "@/elysia/lib/jwt";

interface Role extends RowDataPacket {
  id: number;
}

export const authRoute = new Elysia({ prefix: "/auth" })
  .post(
    "/register",
    async ({ body, set }) => {
      const { username, email, password } = body;

      try {
        // Check for existing user
        const [existingUsers] = await pool.query<RowDataPacket[]>(
          "SELECT id FROM users WHERE email = ? OR username = ?",
          [email, username]
        );

        if (existingUsers.length > 0) {
          set.status = 409;
          return;
        }

        // Get default role
        const [roles] = await pool.query<Role[]>(
          "SELECT id FROM roles WHERE name = ?",
          ["user"]
        );

        if (!roles.length) {
          set.status = 500;
          return;
        }

        const roleId = roles[0].id;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const [result] = await pool.query<ResultSetHeader>(
          "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?)",
          [username, email, hashedPassword, roleId]
        );

        const userId = result.insertId;

        // Generate JWT token
        const token = generateToken({
          id: userId,
          username,
          email,
          roleId,
        });

        // Set HTTP-only cookie
        set.headers["Set-Cookie"] =
          `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${7 * 24 * 60 * 60}`; // 7 days in seconds

        set.status = 201;

        return {
          user: {
            id: userId,
            username,
            email,
          },
        };
      } catch (error) {
        if (
          error instanceof Error &&
          "code" in error &&
          (error as { code: string }).code === "ER_DUP_ENTRY"
        ) {
          set.status = 409;
          return;
        }

        set.status = 500;
        return;
      }
    },
    {
      body: registerSchema,
    }
  )
  .get("/me", async ({ headers, set }) => {
    const cookie = headers.cookie;

    if (!cookie) {
      set.status = 401;
      return;
    }

    const tokenMatch = cookie.match(/token=([^;]+)/);
    if (!tokenMatch) {
      set.status = 401;
      return;
    }

    try {
      const user = verifyToken(tokenMatch[1]);
      return { user };
    } catch {
      set.status = 401;
      return;
    }
  });
