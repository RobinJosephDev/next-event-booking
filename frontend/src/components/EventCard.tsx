"use client";
import Link from "next/link";
import { Event } from "../types";
import { formatDate } from "../utils/formatDate";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{formatDate(event.date)}</p>
      <p className="text-sm text-gray-600 mb-4">{event.venue}</p>
      <div className="flex justify-between">
        <Link href={`/events/${event.id}`} className="btn-primary text-sm">
          View Details
        </Link>
        <Link
          href={`/events/${event.id}/book`}
          className="btn-secondary text-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
