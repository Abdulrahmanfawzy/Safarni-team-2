import type { CarData } from "../types";

type Props = {
  car: CarData;
};

export default function BookingCarCard({ car }: Props) {
  return (
    <div className="w-full rounded-xl gradient-border-single bg-white p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
      <div className="flex-1">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          {car.name}
        </h2>

        <div className="mt-2 flex flex-wrap sm:flex-nowrap justify-start sm:justify-between items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
          <span>{car.transmission}</span>
          <span className="hidden sm:block h-4 w-px bg-gray-300" />
          <span>{car.seats} seats</span>
          <span className="hidden sm:block h-4 w-px bg-gray-300" />
          <span>{car.fuel}</span>
        </div>
      </div>

      {/* Car image */}
      <div className="relative sm:-top-25 sm:-right-20 mt-4 sm:mt-0">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="h-32 sm:h-40 object-contain mx-auto"
        />
      </div>
    </div>
  );
}
