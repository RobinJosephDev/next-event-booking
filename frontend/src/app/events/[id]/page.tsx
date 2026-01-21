"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
  price: number;
  capacity: number;
}

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  const fetchEvent = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`
    );
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (!event) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md mt-6">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="mb-4 text-gray-700">{event.description}</p>
        <p className="mb-1">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Venue:</span> {event.venue}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Price:</span> ${event.price}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Capacity:</span> {event.capacity}
        </p>

        <Link
          href={`/events/${event.id}/book`}
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium"
        >
          Book Now
        </Link>
      </div>
    </>
  );
};

export default EventDetailPage;
