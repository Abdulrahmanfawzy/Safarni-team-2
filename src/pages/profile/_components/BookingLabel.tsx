import React, { type ReactNode } from "react";
import type { BookingType } from "../types";
import { Button } from "../../../components/ui/button";

type Props = {
  type: BookingType;
  active: BookingType;
  onSelect: (type: BookingType) => void;
  children: ReactNode;
};

function BookingLabel({ type, active, onSelect, children }: Props) {
  const isActive = active === type;
  return (
    // <Button className="bg-[#F3F4F6] flex cursor-pointer hover:bg-(--secondary-blue) hover:text-(--primary-blue) py-4 px-22 rounded-[66px]">
    //   {children}
    // </Button>
    <Button
      onClick={() => onSelect(type)}
      className={`bg-[#F3F4F6] w-70 flex cursor-pointer hover:bg-(--secondary-blue) hover:text-(--primary-blue) py-4 px-22 rounded-[66px] ${
        isActive
          ? "text-(--primary-blue) "
          : "bg-white text-gray-600 hover:bg-gray-200"
      }`}
    >
      {children}
    </Button>
  );
}

export default BookingLabel;
