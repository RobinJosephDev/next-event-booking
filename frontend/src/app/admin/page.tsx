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

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:5000/api/events");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async (data: EventFormData) => {
    await fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchEvents();
  };

  return (
    <>
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
    </>
  );
};

export default AdminPage;
