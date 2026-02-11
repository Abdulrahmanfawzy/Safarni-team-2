import React from "react";

const BookingBar = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-6 ">
      <div
        className="flex items-center justify-between bg-white px-8 py-6 rounded-[12px] border border-gray-100"
        style={{ boxShadow: "10px 0px 39px 0px rgba(209, 213, 219, 0.5)" }} // تطبيق الـ Custom Shadow
      >
        <div className="flex items-baseline gap-1 font-['Poppins']">
          <span className="text-[18px] text-[#111928]">Total price :</span>
          <span className="text-[24px] font-bold text-[#1E429F]">$150.00</span>
          <span className="text-[14px] text-[#6B7280]">/night</span>
        </div>

        <button className="bg-[#1E429F] hover:bg-blue-800 text-white font-bold py-3 px-12 rounded-[8px] transition-colors duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
