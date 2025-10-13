import { Event, LoginResponse, RegisterResponse, Booking } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getAllEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${API_URL}/events`, { cache: "no-store" });
  return res.json();
};

export const getEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${API_URL}/events/${id}`, { cache: "no-store" });
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
  return res.json();
};
