import React from "react";
import type { FlightData } from "../types";
import { Plane } from "lucide-react";

type Props = {
  flight: FlightData;
};

function BookingFlightCard({ flight }: Props) {
  return (
    <div className="w-full rounded-xl gradient-border-single bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {flight.airlineLogoUrl && (
            <img
              src={flight.airlineLogoUrl}
              alt={flight.airline}
              className="h-6 w-6 object-contain"
            />
          )}
          <span className="text-sm font-medium text-gray-700">
            {flight.airline}
          </span>
        </div>

        <span className="text-sm text-gray-500">{flight.date}</span>
      </div>

      {/* Main times */}
      <div className="mt-6 flex items-center justify-between">
        {/* Departure */}
        <div>
          <p className="text-2xl font-semibold">{flight.departure.time}</p>
          <p className="text-sm text-gray-500">{flight.departure.code}</p>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-center text-gray-500">
          <Plane className="h-5 w-5" />
          <span className="text-sm">{flight.duration}</span>
        </div>

        {/* Arrival */}
        <div className="text-right">
          <p className="text-2xl font-semibold">{flight.arrival.time}</p>
          <p className="text-sm text-gray-500">{flight.arrival.code}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200" />

      {/* Footer info */}
      <div className="grid grid-cols-4 gap-4 text-center">
        <InfoBlock label="Gate" value={flight.departure.gate} />
        <InfoBlock label="Seat" value={flight.seat} />
        <InfoBlock label="Terminal" value={flight.arrival.terminal} />
        <InfoBlock label="Flight" value={flight.flightNumber} />
      </div>
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

export default BookingFlightCard;
