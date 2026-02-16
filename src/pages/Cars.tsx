import Brand from "../components/cars/Brand";
import Car from "../components/cars/Car";
import BackButton from "../components/ui/BackButton";
import { Search } from "lucide-react";



export default function CarsPage() {
  return (
    <div className=" px-4 md:px-6 lg:px-28 py-2">
      <div className="flex items-center gap-2 md:gap-3">
        <BackButton />
        <div className="border-2 w-full flex mb-4 items-center gap-4 border-gray-100 rounded-xl px-3 py-3 relative">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-0"
          />
        </div>
      </div>
      <Brand />
      <Car />
    </div>
  )
}
