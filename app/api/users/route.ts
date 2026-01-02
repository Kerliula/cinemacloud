import { pool } from "@/lib/db";

export async function GET() {
  const [rows] = await pool.query("SELECT * FROM users");
  return Response.json(rows);
}
