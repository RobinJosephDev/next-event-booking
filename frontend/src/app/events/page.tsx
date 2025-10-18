"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:5000/api/events");
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <>

      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">All Events</h1>
        <ul className="space-y-2">
          {events.length ? (
            events.map((event) => (
              <li key={event.id}>
                <Link
                  href={`/events/${event.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {event.title}
                </Link>
              </li>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </ul>
      </div>
    </>
  );
}
