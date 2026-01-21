export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
  price: number;
  capacity: number;
}

export interface Booking {
  id: number;
  user_id: number;
  event_id: number;
  tickets_booked: number;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
  token: string;
}
