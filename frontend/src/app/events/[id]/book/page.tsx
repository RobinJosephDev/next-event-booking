"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function BookEventPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [tickets, setTickets] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          event_id: id,
          tickets_booked: tickets,
        }),
      });

      if (!res.ok) throw new Error("Booking failed");

      toast.success("Booking successful! 🎉");
      router.push("/");
    } catch (err) {
      toast.error("Failed to book event. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Book Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Number of tickets"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
          min={1}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="btn-primary w-full">
          Book Now
        </button>
      </form>
    </div>
  );
}
