import { Bed, Car, Plane, Ship } from "lucide-react";
import BookingLabels from "./_components/BookingLabel";
import BackButton from "../../components/ui/BackButton";

function Bookings() {
  return (
    <div className="max-w-7xl mt-20 flex flex-col items-center mx-auto p-4">
      <BackButton />
      <div>
        <h1 className="text-center font-bold text-xl">My Booking</h1>
        <div className="flex gap-8 p-4">
          <BookingLabels>
            <Plane />
            Flight
          </BookingLabels>
          <BookingLabels>
            <Car />
            Cars
          </BookingLabels>
          <BookingLabels>
            <Ship />
            Tours
          </BookingLabels>
          <BookingLabels>
            <Bed />
            Hotel
          </BookingLabels>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
