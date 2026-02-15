import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div
      onClick={handleBack}
      className="cursor-pointer icon absolute left-0 -top-16 p-3 rounded-full bg-[#F3F4F6] z-10"
    >
      <ChevronLeft size={22} color="#0D0D0D" />
    </div>
  );
}
