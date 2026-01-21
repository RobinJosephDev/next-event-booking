import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function run() {
  const users = await pool.query("SELECT id, password_hash FROM users");

  for (const user of users.rows) {
    const hashed = await bcrypt.hash(user.password_hash, 10);

    await pool.query(
      "UPDATE users SET password_hash = $1 WHERE id = $2",
      [hashed, user.id]
    );
  }

  console.log("Passwords hashed successfully!");
  process.exit(0);
}

run();
