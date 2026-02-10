import { ChevronLeft } from "lucide-react";
import { Search } from 'lucide-react';
export default function SearchHotel() {
    return (
        <div className="flex gap-5 items-center justify-center">
            <div className="bg-gray-100  w-15 h-15 rounded-full flex items-center justify-center">
                <ChevronLeft />
            </div>
            <div className="border-2 w-9/12 flex items-center gap-4 border-gray-100 rounded-2xl px-3 py-3 ">
                <Search className="text-gray-400"/>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-0"
                />
            </div>
        </div>
    );
}
