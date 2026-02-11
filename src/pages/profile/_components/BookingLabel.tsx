import React from "react";

function BookingLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="bg-[#F3F4F6] flex cursor-pointer hover:bg-(--secondary-blue) hover:text-(--primary-blue) py-4 px-22 rounded-[66px]">
      {children}
    </label>
  );
}

export default BookingLabel;
