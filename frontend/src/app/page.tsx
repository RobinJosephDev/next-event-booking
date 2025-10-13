import EventCard from "../components/EventCard";
import { getAllEvents } from "../lib/apiClient";
import { Event } from "../types";

export default async function HomePage() {
  const events: Event[] = await getAllEvents();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
