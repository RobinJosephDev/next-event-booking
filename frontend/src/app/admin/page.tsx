"use client";

import EventForm, { EventFormData } from "../../components/EventForm";
import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: number;
  capacity: number;
}

const AdminPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [token, setToken] = useState<string | null>(null);

  // Load token from localStorage (client-side only)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken || null);
  }, []);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add new event with auth token
  const handleAddEvent = async (data: EventFormData) => {
    if (!token) {
      alert("You must be logged in to add events.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // send token for auth
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Event added successfully!");
        fetchEvents();
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Failed to add event.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  if (!token) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-red-600">You must be logged in to access this page.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <h2 className="text-xl font-semibold mb-2">Add New Event</h2>
      <EventForm onSubmit={handleAddEvent} />

      <h2 className="text-xl font-semibold mt-8 mb-2">All Events</h2>
      <div className="space-y-2">
        {events.map((event) => (
          <div key={event.id} className="border p-2 rounded">
            {event.title} - {event.date} - {event.venue} - ${event.price} -
            Capacity: {event.capacity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
