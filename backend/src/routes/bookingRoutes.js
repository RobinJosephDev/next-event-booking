import express from "express";
import {
  createNewBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNewBooking);
router.get("/", protect, getBookings);
router.get("/:id", protect, getBooking);
router.put("/:id", protect, updateBooking);
router.delete("/:id", protect, deleteBooking);

export default router;
