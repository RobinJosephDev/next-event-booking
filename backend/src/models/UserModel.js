import pool from "../config/db.js";

export const createUser = async (name, email, passwordHash, role = "user") => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
    [name, email, passwordHash, role]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
