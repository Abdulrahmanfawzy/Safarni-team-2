
import type { Plan } from "../../lib/types/typesCar";
import { Clock, Calendar } from "lucide-react";

interface Props {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}

export default function PlanCard({ plan, selected, onSelect }: Props) {

  const Icon = plan.unit === "hour" ? Clock : Calendar;
  
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between rounded-md border cursor-pointer transition overflow-hidden
        ${selected ? "border-blue-500  bg-blue-100" : "border-gray-200 bg-gray-300"}
      `}
    >

      <div className={` w-20 flex flex-col items-center gap-1 ${selected ? "text-blue-600" : "border-gray-50"}`}>
        <Icon size={18} />
        ${plan.price}
      </div>

      <div className={` flex-1 px-2 py-6 bg-white ${selected ? "" : "border-gray-100"}`}>
        <p className="font-medium text-lg">{plan.title}</p>
        <p className="text-sm text-gray-500">{plan.description}</p>
      </div>

    </div>
  );
}
