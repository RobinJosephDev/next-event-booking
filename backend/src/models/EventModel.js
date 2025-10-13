import pool from "../config/db.js";

export const getAllEvents = async () => {
  const result = await pool.query("SELECT * FROM events ORDER BY date ASC");
  return result.rows;
};

export const createEvent = async ({ title, description, date, venue, price, capacity }) => {
  const result = await pool.query(
    "INSERT INTO events (title, description, date, venue, price, capacity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [title, description, date, venue, price, capacity]
  );
  return result.rows[0];
};
