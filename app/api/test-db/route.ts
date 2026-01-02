import { NextResponse } from "next/server";
import { pool, testConnection } from "@/lib/db";

export async function GET() {
  try {
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    // Try a simple query
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    
    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      test: rows,
    });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json(
      {
        error: "Database error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
