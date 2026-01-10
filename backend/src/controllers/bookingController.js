import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} from "../models/BookingModel.js";

// Create a new booking
export const createNewBooking = async (req, res, next) => {
  try {
    const { event_id, tickets_booked } = req.body;
    const user_id = req.user.id;
    const booking = await createBooking(user_id, event_id, tickets_booked);
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

// Get all bookings for the logged-in user
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await getUserBookings(req.user.id);
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};

// Get a single booking by ID
export const getBooking = async (req, res, next) => {
  try {
    const booking = await getBookingById(req.params.id, req.user.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

// Update a booking by ID
export const updateBooking = async (req, res, next) => {
  try {
    const { tickets_booked } = req.body;
    const updated = await updateBookingById(req.params.id, req.user.id, tickets_booked);
    if (!updated) {
      return res.status(404).json({ message: "Booking not found or not authorized" });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a booking by ID
export const deleteBooking = async (req, res, next) => {
  try {
    const deleted = await deleteBookingById(req.params.id, req.user.id);
    if (!deleted) {
      return res.status(404).json({ message: "Booking not found or not authorized" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    next(err);
  }
};
