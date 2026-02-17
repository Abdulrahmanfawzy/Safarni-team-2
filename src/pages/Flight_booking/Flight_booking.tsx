import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci"; 
import { FaPlaneDeparture } from "react-icons/fa";


type Flight = {
  departTime: string;
  arriveTime: string;
  from: string;
  to: string;
  duration: string;
  airline: string;
  price: number;
};

const flights: Flight[] = [
  { departTime: "7:05 AM", arriveTime: "8:55 PM", from: "YUL", to: "YUL", duration: "18:55", airline: "Scoot", price: 1300 },
  { departTime: "9:05 AM", arriveTime: "4:05 PM", from: "YUL", to: "YUL", duration: "18:55", airline: "Scoot", price: 1400 },
  { departTime: "9:05 AM", arriveTime: "4:55 PM", from: "YUL", to: "YUL", duration: "18:55", airline: "Scoot", price: 1300 },
];

export default function FlightResults() {
  const [date1, setDate1] = useState<Date | null>(new Date("2025-12-16"));
  const [date2, setDate2] = useState<Date | null>(new Date("2025-01-06"));

  return (

    <div className="min-h-screen w-full bg-[#f0f2f5] flex items-center justify-center p-4 font-sans">
      
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl overflow-hidden border border-blue-200">
        

        <div className="grid grid-cols-2 border-b border-gray-100">
          <div className="flex items-center justify-center gap-3 p-5 border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
            <CiCalendarDate className="text-2xl text-gray-500" />
            <DatePicker
              selected={date1}
              onChange={(date) => setDate1(date)}
              dateFormat="MMM d, yyyy"
              className="bg-transparent font-semibold text-gray-700 outline-none cursor-pointer w-32"
            />
          </div>
          <div className="flex items-center justify-center gap-3 p-5 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-xl">👤</span>
            <DatePicker
              selected={date2}
              onChange={(date) => setDate2(date)}
              dateFormat="MMM d, yyyy"
              className="bg-transparent font-semibold text-gray-700 outline-none cursor-pointer w-32"
            />
          </div>
        </div>

        <div className="p-6 bg-[#f8f9fb]">
          <div className="flex flex-col gap-6">
            {flights.map((flight, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FlightCard flight={flight} />
                <FlightCard flight={flight} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="relative flex justify-between items-center bg-white rounded-xl p-6 shadow-sm border border-gray-50 hover:shadow-md transition-shadow overflow-hidden">
      
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f8f9fb] rounded-full border-r border-gray-100"></div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f8f9fb] rounded-full border-l border-gray-100"></div>

      <div className="flex flex-col">
        <p className="text-xl font-bold text-gray-800">{flight.departTime}</p>
        <p className="text-sm font-bold text-gray-400 uppercase">{flight.from}</p>
        <p className="text-[10px] text-gray-400 mt-2">1 layover: YYZ (3:55)</p>
        <p className="text-sm font-bold text-gray-700 mt-1">{flight.airline}</p>
      </div>


      <div className="flex flex-col items-center flex-1 px-4">
        <span className="text-xs text-gray-400 mb-1 flex"> <FaPlaneDeparture />
 {flight.duration}</span>
        <div className="w-full h-[1px] bg-gray-200 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>


      <div className="flex flex-col items-end">
        <div className="text-right mb-4">
          <p className="text-xl font-bold text-gray-800">{flight.arriveTime}</p>
          <p className="text-sm font-bold text-gray-400 uppercase">{flight.to}</p>
        </div>
        <p className="text-2xl font-black text-gray-900">${flight.price.toLocaleString()}</p>
      </div>
    </div>
  );
}