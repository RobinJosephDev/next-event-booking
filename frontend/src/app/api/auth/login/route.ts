import { NextResponse } from "next/server";
import pool from "@/config/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const result = await pool.query(
      "SELECT id, name, email, role FROM users WHERE email=$1 AND password_hash=$2",
      [email, password]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      token: "demo-token",
      user: result.rows[0],
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Login error" },
      { status: 500 }
    );
  }
}
