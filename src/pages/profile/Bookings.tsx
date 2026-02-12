import { Bed, Car, Plane, Ship } from "lucide-react";
import BookingLabels from "./_components/BookingLabel";
import BackButton from "../../components/ui/BackButton";
import BookingFlightCard from "./_components/BookingFlightCard";
import { flight } from "./_mock/MockFlightData";
import type { BookingType } from "./types";
import { useState } from "react";
import BookingCarCard from "./_components/BookingCarCard";
import { car } from "./_mock/MockCarData";

function Bookings() {
  const [activeTab, setIsActiveTab] = useState<BookingType>("flight");
  return (
    <div className="w-full mt-16 sm:mt-20 flex flex-col items-center mx-auto px-4 sm:px-4 pb-8">
      <BackButton />
      <div className="w-full max-w-7xl">
        <h1 className="text-center font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
          My Booking
        </h1>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 p-2 sm:p-4">
          <BookingLabels
            type="flight"
            active={activeTab}
            onSelect={setIsActiveTab}
          >
            <Plane />
            Flight
          </BookingLabels>
          <BookingLabels
            type="cars"
            active={activeTab}
            onSelect={setIsActiveTab}
          >
            <Car />
            Cars
          </BookingLabels>
          <BookingLabels
            type="tours"
            active={activeTab}
            onSelect={setIsActiveTab}
          >
            <Ship />
            Tours
          </BookingLabels>
          <BookingLabels
            type="hotel"
            active={activeTab}
            onSelect={setIsActiveTab}
          >
            <Bed />
            Hotel
          </BookingLabels>
        </div>
        <div className="w-full flex justify-center px-2 sm:px-4">
          {activeTab === "flight" && <BookingFlightCard flight={flight} />}
          {activeTab === "cars" && <BookingCarCard car={car} />}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
