"use client";

import { useState, useEffect } from "react";
import BookingCard from "../../components/BookingCard";

interface Booking {
  id: number;
  title: string;
  date: string;
  tickets_booked: number;
  status?: string; // optional
}

const DashboardPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const userStr = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (!userStr || !token) {
        console.error("No user/token found in localStorage");
        setLoading(false);
        return;
      }

      const user = JSON.parse(userStr);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings?userId=${user.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
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
              eventTitle={b.title}
              eventDate={new Date(b.date).toLocaleDateString()}
              ticketsBooked={b.tickets_booked}
              status={b.status || "Pending"} // fallback if missing
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
