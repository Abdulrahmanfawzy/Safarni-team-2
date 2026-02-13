import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PreviousButton() {
  const navigate = useNavigate();
  const goToPreviousUrl = () => {
    navigate(-1);
  };
  return (
    <div
      className="bg-gray-100 rounded-full aspect-square flex p-3.75 w-fit cursor-pointer hover:bg-gray-200 duration-200"
      onClick={goToPreviousUrl}
    >
      <ChevronLeft size={30} />
    </div>
  );
}
