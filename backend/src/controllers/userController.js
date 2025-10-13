import pool from "../config/db.js";

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, role FROM users ORDER BY id ASC"
    );
    res.json(result.rows); // return actual database rows
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while fetching users" });
  }
};

// GET /api/users/:id
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT id, name, email, role FROM users WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while fetching user" });
  }
};

// PUT /api/users/:id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  try {
    await pool.query(
      "UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4",
      [name, email, role, id]
    );
    res.json({ message: `Updated user with ID ${id}` });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while updating user" });
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json({ message: `Deleted user with ID ${id}` });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error while deleting user" });
  }
};
