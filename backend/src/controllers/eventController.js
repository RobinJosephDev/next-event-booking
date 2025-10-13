import pool from "../config/db.js";

// GET all events
export const getEvents = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, description, date, venue, price, capacity FROM events ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while fetching events" });
  }
};

// GET single event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT id, title, description, date, venue, price, capacity FROM events WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// POST new event (protected)
export const addEvent = async (req, res) => {
  const { title, description, date, venue, price, capacity } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO events (title, description, date, venue, price, capacity)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [title, description, date, venue, price, capacity || 50]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while adding event" });
  }
};

// PUT update event (protected)
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, venue, price, capacity } = req.body;

  try {
    const result = await pool.query(
      `UPDATE events SET title=$1, description=$2, date=$3, venue=$4, price=$5, capacity=$6
       WHERE id=$7 RETURNING *`,
      [title, description, date, venue, price, capacity, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while updating event" });
  }
};

// DELETE event (protected)
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM events WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: `Deleted event with ID ${id}` });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while deleting event" });
  }
};
