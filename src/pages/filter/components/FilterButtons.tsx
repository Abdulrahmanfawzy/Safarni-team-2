import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function FilterButtons() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-6 my-12">
      <Button
        variant={"outline"}
        className="font-semibold text-[20px] py-6 flex-1 cursor-pointer"
      >
        Clear All
      </Button>
      <Button
        onClick={() => navigate("/result")}
        className="font-semibold text-[20px] py-6 flex-1 border shadow-xs cursor-pointer"
      >
        56 Tours Found
      </Button>
    </div>
  );
}
