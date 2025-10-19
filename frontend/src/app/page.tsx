"use client";

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { getAllEvents } from "../lib/apiClient";
import { Event } from "../types";

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading events...</p>;

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
