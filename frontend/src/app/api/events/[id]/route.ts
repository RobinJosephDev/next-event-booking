import { NextResponse } from "next/server";
import pool from "@/config/db";

export async function GET(req: Request, context: { params: { id: string } }) {
  const id = context.params.id; // no await needed

  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching event:", err);
    return NextResponse.json(
      { message: "Failed to fetch event" },
      { status: 500 },
    );
  }
}
