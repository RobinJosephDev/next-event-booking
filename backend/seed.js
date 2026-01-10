// seed.js
import pool from "./src/config/db.js";
import bcrypt from "bcrypt";

const seedDatabase = async () => {
  try {
    // 1️⃣ Create tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date TIMESTAMP NOT NULL,
        venue VARCHAR(255),
        price NUMERIC(10,2),
        capacity INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        event_id INT REFERENCES events(id) ON DELETE CASCADE,
        tickets_booked INT NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Tables created successfully");

    // 2️⃣ Create a test user
    const passwordHash = await bcrypt.hash("password123", 10);
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO NOTHING
       RETURNING id, name, email`,
      ["Test User", "test@example.com", passwordHash, "user"]
    );

    if (result.rows.length > 0) {
      console.log("✅ Test user created:", result.rows[0]);
    } else {
      console.log("ℹ️ Test user already exists");
    }

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err.stack);
    process.exit(1);
  }
};

seedDatabase();
