import { FC } from "react";

interface BookingCardProps {
  eventTitle: string;
  eventDate: string;
  ticketsBooked: number;
}

const BookingCard: FC<BookingCardProps> = ({ eventTitle, eventDate, ticketsBooked}) => {
  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h3 className="text-lg font-bold">{eventTitle}</h3>
      <p>Date: {new Date(eventDate).toLocaleDateString()}</p>
      <p>Tickets: {ticketsBooked}</p>
    </div>
  );
};

export default BookingCard;
