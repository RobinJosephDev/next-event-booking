import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // MUST be first

import pool from "./src/config/db.js";

const seedDatabase = async () => {
  try {
    console.log("DB_USER =", process.env.DB_USER);
    console.log("DB_PASSWORD type =", typeof process.env.DB_PASSWORD);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role VARCHAR(20) DEFAULT 'user'
      );
    `);

    console.log("✅ Tables created");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
