import pool from "../config/db.js";

export const createBooking = async (user_id, event_id, tickets_booked) => {
  const result = await pool.query(
    "INSERT INTO bookings (user_id, event_id, tickets_booked) VALUES ($1, $2, $3) RETURNING *",
    [user_id, event_id, tickets_booked]
  );
  return result.rows[0];
};

export const getUserBookings = async (user_id) => {
  const result = await pool.query(
    "SELECT b.*, e.title, e.date FROM bookings b JOIN events e ON b.event_id = e.id WHERE b.user_id = $1",
    [user_id]
  );
  return result.rows;
};

export const getBookingById = async (bookingId, userId) => {
  const result = await pool.query(
    "SELECT * FROM bookings WHERE id = $1 AND user_id = $2",
    [bookingId, userId]
  );
  return result.rows[0];
};

export const updateBookingById = async (bookingId, userId, tickets) => {
  const result = await pool.query(
    "UPDATE bookings SET tickets_booked = $1 WHERE id = $2 AND user_id = $3 RETURNING *",
    [tickets, bookingId, userId]
  );
  return result.rows[0];
};

export const deleteBookingById = async (bookingId, userId) => {
  const result = await pool.query(
    "DELETE FROM bookings WHERE id = $1 AND user_id = $2 RETURNING *",
    [bookingId, userId]
  );
  return result.rows[0];
};
