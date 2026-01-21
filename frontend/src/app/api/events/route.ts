import { NextResponse } from "next/server";
import pool from "@/config/db";

export async function GET() {
  const result = await pool.query("SELECT * FROM events ORDER BY date ASC");
  return NextResponse.json(result.rows);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description, date, venue, price, capacity } = body;

  const result = await pool.query(
    `INSERT INTO events (title, description, date, venue, price, capacity)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *`,
    [title, description, date, venue, price, capacity]
  );

  return NextResponse.json(result.rows[0], { status: 201 });
}
