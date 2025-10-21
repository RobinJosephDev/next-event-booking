"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import EventForm, { EventFormData } from "@/components/EventForm";
import { Event } from "@/types";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
      const data: Event[] = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle adding a new event
const handleAddEvent = async (data: EventFormData) => {
  const token = localStorage.getItem("token"); // get token
  if (!token) {
    alert("You must be logged in to add events.");
    return;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // include token
      },
      body: JSON.stringify(data),
    });

    const newEvent: Event = await res.json();

    if (res.ok) {
      alert("Event added successfully!");
      setEvents((prev) => [...prev, newEvent]);
      setShowForm(false);
    } else {
      alert(newEvent?.title || "Failed to add event.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Events</h1>

      {/* Toggle Add Event Form */}
      <button
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add Event"}
      </button>

      {showForm && <EventForm onSubmit={handleAddEvent} />}

      {/* Event List */}
      {events.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="block p-4 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform"
            >
              <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
              {event.date && (
                <p className="text-gray-500 text-sm mb-1">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              )}
              {event.venue && (
                <p className="text-gray-600 text-sm">{event.venue}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No events found.</p>
      )}
    </div>
  );
}
