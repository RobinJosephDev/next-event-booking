import { Event, LoginResponse, RegisterResponse, Booking } from "../types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000/api";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${API_URL}/events`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch events");

  const data: Event[] = await res.json();

  // Filter upcoming events (today or later)
  const upcoming = data.filter((event) => new Date(event.date) >= new Date());

  // Sort by descending date (newest first)
  return upcoming.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${API_URL}/events/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch event");
  return res.json();
};

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
};

export const createBooking = async (
  eventId: number,
  tickets: number
): Promise<Booking> => {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ eventId, tickets }),
  });
  if (!res.ok) throw new Error("Booking failed");
  return res.json();
};
