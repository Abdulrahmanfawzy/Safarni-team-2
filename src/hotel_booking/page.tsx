import SearchHotel from "./Components/Search";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "../components/ui/skeleton";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

async function fetchHotels(limit: number) {
    const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=10`,
    );
    return res.json();
}
export default function Hotel_booking() {
    const [viewing, setViewing] = useState(false);
    const [limit, setLimit] = useState(4);

    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchHotels(limit),
        queryKey: ["hotels", limit],
    });
    return (
        <section className="px-12">
            <SearchHotel />
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold my-4 text-gray-900">
                    Recommendation
                </h2>

                <button
                    onClick={() => {
                        setViewing((prev) => !prev);
                        setLimit((prev) => (viewing ? 4 : prev + 8));
                    }}
                    className="text-[#1E429F] font-bold cursor-pointer "
                >
                    {viewing ? "See Less" : "View All"}
                </button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {/* Recommendation cards */}
            <div className="flex flex-wrap justify-center gap-5">
                {data?.products?.map((p: any) => (
                    <div
                        style={{ boxShadow: "0 0 26.37px 0 #6F6F6F40" }}
                        key={p.id}
                        className="p-2 rounded-2xl lg:w-2/10 md:w-4/12 w-full grid justify-between gap-2 cursor-pointer items-center"
                    >
                        {p.thumbnail ? (
                            <img
                                src={p.thumbnail}
                                className="rounded-2xl"
                                alt={p.title}
                            />
                        ) : (
                            <Skeleton className="h-52 w-full rounded-2xl bg-gray-200 animate-pulse" />
                        )}
                        <div className="flex justify-between w-full px-2">
                            <span className="bg-[#EBF5FF] text-[#1E429F] text-[14px] rounded-2xl px-3 py-1">
                                %{Math.round(p.discountPercentage)} Off
                            </span>
                            <div className="flex gap-1">
                                <Star
                                    fill="#FACC15"
                                    className="text-[#FACC15]"
                                />
                                <p className="">{p.rating}</p>
                            </div>
                        </div>
                        <h3 className="self-start px-2">{p.title}</h3>
                        <p className="text-gray-400 flex gap-2 justify-start items-center  self-start">
                            <MapPin />
                            {p.category}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-gray-900">Nearby Hotel</h2>
                
            </div>
        </section>
    );
}
