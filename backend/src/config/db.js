import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

console.log(
  "DB_PASSWORD:",
  process.env.DB_PASSWORD,
  typeof process.env.DB_PASSWORD
);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionTimeoutMillis: 5000,
  statement_timeout: 5000,
  ssl: process.env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false,
});


pool
  .connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

export default pool;
