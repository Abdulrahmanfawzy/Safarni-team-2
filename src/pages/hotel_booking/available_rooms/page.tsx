import HotelCardsAvailable from "../Components/HotelCardsAvailable";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../../../components/ui/skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Available_rooms() {
    const { category } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["Hotel", category],
        queryFn: async () => {
            const res = await fetch(
                `https://dummyjson.com/products/category/${category}`,
            );
            return res.json();
        },
        enabled: !!category,});
    return (
        <section className="lg:px-12 md:px-8 px-4">
            <button onClick={()=>navigate(-1)} className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
                <ChevronLeft />
            </button>
            <h2 className="md:text-2xl font-bold my-5 text-gray-900">
                Available Rooms
            </h2>
            {isLoading && (
                <div className="flex md:flex-row flex-col gap-5 justify-center flex-wrap">
                    {Array.from({ length: 8 }).map((_,i) => (
                        <Skeleton key={i} className="h-92 lg:w-2/10 md:w-5/12 w-full rounded-2xl bg-gray-200 animate-pulse" />
                    ))}
                </div>
            )}
            <div className="flex flex-wrap justify-center gap-5">
                {data?.products?.map((p: any) => (
                    <HotelCardsAvailable key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}
