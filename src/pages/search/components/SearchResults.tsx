import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const results = [
    "Paris",
    "Paris, ontario",
    "Paris, Texas, United States",
    "Paris, Tennessee, United States",
  ];
  return (
    <section className="flex gap-6 flex-col">
      {results.map((r) => {
        return (
          <Link
            to={"/result"}
            className="flex gap-4 items-center cursor-pointer"
          >
            <div className="bg-(--secondary-blue) rounded-xl py-3 px-4">
              <MapPin
                stroke="var(--primary-blue)"
                width={43.75}
                height={52.5}
              />
            </div>
            <p className="font-medium text-[25px] text-gray-900 ">{r}</p>
          </Link>
        );
      })}
    </section>
  );
}
