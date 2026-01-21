// backend/src/routes/userRoutes.js
import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users
 */
router.get("/", getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Get a single user by ID
 */
router.get("/:id", getUserById);

/**
 * @route   PUT /api/users/:id
 * @desc    Update user details
 */
router.put("/:id", updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user
 */
router.delete("/:id", deleteUser);

export default router;
