import { NextResponse } from "next/server";
import sql from "../lib/db";

export async function GET() {
  try {
    const result = await sql`SELECT NOW()`;
    return NextResponse.json({ success: true, time: result[0].now });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
