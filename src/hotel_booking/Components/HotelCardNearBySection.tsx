import { Skeleton } from "../../components/ui/skeleton";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

export default function HotelCardNearBySection({ product }: { product: any }) {
    return (
        <div
            style={{ boxShadow: "0 0 26.37px 0 #6F6F6F40" }}
            className="p-2 rounded-2xl lg:w-4/10 w-full md:flex  gap-2 cursor-pointer items-center"
        >
            {product.thumbnail ? (
                <img
                    src={product.thumbnail}
                    className="rounded-2xl lg:w-3/12"
                    alt={product.title}
                />
            ) : (
                <Skeleton className="h-52 w-full rounded-2xl bg-gray-200 animate-pulse" />
            )}
            <div className="grid gap-2 items-start justify-start px-2">
                <span className="bg-[#EBF5FF] text-[#1E429F] w-auto text-[14px] rounded-2xl px-3 py-1">
                    %{Math.round(product.discountPercentage)} Off
                </span>

                <h3 className="self-start px-2">{product.title}</h3>
                <p className="text-gray-400 flex gap-2 justify-start items-center self-start">
                    <MapPin />
                    {product.category}
                </p>
            </div>
            <div className="flex gap-1">
                <Star fill="#FACC15" className="text-[#FACC15]" />
                <p className="">{product.rating}</p>
            </div>
        </div>
    );
}
