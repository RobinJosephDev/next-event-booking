import pkg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

client.connect()
  .then(() => console.log("✅ Connected to database"))
  .catch(err => console.error("❌ Connection error:", err))
  .finally(() => client.end());
