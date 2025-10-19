"use client";

import { useState, useEffect } from "react";
import BookingCard from "../../components/BookingCard";

interface Booking {
  id: number;
  event_title: string;
  event_date: string;
  tickets_booked: number;
  status: string;
}

const DashboardPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
        {bookings.length ? (
          bookings.map((b) => (
            <BookingCard
              key={b.id}
              eventTitle={b.event_title}
              eventDate={b.event_date}
              ticketsBooked={b.tickets_booked}
              status={b.status}
            />
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
