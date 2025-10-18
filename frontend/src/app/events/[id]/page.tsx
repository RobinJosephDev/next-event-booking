"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    const res = await fetch(`http://localhost:5000/api/events/${id}`);
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <>
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <p className="mb-2">{event.description}</p>
        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        <p>Venue: {event.venue}</p>
        <p>Price: ${event.price}</p>
        <p>Capacity: {event.capacity}</p>
      </div>
    </>
  );
};

export default EventDetailPage;
