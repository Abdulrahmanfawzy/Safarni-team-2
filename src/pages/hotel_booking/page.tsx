import SearchHotel from "./Components/Search";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import HotelCardRec from "./Components/HotelCardRec";
import HotelCardNearBySection from "./Components/HotelCardNearBySection";
import { Skeleton } from "../../components/ui/skeleton";
async function fetchHotels(limit: number) {
    const res = await fetch(`https://dummyjson.com/products?limit=100&skip=10`);
    return res.json();
}

export default function Hotel_booking() {
    const [viewingRecommendation, setViewingRecommendation] = useState(false);
    const [limitRecommendation, setLimitRecommendation] = useState(4);

    const [viewingNearby, setViewingNearby] = useState(false);
    const [limitNearby, setLimitNearby] = useState(4);



    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchHotels(100),
        queryKey: ["hotels"],
    });

    return (
        <section className="lg:px-12 md:px-8 px-4">
            <SearchHotel products={data?.products}/>

            <div className="flex justify-between items-center">
                <h2 className="md:text-2xl font-bold my-5 text-gray-900">
                    Recommendation
                </h2>

                <button
                    onClick={() => {
                        setViewingRecommendation((prev) => !prev);
                        setLimitRecommendation((prev) =>
                            viewingRecommendation ? 4 : prev + 8,
                        );
                    }}
                    className="text-[#1E429F] font-bold cursor-pointer"
                >
                    {viewingRecommendation ? "See Less" : "View All"}
                </button>
            </div>
            {isLoading && (
                <div className="flex gap-5 justify-center flex-wrap">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="h-92 lg:w-2/10 md:w-5/12 w-full rounded-2xl bg-gray-200 animate-pulse" />
                    ))}
                </div>
            )}
            {error && <p>Error: {error.message}</p>}

            <div className="flex flex-wrap justify-center gap-5">
                {data?.products?.slice(0, limitRecommendation).map((p: any) => (
                    <HotelCardRec key={p.id} product={p} />
                ))}
            </div>

            <div className="flex justify-between items-center mt-8">
                <h2 className="md:text-2xl font-bold my-5 text-gray-900">
                    Nearby Hotel
                </h2>
                <button
                    onClick={() => {
                        setViewingNearby((prev) => !prev);
                        setLimitNearby((prev) =>
                            viewingNearby ? 4 : prev + 8,
                        );
                    }}
                    className="text-[#1E429F] font-bold cursor-pointer"
                >
                    {viewingNearby ? "See Less" : "View All"}
                </button>
            </div>
            {isLoading && (
                <div className="flex gap-5 justify-center flex-wrap">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="h-48 lg:w-4/10 w-full rounded-2xl bg-gray-200 animate-pulse" />
                    ))}
                </div>
            )}
            <div className="flex flex-wrap justify-center gap-5">
                {data?.products?.slice(0, limitNearby).map((p: any) => (
                    <HotelCardNearBySection key={p.id} product={p} />
                ))}
            </div>

                
        </section>
    );
}
