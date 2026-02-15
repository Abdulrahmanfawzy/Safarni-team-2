import { favoritesData } from "../pages/Favorites/data";
import PreviousButton from "./PreviousButton";
import { TravelCard } from "./TravelCard";

export default function ResultPage() {
  return (
    <main className="container xl:max-w-6xl mx-auto px-2 space-y-8">
      <PreviousButton />
      <div className="space-y-4">
        <p className=" text-[30px] text-gray-900  font-semibold">
          Paris{" "}
          <span className=" text-[20px] text-gray-600 font-medium">
            56 results
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritesData.map((item) => (
            <TravelCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
