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
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      // 1️⃣ Get user info from localStorage
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        console.error("No user found in localStorage");
        setLoading(false);
        return;
      }
      const user = JSON.parse(userStr);

      // 2️⃣ Call API with userId
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings?userId=${user.id}`
      );

      if (!res.ok) {
        console.error("Failed to fetch bookings", res.status);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setBookings(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((b) => (
            <BookingCard
              key={b.id}
              eventTitle={b.event_title}
              eventDate={new Date(b.event_date).toLocaleDateString()}
              ticketsBooked={b.tickets_booked}
              status={b.status}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
