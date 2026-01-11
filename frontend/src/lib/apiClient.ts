import { Event, LoginResponse, RegisterResponse, Booking } from "../types";

const API_URL = "/api";

// Helper for auth headers
const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// ✅ Fetch all events (upcoming only)
export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${API_URL}/events`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch events");

  const data: Event[] = await res.json();

  return data
    .filter((event) => new Date(event.date) >= new Date())
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
};

// ✅ Fetch a single event by ID
export const getEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${API_URL}/events/${id}`, { headers: headers() });
  if (!res.ok) throw new Error("Failed to fetch event");
  return res.json();
};

// ✅ Login
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

// ✅ Register
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
};

// ✅ Get bookings for a user
export const getUserBookings = async (
  userId: number
): Promise<Booking[]> => {
  const res = await fetch(`${API_URL}/bookings?userId=${userId}`, {
    headers: headers(),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch bookings");
  return res.json();
};

// ✅ Create a booking
export const createBooking = async (
  eventId: number,
  tickets: number
): Promise<Booking> => {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ eventId, tickets }),
  });

  if (!res.ok) throw new Error("Failed to book event");
  return res.json();
};
