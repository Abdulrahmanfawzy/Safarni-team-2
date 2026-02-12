import { Button } from "./button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="ghost"
      className="rounded-full h-15 w-15 mb-8 cursor-pointer self-start bg-[#F3F4F6]"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft />
    </Button>
  );
}

export default BackButton;
