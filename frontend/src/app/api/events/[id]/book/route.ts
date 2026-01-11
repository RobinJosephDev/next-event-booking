import { NextResponse } from "next/server";
import pool from "@/config/db";
import jwt from "jsonwebtoken";

export async function POST(req: Request, context: { params: any }) {
  try {
    // 1️⃣ Unwrap params properly
    const params = await context.params;
    const eventId = params.id;
    if (!eventId) {
      return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
    }

    // 2️⃣ Check Authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return NextResponse.json({ message: "Unauthorized: Token missing" }, { status: 401 });
    }

    // 3️⃣ Verify JWT safely
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const userId = decoded.id;
    if (!userId) {
      return NextResponse.json({ message: "Invalid token payload" }, { status: 401 });
    }

    // 4️⃣ Parse request body
    const body = await req.json();
    const tickets_booked = body.tickets_booked;

    if (!tickets_booked || tickets_booked <= 0) {
      return NextResponse.json({ message: "Invalid ticket number" }, { status: 400 });
    }

    // 5️⃣ Insert booking into DB
    const result = await pool.query(
      "INSERT INTO bookings (event_id, user_id, tickets_booked) VALUES ($1, $2, $3) RETURNING *",
      [eventId, userId, tickets_booked]
    );

    return NextResponse.json(result.rows[0], { status: 201 });

  } catch (err) {
    console.error("Error creating booking:", err);
    return NextResponse.json({ message: "Booking failed" }, { status: 500 });
  }
}
