import { Button } from "./button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="ghost"
      className="rounded-full h-12 w-12 mb-4 cursor-pointer self-start bg-gray-100 hover:bg-gray-200"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft />
    </Button>
  );
}

export default BackButton;
