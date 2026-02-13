import { Search, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../components/ui/input-group";

export default function LocationFilter() {
  return (
    <div className="space-y-3">
      <p className="text-[24px] font-semibold text-gray-800">Location</p>
      <InputGroup className="border-gray-400">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <div>
            <Search stroke="var(--color-gray-400)" strokeWidth={1} />
          </div>
        </InputGroupAddon>
      </InputGroup>
      <div className="rounded-full border-2 px-6 py-2 text-[20px] font-medium  border-(--secondary-blue) w-fit  flex gap-1 items-center">
        <X strokeWidth={1} className="cursor-pointer" />
        <p>Paris</p>
      </div>
    </div>
  );
}
