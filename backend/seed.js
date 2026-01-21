import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // MUST be first

import pool from "./src/config/db.js";

const seedDatabase = async () => {
  try {
    console.log("✅ Database connected successfully");

    // --- Create users table ---
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role VARCHAR(20) DEFAULT 'user'
      );
    `);

    // --- Create events table ---
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date DATE NOT NULL,
        venue VARCHAR(255),
        price NUMERIC(10, 2),
        capacity INTEGER
      );
    `);

    // --- Create bookings table ---
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
        tickets_booked INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Tables created");

    // --- Insert users ---
    const { rows: userRows } = await pool.query(`
      INSERT INTO users (name, email, password_hash, role)
      VALUES
        ('Robin Joseph', 'robinjo1776@gmail.com', 'LIbras11!', 'admin'),
        ('Alice Smith', 'alice@example.com', 'password123', 'user'),
        ('Bob Johnson', 'bob@example.com', 'password123', 'user')
      ON CONFLICT (email) DO NOTHING
      RETURNING *;
    `);

    // Map emails to IDs safely
    const getUserId = (email) => {
      const user = userRows.find(u => u.email === email);
      if (user) return user.id;
      // fallback if user already existed
      return pool.query("SELECT id FROM users WHERE email=$1", [email]).then(res => res.rows[0].id);
    };

    const robinId = await getUserId('robinjo1776@gmail.com');
    const aliceId = await getUserId('alice@example.com');
    const bobId = await getUserId('bob@example.com');

    // --- Insert events ---
    const { rows: eventRows } = await pool.query(`
      INSERT INTO events (title, description, date, venue, price, capacity)
      VALUES
        ('Rock Concert', 'Live rock music night', '2026-02-20', 'Madison Square Garden', 50.00, 500),
        ('Tech Conference', 'Learn about the latest in tech', '2026-03-05', 'Silicon Valley Convention Center', 100.00, 300),
        ('Art Exhibition', 'Modern art gallery', '2026-04-10', 'City Art Museum', 20.00, 200)
      ON CONFLICT DO NOTHING
      RETURNING *;
    `);

    // Map event titles to IDs
    const getEventId = (title) => {
      const event = eventRows.find(e => e.title === title);
      if (event) return event.id;
      return pool.query("SELECT id FROM events WHERE title=$1", [title]).then(res => res.rows[0].id);
    };

    const rockConcertId = await getEventId('Rock Concert');
    const techConfId = await getEventId('Tech Conference');
    const artExhibitId = await getEventId('Art Exhibition');

    // --- Insert bookings ---
    await pool.query(`
      INSERT INTO bookings (user_id, event_id, tickets_booked)
      VALUES
        ($1, $2, 2),
        ($3, $4, 1),
        ($5, $6, 3)
      ON CONFLICT DO NOTHING;
    `, [robinId, rockConcertId, aliceId, techConfId, bobId, artExhibitId]);

    console.log("✅ Sample data inserted");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
