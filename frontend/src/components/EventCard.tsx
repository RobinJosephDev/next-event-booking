"use client";
import Link from "next/link";
import { Event } from "../types";
import { formatDate } from "../utils/formatDate";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{formatDate(event.date)}</p>
      <p className="text-sm text-gray-600 mb-4">{event.venue}</p>

      <div className="flex justify-between gap-2">
        <Link
          href={`/events/${event.id}`}
          className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium"
        >
          View Details
        </Link>

        <Link
          href={`/events/${event.id}/book`}
          className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
