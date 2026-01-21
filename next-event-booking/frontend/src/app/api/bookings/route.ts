import { NextResponse } from "next/server";
import pool from "@/config/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "userId is required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      SELECT 
        b.id,
        b.tickets_booked,
        b.status,
        e.title AS event_title,
        e.date AS event_date
      FROM bookings b
      JOIN events e ON b.event_id = e.id
      WHERE b.user_id = $1
      ORDER BY e.date ASC
      `,
      [userId]
    );

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
