"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">All Events</h1>

        {events.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </>
  );
}
