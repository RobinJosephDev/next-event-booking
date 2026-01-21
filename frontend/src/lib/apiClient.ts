import { Event, LoginResponse, RegisterResponse, Booking } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Helper for auth headers
const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Fetch all events (upcoming only)
export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${API_URL}/api/events`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch events");

  const data: Event[] = await res.json();

  return data
    .filter((event) => new Date(event.date) >= new Date())
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
};

// Fetch a single event by ID
export const getEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${API_URL}/api/events/${id}`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error("Failed to fetch event");
  return res.json();
};

// Login
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Login failed");
  }

  return res.json();
};

// Register
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Registration failed");
  }

  return res.json();
};

// Get bookings for a user
export const getUserBookings = async (
  userId: number
): Promise<Booking[]> => {
  const res = await fetch(`${API_URL}/api/bookings?userId=${userId}`, {
    headers: headers(),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch bookings");
  return res.json();
};

// Create a booking
export const createBooking = async (
  eventId: number,
  tickets: number
): Promise<Booking> => {
  const res = await fetch(`${API_URL}/api/bookings`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ eventId, tickets }),
  });

  if (!res.ok) throw new Error("Failed to book event");
  return res.json();
};
